"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimsTools = void 0;
exports.handleClaimsTool = handleClaimsTool;
const connections_1 = require("../../connections");
// Configuration constants
const EXCLUDED_DOMAINS = ['pureplay.media'];
const MATCH_THRESHOLD = 0.75;
const AUTO_PROMOTE_THRESHOLD = 3;
// Helper function
function extractDomain(email) {
    const match = email.match(/@([^>]+)/);
    return match ? match[1].toLowerCase() : '';
}
// Tool definitions
exports.claimsTools = [
    {
        name: 'claims_list',
        description: 'List claims with optional filters',
        inputSchema: {
            type: 'object',
            properties: {
                context_layer: { type: 'string', enum: ['company', 'icp', 'client'], description: 'Filter by context layer' },
                status: { type: 'string', enum: ['candidate', 'curated', 'deprecated'], description: 'Filter by status' },
                limit: { type: 'number', description: 'Max results (default 50)' },
            },
        },
    },
    {
        name: 'claims_search',
        description: 'Semantic search for claims using vector similarity',
        inputSchema: {
            type: 'object',
            properties: {
                query: { type: 'string', description: 'Search query' },
                threshold: { type: 'number', description: 'Similarity threshold (0-1, default 0.7)' },
                limit: { type: 'number', description: 'Max results (default 10)' },
            },
            required: ['query'],
        },
    },
    {
        name: 'claims_add_citation',
        description: 'Add a citation to support an existing claim',
        inputSchema: {
            type: 'object',
            properties: {
                claim_id: { type: 'string', description: 'Claim ID to add citation to' },
                summary: { type: 'string', description: 'Summary of the evidence' },
                quotation: { type: 'string', description: 'Direct quote (optional)' },
                source_type: { type: 'string', enum: ['email', 'slack', 'document', 'meeting'], description: 'Source type' },
                source_id: { type: 'string', description: 'Source identifier (e.g., message ID)' },
                source_link: { type: 'string', description: 'Link to source' },
            },
            required: ['claim_id', 'summary', 'source_type', 'source_id'],
        },
    },
    {
        name: 'claims_create_candidate',
        description: 'Create a new claim candidate',
        inputSchema: {
            type: 'object',
            properties: {
                statement: { type: 'string', description: 'The claim statement' },
                type: { type: 'string', enum: ['descriptive', 'interpretive', 'normative', 'predictive', 'definitional'], description: 'Type of claim' },
                context_layer: { type: 'string', enum: ['company', 'icp', 'client'], description: 'Context layer' },
                client_id: { type: 'string', description: 'Client ID (required for client layer)' },
                summary: { type: 'string', description: 'Supporting evidence summary' },
                quotation: { type: 'string', description: 'Direct quote (optional)' },
                source_type: { type: 'string', enum: ['email', 'slack', 'document', 'meeting'], description: 'Source type' },
                source_id: { type: 'string', description: 'Source identifier' },
                source_link: { type: 'string', description: 'Link to source' },
            },
            required: ['statement', 'type', 'context_layer', 'summary', 'source_type', 'source_id'],
        },
    },
    {
        name: 'claims_auto_promote',
        description: 'Automatically promote candidates with 3+ citations to curated status',
        inputSchema: { type: 'object', properties: {} },
    },
    {
        name: 'claims_get_lineage',
        description: 'Get full provenance: claim → citations → evidence → sources',
        inputSchema: {
            type: 'object',
            properties: {
                claim_id: { type: 'string', description: 'Claim ID to get lineage for' },
            },
            required: ['claim_id'],
        },
    },
    {
        name: 'claims_extract_from_text',
        description: 'Extract potential claims from text using AI (returns structured data for matching)',
        inputSchema: {
            type: 'object',
            properties: {
                text: { type: 'string', description: 'Text to extract claims from' },
                sender: { type: 'string', description: 'Email sender or source context' },
                subject: { type: 'string', description: 'Subject line or title' },
            },
            required: ['text'],
        },
    },
    {
        name: 'claims_classify_context',
        description: 'Determine context layer (company/ICP/client) based on sender domain',
        inputSchema: {
            type: 'object',
            properties: {
                email: { type: 'string', description: 'Email address to classify' },
            },
            required: ['email'],
        },
    },
    {
        name: 'claims_match_existing',
        description: 'Find matching existing claims using vector similarity',
        inputSchema: {
            type: 'object',
            properties: {
                statement: { type: 'string', description: 'Claim statement to match' },
                type: { type: 'string', description: 'Type of claim' },
                context_layer: { type: 'string', enum: ['company', 'icp', 'client'], description: 'Context layer' },
                client_id: { type: 'string', description: 'Client ID (for client layer)' },
                threshold: { type: 'number', description: 'Similarity threshold (default 0.75)' },
            },
            required: ['statement', 'context_layer'],
        },
    },
    {
        name: 'claims_get_or_create_client',
        description: 'Find or create a client by email domain',
        inputSchema: {
            type: 'object',
            properties: {
                domain: { type: 'string', description: 'Email domain' },
                name: { type: 'string', description: 'Client name (optional, uses domain if not provided)' },
            },
            required: ['domain'],
        },
    },
];
// Helper to execute Snowflake queries
async function executeClaimsQuery(sql, binds = []) {
    const connection = connections_1.connectionManager.getConnection('snowflake');
    if (!connection) {
        throw new Error('Snowflake connection not available. Claims tools require Snowflake connection.');
    }
    return new Promise((resolve, reject) => {
        connection.execute({
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
// Tool handler
async function handleClaimsTool(name, args) {
    try {
        switch (name) {
            case 'claims_list': {
                let sql = 'SELECT * FROM PUREPLAY.CLAIMS.CLAIMS WHERE 1=1';
                const binds = [];
                const conditions = [];
                if (args?.context_layer) {
                    conditions.push('context_layer = ?');
                    binds.push(args.context_layer);
                }
                if (args?.status) {
                    conditions.push('status = ?');
                    binds.push(args.status);
                }
                if (conditions.length > 0) {
                    sql += ' AND ' + conditions.join(' AND ');
                }
                sql += ' ORDER BY updated_at DESC';
                const limit = Math.min(args?.limit || 50, 200);
                sql += ` LIMIT ${limit}`;
                const rows = await executeClaimsQuery(sql, binds);
                return {
                    content: [{ type: 'text', text: JSON.stringify(rows, null, 2) }],
                };
            }
            case 'claims_search': {
                const { query, threshold = 0.7, limit = 10 } = args;
                const sql = `
          WITH query_embedding AS (
            SELECT SNOWFLAKE.CORTEX.EMBED_TEXT_768('snowflake-arctic-embed-m', ?) as emb
          )
          SELECT c.*, VECTOR_COSINE_SIMILARITY(c.embedding, q.emb) as similarity_score
          FROM PUREPLAY.CLAIMS.CLAIMS c
          CROSS JOIN query_embedding q
          WHERE VECTOR_COSINE_SIMILARITY(c.embedding, q.emb) >= ?
          ORDER BY similarity_score DESC
          LIMIT ?
        `;
                const rows = await executeClaimsQuery(sql, [query, threshold, limit]);
                return { content: [{ type: 'text', text: JSON.stringify({ query, results: rows }, null, 2) }] };
            }
            case 'claims_add_citation': {
                const { claim_id, summary, quotation, source_type, source_id, source_link } = args;
                const citationId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                // Add citation
                await executeClaimsQuery(`INSERT INTO PUREPLAY.CLAIMS.CITATIONS (id, claim_id, summary, quotation, source_type, source_id, source_link)
           VALUES (?, ?, ?, ?, ?, ?, ?)`, [citationId, claim_id, summary, quotation || null, source_type, source_id, source_link || null]);
                // Update claim updated_at
                await executeClaimsQuery('UPDATE PUREPLAY.CLAIMS.CLAIMS SET updated_at = CURRENT_TIMESTAMP() WHERE id = ?', [claim_id]);
                return {
                    content: [{ type: 'text', text: JSON.stringify({ citationId, claim_id, success: true }, null, 2) }],
                };
            }
            case 'claims_create_candidate': {
                const { statement, type, context_layer, client_id, summary, quotation, source_type, source_id, source_link } = args;
                if (context_layer === 'client' && !client_id) {
                    throw new Error('client_id is required for client context layer');
                }
                const claimId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                const citationId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                // Generate embedding for the claim
                const embeddingRows = await executeClaimsQuery(`SELECT SNOWFLAKE.CORTEX.EMBED_TEXT_768('snowflake-arctic-embed-m', ?) as embedding`, [statement]);
                const embedding = embeddingRows[0]?.EMBEDDING;
                // Create claim candidate
                await executeClaimsQuery(`INSERT INTO PUREPLAY.CLAIMS.CLAIMS (id, statement, type, context_layer, client_id, status, embedding)
           VALUES (?, ?, ?, ?, ?, 'candidate', ?)`, [claimId, statement, type, context_layer, client_id || null, embedding]);
                // Add initial citation
                await executeClaimsQuery(`INSERT INTO PUREPLAY.CLAIMS.CITATIONS (id, claim_id, summary, quotation, source_type, source_id, source_link)
           VALUES (?, ?, ?, ?, ?, ?, ?)`, [citationId, claimId, summary, quotation || null, source_type, source_id, source_link || null]);
                return {
                    content: [{ type: 'text', text: JSON.stringify({ claimId, citationId, status: 'candidate' }, null, 2) }],
                };
            }
            case 'claims_auto_promote': {
                // Find candidates with 3+ citations
                const candidates = await executeClaimsQuery(`
          SELECT c.id, c.statement, COUNT(ct.id) as citation_count
          FROM PUREPLAY.CLAIMS.CLAIMS c
          JOIN PUREPLAY.CLAIMS.CITATIONS ct ON c.id = ct.claim_id
          WHERE c.status = 'candidate'
          GROUP BY c.id, c.statement
          HAVING COUNT(ct.id) >= ?
        `, [AUTO_PROMOTE_THRESHOLD]);
                let promoted = 0;
                for (const candidate of candidates) {
                    await executeClaimsQuery('UPDATE PUREPLAY.CLAIMS.CLAIMS SET status = ? WHERE id = ?', ['curated', candidate.ID]);
                    promoted++;
                }
                return {
                    content: [{ type: 'text', text: JSON.stringify({ promoted, threshold: AUTO_PROMOTE_THRESHOLD }, null, 2) }],
                };
            }
            case 'claims_get_lineage': {
                const { claim_id } = args;
                const sql = `
          SELECT
            c.id as claim_id, c.statement, c.type, c.status, c.context_layer, c.client_id,
            ct.id as citation_id, ct.summary, ct.quotation, ct.source_type, ct.source_id, ct.source_link
          FROM PUREPLAY.CLAIMS.CLAIMS c
          LEFT JOIN PUREPLAY.CLAIMS.CITATIONS ct ON c.id = ct.claim_id
          WHERE c.id = ?
          ORDER BY ct.created_at DESC
        `;
                const rows = await executeClaimsQuery(sql, [claim_id]);
                return { content: [{ type: 'text', text: JSON.stringify(rows, null, 2) }] };
            }
            case 'claims_extract_from_text': {
                const { text, sender, subject } = args;
                // This would typically use an LLM to extract claims
                // For now, return a placeholder structure
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                text: text.substring(0, 200) + '...',
                                sender,
                                subject,
                                extractedClaims: [],
                                note: 'Claim extraction requires LLM integration - not implemented in demo version'
                            }, null, 2)
                        }]
                };
            }
            case 'claims_classify_context': {
                const { email } = args;
                const domain = extractDomain(email);
                if (EXCLUDED_DOMAINS.includes(domain)) {
                    return {
                        content: [{ type: 'text', text: JSON.stringify({ contextLayer: 'company', clientId: null }, null, 2) }],
                    };
                }
                // Check if domain exists in clients table
                const clients = await executeClaimsQuery('SELECT id FROM PUREPLAY.CLAIMS.CLIENTS WHERE domain = ?', [domain]);
                if (clients.length > 0) {
                    return {
                        content: [{ type: 'text', text: JSON.stringify({ contextLayer: 'client', clientId: clients[0].ID }, null, 2) }],
                    };
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                contextLayer: 'company',
                                clientId: null,
                                note: `Unknown domain: ${domain}. Use claims_get_or_create_client to register.`
                            }, null, 2)
                        }]
                };
            }
            case 'claims_match_existing': {
                const { statement, context_layer, client_id, threshold = MATCH_THRESHOLD } = args;
                let sql = `
          WITH query_embedding AS (
            SELECT SNOWFLAKE.CORTEX.EMBED_TEXT_768('snowflake-arctic-embed-m', ?) as emb
          )
          SELECT c.*, VECTOR_COSINE_SIMILARITY(c.embedding, q.emb) as similarity_score
          FROM PUREPLAY.CLAIMS.CLAIMS c
          CROSS JOIN query_embedding q
          WHERE c.context_layer = ? AND VECTOR_COSINE_SIMILARITY(c.embedding, q.emb) >= ?
        `;
                const binds = [statement, context_layer, threshold];
                if (context_layer === 'client' && client_id) {
                    sql += ' AND c.client_id = ?';
                    binds.push(client_id);
                }
                sql += ' ORDER BY similarity_score DESC LIMIT 5';
                const matches = await executeClaimsQuery(sql, binds);
                return { content: [{ type: 'text', text: JSON.stringify({ matches, threshold }, null, 2) }] };
            }
            case 'claims_get_or_create_client': {
                const { domain, name } = args;
                // Check existing
                const existing = await executeClaimsQuery('SELECT id, name FROM PUREPLAY.CLAIMS.CLIENTS WHERE domain = ?', [domain]);
                if (existing.length > 0) {
                    return {
                        content: [{
                                type: 'text',
                                text: JSON.stringify({ clientId: existing[0].ID, name: existing[0].NAME, created: false }, null, 2)
                            }]
                    };
                }
                // Create new
                const clientId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                await executeClaimsQuery('INSERT INTO PUREPLAY.CLAIMS.CLIENTS (id, name, domain) VALUES (?, ?, ?)', [clientId, name || domain, domain]);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({ clientId, name: name || domain, created: true }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown claims tool: ${name}` }],
                    isError: true,
                };
        }
    }
    catch (error) {
        return {
            content: [{ type: 'text', text: `Claims tool error: ${error instanceof Error ? error.message : 'Unknown error'}` }],
            isError: true,
        };
    }
}
//# sourceMappingURL=index.js.map