"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabaseTools = void 0;
exports.handleSupabaseTool = handleSupabaseTool;
const supabase_js_1 = require("@supabase/supabase-js");
// Get Supabase client
function getSupabaseClient(useServiceRole = false) {
    const supabaseUrl = process.env.SUPABASE_URL;
    if (!supabaseUrl) {
        throw new Error('SUPABASE_URL environment variable is required');
    }
    const key = useServiceRole
        ? process.env.SUPABASE_SERVICE_ROLE_KEY
        : process.env.SUPABASE_ANON_KEY;
    if (!key) {
        const keyType = useServiceRole ? 'SUPABASE_SERVICE_ROLE_KEY' : 'SUPABASE_ANON_KEY';
        throw new Error(`${keyType} environment variable is required`);
    }
    return (0, supabase_js_1.createClient)(supabaseUrl, key, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
}
// Tool definitions
exports.supabaseTools = [
    {
        name: 'supabase_query_table',
        description: 'Query data from a Supabase table',
        inputSchema: {
            type: 'object',
            properties: {
                table: { type: 'string', description: 'Table name' },
                select: { type: 'string', description: 'Columns to select (default: *)', default: '*' },
                filters: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            column: { type: 'string', description: 'Column name' },
                            operator: { type: 'string', enum: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'like', 'ilike', 'is', 'in'], description: 'Filter operator' },
                            value: { description: 'Filter value' }
                        },
                        required: ['column', 'operator', 'value']
                    },
                    description: 'Filters to apply'
                },
                order: {
                    type: 'object',
                    properties: {
                        column: { type: 'string', description: 'Column to order by' },
                        ascending: { type: 'boolean', description: 'Sort ascending', default: true }
                    },
                    description: 'Ordering options'
                },
                limit: { type: 'number', minimum: 1, description: 'Maximum rows to return' },
                range: {
                    type: 'object',
                    properties: {
                        from: { type: 'number', minimum: 0, description: 'Start index' },
                        to: { type: 'number', minimum: 0, description: 'End index' }
                    },
                    description: 'Range of rows to return'
                }
            },
            required: ['table']
        }
    },
    {
        name: 'supabase_insert_row',
        description: 'Insert new row(s) into a Supabase table',
        inputSchema: {
            type: 'object',
            properties: {
                table: { type: 'string', description: 'Table name' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        additionalProperties: true
                    },
                    description: 'Array of row objects to insert'
                },
                upsert: { type: 'boolean', description: 'Perform upsert (insert or update)', default: false },
                on_conflict: { type: 'string', description: 'Conflict resolution column(s)' },
                returning: { type: 'string', description: 'Columns to return', default: '*' }
            },
            required: ['table', 'data']
        }
    },
    {
        name: 'supabase_update_row',
        description: 'Update rows in a Supabase table',
        inputSchema: {
            type: 'object',
            properties: {
                table: { type: 'string', description: 'Table name' },
                data: {
                    type: 'object',
                    additionalProperties: true,
                    description: 'Data to update'
                },
                filters: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            column: { type: 'string' },
                            operator: { type: 'string', enum: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'like', 'ilike', 'is', 'in'] },
                            value: {}
                        },
                        required: ['column', 'operator', 'value']
                    },
                    description: 'Filters to identify rows to update'
                },
                returning: { type: 'string', description: 'Columns to return', default: '*' }
            },
            required: ['table', 'data', 'filters']
        }
    },
    {
        name: 'supabase_delete_row',
        description: 'Delete rows from a Supabase table',
        inputSchema: {
            type: 'object',
            properties: {
                table: { type: 'string', description: 'Table name' },
                filters: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            column: { type: 'string' },
                            operator: { type: 'string', enum: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'like', 'ilike', 'is', 'in'] },
                            value: {}
                        },
                        required: ['column', 'operator', 'value']
                    },
                    description: 'Filters to identify rows to delete'
                },
                returning: { type: 'string', description: 'Columns to return', default: '*' }
            },
            required: ['table', 'filters']
        }
    },
    {
        name: 'supabase_call_function',
        description: 'Call a Supabase Edge Function or Database Function',
        inputSchema: {
            type: 'object',
            properties: {
                function_name: { type: 'string', description: 'Function name' },
                args: {
                    type: 'object',
                    additionalProperties: true,
                    description: 'Function arguments'
                },
                type: { type: 'string', enum: ['edge', 'rpc'], description: 'Function type', default: 'rpc' }
            },
            required: ['function_name']
        }
    },
    {
        name: 'supabase_upload_file',
        description: 'Upload file to Supabase Storage',
        inputSchema: {
            type: 'object',
            properties: {
                bucket: { type: 'string', description: 'Storage bucket name' },
                path: { type: 'string', description: 'File path in bucket' },
                file_data: { type: 'string', description: 'Base64 encoded file data' },
                content_type: { type: 'string', description: 'MIME type of file' },
                upsert: { type: 'boolean', description: 'Overwrite if exists', default: false }
            },
            required: ['bucket', 'path', 'file_data']
        }
    },
    {
        name: 'supabase_download_file',
        description: 'Download file from Supabase Storage',
        inputSchema: {
            type: 'object',
            properties: {
                bucket: { type: 'string', description: 'Storage bucket name' },
                path: { type: 'string', description: 'File path in bucket' }
            },
            required: ['bucket', 'path']
        }
    },
    {
        name: 'supabase_list_files',
        description: 'List files in Supabase Storage bucket',
        inputSchema: {
            type: 'object',
            properties: {
                bucket: { type: 'string', description: 'Storage bucket name' },
                path: { type: 'string', description: 'Folder path (optional)', default: '' },
                limit: { type: 'number', minimum: 1, description: 'Maximum files to return' },
                offset: { type: 'number', minimum: 0, description: 'Offset for pagination' }
            },
            required: ['bucket']
        }
    },
    {
        name: 'supabase_create_user',
        description: 'Create a new user account (requires service role key)',
        inputSchema: {
            type: 'object',
            properties: {
                email: { type: 'string', format: 'email', description: 'User email address' },
                password: { type: 'string', description: 'User password' },
                email_confirm: { type: 'boolean', description: 'Skip email confirmation', default: false },
                user_metadata: {
                    type: 'object',
                    additionalProperties: true,
                    description: 'Additional user metadata'
                }
            },
            required: ['email', 'password']
        }
    },
    {
        name: 'supabase_get_user',
        description: 'Get user information by ID or JWT',
        inputSchema: {
            type: 'object',
            properties: {
                user_id: { type: 'string', description: 'User ID (if using service role)' },
                jwt: { type: 'string', description: 'User JWT token (alternative to user_id)' }
            }
        }
    }
];
// Apply filters to query
function applyFilters(query, filters = []) {
    let result = query;
    for (const filter of filters) {
        const { column, operator, value } = filter;
        switch (operator) {
            case 'eq':
                result = result.eq(column, value);
                break;
            case 'neq':
                result = result.neq(column, value);
                break;
            case 'gt':
                result = result.gt(column, value);
                break;
            case 'gte':
                result = result.gte(column, value);
                break;
            case 'lt':
                result = result.lt(column, value);
                break;
            case 'lte':
                result = result.lte(column, value);
                break;
            case 'like':
                result = result.like(column, value);
                break;
            case 'ilike':
                result = result.ilike(column, value);
                break;
            case 'is':
                result = result.is(column, value);
                break;
            case 'in':
                result = result.in(column, Array.isArray(value) ? value : [value]);
                break;
        }
    }
    return result;
}
// Tool handler
async function handleSupabaseTool(name, args) {
    try {
        // Determine if we need service role access
        const needsServiceRole = ['supabase_create_user'].includes(name);
        const supabase = getSupabaseClient(needsServiceRole);
        switch (name) {
            case 'supabase_query_table': {
                const { table, select = '*', filters = [], order, limit, range } = args;
                let query = supabase.from(table).select(select);
                // Apply filters
                query = applyFilters(query, filters);
                // Apply ordering
                if (order) {
                    query = query.order(order.column, { ascending: order.ascending ?? true });
                }
                // Apply limit
                if (limit) {
                    query = query.limit(limit);
                }
                // Apply range
                if (range) {
                    query = query.range(range.from, range.to);
                }
                const { data, error, count } = await query;
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                table,
                                count: count || data?.length || 0,
                                data
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_insert_row': {
                const { table, data, upsert = false, on_conflict, returning = '*' } = args;
                let query = upsert
                    ? supabase.from(table).upsert(data, { onConflict: on_conflict }).select(returning)
                    : supabase.from(table).insert(data).select(returning);
                const { data: result, error } = await query;
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                table,
                                inserted: Array.isArray(data) ? data.length : 1,
                                data: result
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_update_row': {
                const { table, data, filters = [], returning = '*' } = args;
                let query = supabase.from(table).update(data).select(returning);
                query = applyFilters(query, filters);
                const { data: result, error } = await query;
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                table,
                                updated: result?.length || 0,
                                data: result
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_delete_row': {
                const { table, filters = [], returning = '*' } = args;
                let query = supabase.from(table).delete().select(returning);
                query = applyFilters(query, filters);
                const { data: result, error } = await query;
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                table,
                                deleted: result?.length || 0,
                                data: result
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_call_function': {
                const { function_name, args: funcArgs = {}, type = 'rpc' } = args;
                let result, error;
                if (type === 'edge') {
                    const { data, error: edgeError } = await supabase.functions.invoke(function_name, {
                        body: funcArgs
                    });
                    result = data;
                    error = edgeError;
                }
                else {
                    const { data, error: rpcError } = await supabase.rpc(function_name, funcArgs);
                    result = data;
                    error = rpcError;
                }
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                function_name,
                                type,
                                result
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_upload_file': {
                const { bucket, path, file_data, content_type, upsert = false } = args;
                // Decode base64 file data
                const fileBuffer = Buffer.from(file_data, 'base64');
                const { data, error } = await supabase.storage
                    .from(bucket)
                    .upload(path, fileBuffer, {
                    contentType: content_type,
                    upsert
                });
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                bucket,
                                path: data.path,
                                id: data.id,
                                fullPath: data.fullPath
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_download_file': {
                const { bucket, path } = args;
                const { data, error } = await supabase.storage
                    .from(bucket)
                    .download(path);
                if (error) {
                    throw new Error(error.message);
                }
                // Convert to base64
                const arrayBuffer = await data.arrayBuffer();
                const base64 = Buffer.from(arrayBuffer).toString('base64');
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                bucket,
                                path,
                                size: data.size,
                                type: data.type,
                                data: base64,
                                isBase64: true
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_list_files': {
                const { bucket, path = '', limit, offset } = args;
                const { data, error } = await supabase.storage
                    .from(bucket)
                    .list(path, {
                    limit,
                    offset
                });
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                bucket,
                                path,
                                count: data?.length || 0,
                                files: data?.map(file => ({
                                    name: file.name,
                                    id: file.id,
                                    updated_at: file.updated_at,
                                    created_at: file.created_at,
                                    last_accessed_at: file.last_accessed_at,
                                    metadata: file.metadata
                                }))
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_create_user': {
                const { email, password, email_confirm = false, user_metadata = {} } = args;
                const { data, error } = await supabase.auth.admin.createUser({
                    email,
                    password,
                    email_confirm,
                    user_metadata
                });
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                user: {
                                    id: data.user?.id,
                                    email: data.user?.email,
                                    email_confirmed_at: data.user?.email_confirmed_at,
                                    created_at: data.user?.created_at,
                                    user_metadata: data.user?.user_metadata
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'supabase_get_user': {
                const { user_id, jwt } = args;
                let data, error;
                if (jwt) {
                    const result = await supabase.auth.getUser(jwt);
                    data = result.data;
                    error = result.error;
                }
                else if (user_id) {
                    const result = await supabase.auth.admin.getUserById(user_id);
                    data = result.data;
                    error = result.error;
                }
                else {
                    throw new Error('Either user_id or jwt must be provided');
                }
                if (error) {
                    throw new Error(error.message);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                user: {
                                    id: data.user?.id,
                                    email: data.user?.email,
                                    email_confirmed_at: data.user?.email_confirmed_at,
                                    last_sign_in_at: data.user?.last_sign_in_at,
                                    created_at: data.user?.created_at,
                                    user_metadata: data.user?.user_metadata
                                }
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown Supabase tool: ${name}` }],
                    isError: true
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `Supabase tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true
        };
    }
}
//# sourceMappingURL=index.js.map