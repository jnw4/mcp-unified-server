"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rampTools = void 0;
exports.handleRampTool = handleRampTool;
const axios_1 = __importDefault(require("axios"));
// Get Ramp client
function getRampClient() {
    const clientId = process.env.RAMP_CLIENT_ID;
    const clientSecret = process.env.RAMP_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
        throw new Error('RAMP_CLIENT_ID and RAMP_CLIENT_SECRET environment variables are required');
    }
    // Create Basic Auth header
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    return axios_1.default.create({
        baseURL: 'https://api.ramp.com/developer/v1',
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
        }
    });
}
// Tool definitions
exports.rampTools = [
    {
        name: 'ramp_get_transactions',
        description: 'Get transactions from Ramp',
        inputSchema: {
            type: 'object',
            properties: {
                card_id: { type: 'string', description: 'Filter by specific card ID' },
                user_id: { type: 'string', description: 'Filter by user ID' },
                start_date: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                end_date: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 25 }
            }
        }
    },
    {
        name: 'ramp_get_cards',
        description: 'Get corporate cards from Ramp',
        inputSchema: {
            type: 'object',
            properties: {
                user_id: { type: 'string', description: 'Filter by user ID' },
                status: { type: 'string', enum: ['ACTIVE', 'INACTIVE', 'PENDING'], description: 'Filter by card status' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 25 }
            }
        }
    },
    {
        name: 'ramp_get_users',
        description: 'Get users from Ramp',
        inputSchema: {
            type: 'object',
            properties: {
                department_id: { type: 'string', description: 'Filter by department ID' },
                role: { type: 'string', enum: ['ADMIN', 'USER', 'MANAGER'], description: 'Filter by user role' },
                status: { type: 'string', enum: ['ACTIVE', 'INACTIVE', 'PENDING'], description: 'Filter by user status' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 25 }
            }
        }
    },
    {
        name: 'ramp_create_expense',
        description: 'Create a manual expense entry in Ramp',
        inputSchema: {
            type: 'object',
            properties: {
                user_id: { type: 'string', description: 'User ID creating the expense' },
                amount: { type: 'number', description: 'Expense amount in cents' },
                currency: { type: 'string', description: 'Currency code', default: 'USD' },
                date: { type: 'string', description: 'Expense date (YYYY-MM-DD)' },
                merchant: { type: 'string', description: 'Merchant name' },
                description: { type: 'string', description: 'Expense description' },
                category_id: { type: 'string', description: 'Expense category ID' },
                receipt_url: { type: 'string', description: 'Receipt image URL' }
            },
            required: ['user_id', 'amount', 'date', 'merchant']
        }
    },
    {
        name: 'ramp_get_departments',
        description: 'Get departments/cost centers from Ramp',
        inputSchema: {
            type: 'object',
            properties: {
                limit: { type: 'number', minimum: 1, maximum: 100, default: 25 }
            }
        }
    },
    {
        name: 'ramp_get_vendors',
        description: 'Get vendors/merchants from Ramp',
        inputSchema: {
            type: 'object',
            properties: {
                search: { type: 'string', description: 'Search vendors by name' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 25 }
            }
        }
    }
];
// Tool handler
async function handleRampTool(name, args) {
    try {
        const client = getRampClient();
        switch (name) {
            case 'ramp_get_transactions': {
                const { card_id, user_id, start_date, end_date, limit = 25 } = args;
                const params = new URLSearchParams();
                if (card_id)
                    params.append('card_id', card_id);
                if (user_id)
                    params.append('user_id', user_id);
                if (start_date)
                    params.append('start_date', start_date);
                if (end_date)
                    params.append('end_date', end_date);
                params.append('limit', limit.toString());
                const response = await client.get(`/transactions?${params}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total_count: response.data.page?.total || response.data.data?.length || 0,
                                transactions: response.data.data?.map((tx) => ({
                                    id: tx.id,
                                    amount: tx.amount,
                                    currency: tx.currency,
                                    date: tx.date,
                                    merchant: tx.merchant_name,
                                    description: tx.memo,
                                    card_id: tx.card_id,
                                    user_id: tx.user_id,
                                    category: tx.category_name,
                                    status: tx.state
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'ramp_get_cards': {
                const { user_id, status, limit = 25 } = args;
                const params = new URLSearchParams();
                if (user_id)
                    params.append('user_id', user_id);
                if (status)
                    params.append('status', status);
                params.append('limit', limit.toString());
                const response = await client.get(`/cards?${params}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total_count: response.data.page?.total || response.data.data?.length || 0,
                                cards: response.data.data?.map((card) => ({
                                    id: card.id,
                                    display_name: card.display_name,
                                    last_four: card.last_four,
                                    cardholder_name: card.cardholder_name,
                                    status: card.status,
                                    spending_limit: card.spending_limit,
                                    user_id: card.user_id,
                                    created_at: card.created_at
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'ramp_get_users': {
                const { department_id, role, status, limit = 25 } = args;
                const params = new URLSearchParams();
                if (department_id)
                    params.append('department_id', department_id);
                if (role)
                    params.append('role', role);
                if (status)
                    params.append('status', status);
                params.append('limit', limit.toString());
                const response = await client.get(`/users?${params}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total_count: response.data.page?.total || response.data.data?.length || 0,
                                users: response.data.data?.map((user) => ({
                                    id: user.id,
                                    first_name: user.first_name,
                                    last_name: user.last_name,
                                    email: user.email,
                                    role: user.role,
                                    status: user.status,
                                    department_id: user.department_id,
                                    department_name: user.department_name,
                                    created_at: user.created_at
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'ramp_create_expense': {
                const { user_id, amount, currency = 'USD', date, merchant, description, category_id, receipt_url } = args;
                const response = await client.post('/expenses', {
                    user_id,
                    amount,
                    currency,
                    date,
                    merchant_name: merchant,
                    memo: description,
                    category_id,
                    receipt_url
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                expense: {
                                    id: response.data.id,
                                    amount: response.data.amount,
                                    currency: response.data.currency,
                                    date: response.data.date,
                                    merchant: response.data.merchant_name,
                                    description: response.data.memo,
                                    status: response.data.state,
                                    user_id: response.data.user_id
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'ramp_get_departments': {
                const { limit = 25 } = args;
                const response = await client.get(`/departments?limit=${limit}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total_count: response.data.page?.total || response.data.data?.length || 0,
                                departments: response.data.data?.map((dept) => ({
                                    id: dept.id,
                                    name: dept.name,
                                    code: dept.code,
                                    parent_id: dept.parent_id,
                                    created_at: dept.created_at
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'ramp_get_vendors': {
                const { search, limit = 25 } = args;
                const params = new URLSearchParams();
                if (search)
                    params.append('search', search);
                params.append('limit', limit.toString());
                const response = await client.get(`/vendors?${params}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total_count: response.data.page?.total || response.data.data?.length || 0,
                                vendors: response.data.data?.map((vendor) => ({
                                    id: vendor.id,
                                    name: vendor.name,
                                    category: vendor.category,
                                    total_spend: vendor.total_spend,
                                    transaction_count: vendor.transaction_count,
                                    last_transaction_date: vendor.last_transaction_date
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown Ramp tool: ${name}` }],
                    isError: true
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `Ramp tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true
        };
    }
}
//# sourceMappingURL=index.js.map