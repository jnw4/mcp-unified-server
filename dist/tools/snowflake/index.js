"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snowflakeTools = void 0;
exports.handleSnowflakeTool = handleSnowflakeTool;
const snowflake_sdk_1 = __importDefault(require("snowflake-sdk"));
const fs_1 = require("fs");
// Configuration from environment
const config = {
    account: process.env.SNOWFLAKE_ACCOUNT || '',
    username: process.env.SNOWFLAKE_USER || '',
    warehouse: process.env.SNOWFLAKE_WAREHOUSE || '',
    database: process.env.SNOWFLAKE_DATABASE || '',
    authenticator: process.env.SNOWFLAKE_AUTHENTICATOR || 'EXTERNALBROWSER',
    privateKeyPath: process.env.SNOWFLAKE_PRIVATE_KEY_PATH || '',
};
// Connection pool
let connection = null;
async function getConnection() {
    if (connection) {
        return connection;
    }
    const connectionConfig = {
        account: config.account,
        username: config.username,
        warehouse: config.warehouse,
        database: config.database,
    };
    // Add private key for JWT authentication if available
    if (config.privateKeyPath) {
        try {
            connectionConfig.privateKey = (0, fs_1.readFileSync)(config.privateKeyPath, 'utf8');
        }
        catch (error) {
            throw new Error(`Failed to read Snowflake private key from ${config.privateKeyPath}: ${error}`);
        }
    }
    else {
        // Fall back to authenticator if no private key
        connectionConfig.authenticator = config.authenticator;
    }
    connection = snowflake_sdk_1.default.createConnection(connectionConfig);
    // Use connectAsync for external browser authenticator compatibility
    await new Promise((resolve, reject) => {
        connection.connectAsync((err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
    return connection;
}
async function executeQuery(sql, binds = []) {
    const conn = await getConnection();
    return new Promise((resolve, reject) => {
        conn.execute({
            sqlText: sql,
            binds,
            complete: (err, stmt, rows) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows || []);
                }
            },
        });
    });
}
// Tool definitions
exports.snowflakeTools = [
    {
        name: 'snowflake_run_query',
        description: 'Execute a SQL query against Snowflake and return results',
        inputSchema: {
            type: 'object',
            properties: {
                sql: { type: 'string', description: 'The SQL query to execute' },
                binds: { type: 'array', items: { type: 'string' }, description: 'Optional parameter bindings' },
                limit: { type: 'number', description: 'Maximum rows to return (default 100)' },
            },
            required: ['sql'],
        },
    },
    {
        name: 'snowflake_list_databases',
        description: 'List all databases accessible to the user',
        inputSchema: { type: 'object', properties: {} },
    },
    {
        name: 'snowflake_list_schemas',
        description: 'List all schemas in a database',
        inputSchema: {
            type: 'object',
            properties: {
                database: { type: 'string', description: 'Database name (default: current database)' },
            },
        },
    },
    {
        name: 'snowflake_list_tables',
        description: 'List all tables in a schema',
        inputSchema: {
            type: 'object',
            properties: {
                database: { type: 'string', description: 'Database name (default: current database)' },
                schema: { type: 'string', description: 'Schema name (default: PUBLIC)' },
            },
        },
    },
    {
        name: 'snowflake_describe_table',
        description: 'Get column information for a table',
        inputSchema: {
            type: 'object',
            properties: {
                table: { type: 'string', description: 'Fully qualified table name (e.g., DB.SCHEMA.TABLE)' },
            },
            required: ['table'],
        },
    },
    {
        name: 'snowflake_preview_table',
        description: 'Preview sample rows from a table',
        inputSchema: {
            type: 'object',
            properties: {
                table: { type: 'string', description: 'Fully qualified table name' },
                limit: { type: 'number', description: 'Number of rows to preview (default 10, max 100)' },
            },
            required: ['table'],
        },
    },
    {
        name: 'snowflake_generate_embedding',
        description: 'Generate a text embedding using Snowflake Cortex Arctic model',
        inputSchema: {
            type: 'object',
            properties: {
                text: { type: 'string', description: 'Text to generate embedding for' },
            },
            required: ['text'],
        },
    },
    {
        name: 'snowflake_vector_search',
        description: 'Search for similar records using vector cosine similarity',
        inputSchema: {
            type: 'object',
            properties: {
                table: { type: 'string', description: 'Table with embedding column' },
                embeddingColumn: { type: 'string', description: 'Name of the embedding column' },
                queryText: { type: 'string', description: 'Text to search for (will be embedded)' },
                threshold: { type: 'number', description: 'Minimum similarity score (0-1, default 0.7)' },
                limit: { type: 'number', description: 'Maximum results (default 10)' },
                selectColumns: { type: 'array', items: { type: 'string' }, description: 'Columns to return (default: all)' },
            },
            required: ['table', 'embeddingColumn', 'queryText'],
        },
    },
];
// Tool handler
async function handleSnowflakeTool(name, args) {
    switch (name) {
        case 'snowflake_run_query': {
            const sql = args?.sql;
            const binds = args?.binds || [];
            const limit = args?.limit || 100;
            let finalSql = sql;
            if (sql.trim().toUpperCase().startsWith('SELECT') && !sql.toUpperCase().includes('LIMIT')) {
                finalSql = `${sql} LIMIT ${limit}`;
            }
            const rows = await executeQuery(finalSql, binds);
            return {
                content: [{ type: 'text', text: JSON.stringify({ rowCount: rows.length, rows: rows.slice(0, limit) }, null, 2) }],
            };
        }
        case 'snowflake_list_databases': {
            const rows = await executeQuery('SHOW DATABASES');
            const databases = rows.map((r) => ({ name: r.name, owner: r.owner, created: r.created_on }));
            return { content: [{ type: 'text', text: JSON.stringify(databases, null, 2) }] };
        }
        case 'snowflake_list_schemas': {
            const database = args?.database || config.database;
            const rows = await executeQuery(`SHOW SCHEMAS IN DATABASE ${database}`);
            const schemas = rows.map((r) => ({ name: r.name, database, owner: r.owner }));
            return { content: [{ type: 'text', text: JSON.stringify(schemas, null, 2) }] };
        }
        case 'snowflake_list_tables': {
            const database = args?.database || config.database;
            const schema = args?.schema || 'PUBLIC';
            const rows = await executeQuery(`SHOW TABLES IN ${database}.${schema}`);
            const tables = rows.map((r) => ({ name: r.name, schema, database, rows: r.rows, created: r.created_on }));
            return { content: [{ type: 'text', text: JSON.stringify(tables, null, 2) }] };
        }
        case 'snowflake_describe_table': {
            const table = args?.table;
            const rows = await executeQuery(`DESCRIBE TABLE ${table}`);
            const columns = rows.map((r) => ({
                name: r.name,
                type: r.type,
                nullable: r.null === 'Y',
                default: r.default,
                primaryKey: r.primary_key === 'Y',
            }));
            return { content: [{ type: 'text', text: JSON.stringify(columns, null, 2) }] };
        }
        case 'snowflake_preview_table': {
            const table = args?.table;
            const limit = Math.min(args?.limit || 10, 100);
            const rows = await executeQuery(`SELECT * FROM ${table} LIMIT ${limit}`);
            return { content: [{ type: 'text', text: JSON.stringify({ rowCount: rows.length, rows }, null, 2) }] };
        }
        case 'snowflake_generate_embedding': {
            const text = args?.text;
            const sql = `SELECT SNOWFLAKE.CORTEX.EMBED_TEXT_768('snowflake-arctic-embed-m', ?) as embedding`;
            const rows = await executeQuery(sql, [text]);
            return {
                content: [{
                        type: 'text',
                        text: JSON.stringify({
                            text: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
                            embeddingDimensions: 768,
                            embedding: rows[0]?.EMBEDDING,
                        }, null, 2),
                    }],
            };
        }
        case 'snowflake_vector_search': {
            const { table, embeddingColumn, queryText, threshold = 0.7, limit = 10, selectColumns = ['*'] } = args;
            const selectList = selectColumns.join(', ');
            const sql = `
        WITH query_embedding AS (
          SELECT SNOWFLAKE.CORTEX.EMBED_TEXT_768('snowflake-arctic-embed-m', ?) as emb
        )
        SELECT ${selectList}, VECTOR_COSINE_SIMILARITY(${embeddingColumn}, q.emb) as similarity_score
        FROM ${table} t
        CROSS JOIN query_embedding q
        WHERE VECTOR_COSINE_SIMILARITY(${embeddingColumn}, q.emb) >= ?
        ORDER BY similarity_score DESC
        LIMIT ?
      `;
            const rows = await executeQuery(sql, [queryText, threshold, limit]);
            return { content: [{ type: 'text', text: JSON.stringify({ query: queryText, threshold, results: rows }, null, 2) }] };
        }
        default:
            return { content: [{ type: 'text', text: `Unknown Snowflake tool: ${name}` }], isError: true };
    }
}
//# sourceMappingURL=index.js.map