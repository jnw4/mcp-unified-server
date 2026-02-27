#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifiedMCPServer = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const validation_1 = require("./utils/validation");
const errors_1 = require("./utils/errors");
const cors_1 = require("./middleware/cors");
const auth_1 = require("./middleware/auth");
const connections_1 = require("./connections");
const roles_1 = require("./auth/roles");
// Import tool modules
const qbo_1 = require("./tools/qbo");
const snowflake_1 = require("./tools/snowflake");
const claims_1 = require("./tools/claims");
const google_1 = require("./tools/google");
const s3_1 = require("./tools/s3");
const gemini_1 = require("./tools/gemini");
const beeswax_1 = require("./tools/beeswax");
const xlsx_1 = require("./tools/xlsx");
// import { rampTools } from './tools/ramp';
// Placeholder tools for initial setup
const placeholderTools = [
    {
        name: 'ping',
        description: 'Test connectivity to the MCP server',
        inputSchema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    description: 'Optional message to echo back',
                    default: 'Hello from MCP Unified Server!'
                }
            }
        }
    }
];
class UnifiedMCPServer {
    server;
    app;
    env;
    allTools = [];
    constructor() {
        // Validate environment
        this.env = (0, validation_1.validateEnvironment)();
        // Initialize Express app
        this.app = (0, express_1.default)();
        this.setupMiddleware();
        // Initialize MCP server
        this.server = new index_js_1.Server({
            name: 'mcp-unified-server',
            version: '1.0.0'
        }, {
            capabilities: {
                tools: {},
                resources: {},
                prompts: {}
            }
        });
        this.setupMCPHandlers();
        this.setupHTTPRoutes();
    }
    setupMiddleware() {
        // Security headers
        this.app.use((0, helmet_1.default)({
            contentSecurityPolicy: false, // Allow dynamic content for MCP
            crossOriginEmbedderPolicy: false
        }));
        // CORS
        this.app.use((0, cors_1.createCorsMiddleware)());
        // Body parsing
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
        // Request logging
        this.app.use((req, res, next) => {
            console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
            next();
        });
    }
    setupMCPHandlers() {
        // Handle tool listing (role filtering handled in HTTP handler)
        this.server.setRequestHandler(types_js_1.ListToolsRequestSchema, async () => {
            try {
                return {
                    tools: this.allTools
                };
            }
            catch (error) {
                throw new types_js_1.McpError(types_js_1.ErrorCode.InternalError, `Failed to list tools: ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
        });
        // Handle tool execution (role authorization handled in HTTP handler)
        this.server.setRequestHandler(types_js_1.CallToolRequestSchema, async (request) => {
            try {
                const { name, arguments: args } = request.params;
                // Find tool
                const tool = this.allTools.find(t => t.name === name);
                if (!tool) {
                    throw new types_js_1.McpError(types_js_1.ErrorCode.MethodNotFound, `Tool not found: ${name}`);
                }
                // Execute tool (placeholder implementation)
                if (name === 'ping') {
                    const message = args?.message || 'Hello from MCP Unified Server!';
                    return {
                        content: [
                            {
                                type: 'text',
                                text: `🏓 Pong! ${message}\n\nServer Status:\n- Environment: ${this.env.NODE_ENV}\n- Port: ${this.env.MCP_PORT}\n- Timestamp: ${new Date().toISOString()}`
                            }
                        ]
                    };
                }
                // Default response for not-yet-implemented tools
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Tool "${name}" is recognized but not yet implemented in this version.`
                        }
                    ],
                    isError: true
                };
            }
            catch (error) {
                if (error instanceof types_js_1.McpError) {
                    throw error;
                }
                throw new types_js_1.McpError(types_js_1.ErrorCode.InternalError, `Tool execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
        });
    }
    setupHTTPRoutes() {
        // Health check endpoint (no auth required)
        this.app.get('/health', (req, res) => {
            const connectionStatuses = connections_1.connectionManager.getAllStatuses();
            res.json({
                status: 'healthy',
                timestamp: new Date().toISOString(),
                version: '1.0.0',
                environment: this.env.NODE_ENV,
                connections: connectionStatuses,
                tools: {
                    total: this.allTools.length,
                    available: this.allTools.map(t => t.name)
                }
            });
        });
        // MCP endpoints with authentication
        this.app.post('/mcp/list', auth_1.authenticateToken, this.handleMCPRequest.bind(this));
        this.app.post('/mcp/call', auth_1.authenticateToken, auth_1.authorizeToolAccess, this.handleMCPRequest.bind(this));
        // Alternative endpoint paths for compatibility
        this.app.post('/tools/list', auth_1.authenticateToken, this.handleMCPRequest.bind(this));
        this.app.post('/tools/call', auth_1.authenticateToken, auth_1.authorizeToolAccess, this.handleMCPRequest.bind(this));
        // Server info endpoint (optional auth)
        this.app.get('/info', auth_1.optionalAuth, (req, res) => {
            const userRole = req.auth?.role || 'anonymous';
            const availableTools = req.auth
                ? (0, roles_1.getAllowedTools)(userRole, this.allTools.map(t => t.name))
                : [];
            res.json({
                name: 'MCP Unified Server',
                version: '1.0.0',
                description: 'Consolidated HTTP MCP server for PurePlay tools',
                capabilities: ['tools'],
                authentication: {
                    type: 'bearer',
                    required: true
                },
                user: req.auth ? {
                    id: req.auth.userId,
                    role: req.auth.role,
                    availableTools: availableTools.length
                } : null,
                tools: {
                    total: this.allTools.length,
                    available: availableTools.length,
                    categories: this.getToolCategories()
                }
            });
        });
        // Error handling
        this.app.use((error, req, res, next) => {
            const { error: errorDetails, statusCode } = (0, errors_1.formatErrorResponse)(error);
            console.error('HTTP Error:', {
                path: req.path,
                method: req.method,
                error: errorDetails,
                stack: error.stack
            });
            res.status(statusCode).json({
                jsonrpc: '2.0',
                error: errorDetails,
                id: null
            });
        });
        // 404 handler
        this.app.use((req, res) => {
            res.status(404).json({
                jsonrpc: '2.0',
                error: {
                    code: 'NOT_FOUND',
                    message: `Endpoint not found: ${req.method} ${req.path}`
                },
                id: null
            });
        });
    }
    async handleMCPRequest(req, res) {
        try {
            const isListRequest = req.path.includes('list');
            const userRole = req.auth?.role || 'readonly';
            let response;
            if (isListRequest) {
                // Handle tool listing with role-based filtering
                const allowedTools = (0, roles_1.getAllowedTools)(userRole, this.allTools.map(t => t.name));
                const filteredTools = this.allTools.filter(tool => allowedTools.includes(tool.name));
                response = { tools: filteredTools };
            }
            else {
                // Handle tool execution
                const { name, arguments: args } = req.body.params || req.body;
                // Find tool
                const tool = this.allTools.find(t => t.name === name);
                if (!tool) {
                    throw new errors_1.MCPError(`Tool not found: ${name}`, 'TOOL_NOT_FOUND', 404);
                }
                // Execute tool
                if (name === 'ping') {
                    const message = args?.message || 'Hello from MCP Unified Server!';
                    response = {
                        content: [
                            {
                                type: 'text',
                                text: `🏓 Pong! ${message}\n\nServer Status:\n- Environment: ${this.env.NODE_ENV}\n- Port: ${this.env.MCP_PORT}\n- User Role: ${userRole}\n- Timestamp: ${new Date().toISOString()}`
                            }
                        ]
                    };
                }
                else if (name.startsWith('qbo_')) {
                    // Handle QBO tools
                    response = await (0, qbo_1.handleQboTool)(name, args);
                }
                else if (name.startsWith('snowflake_')) {
                    // Handle Snowflake tools
                    response = await (0, snowflake_1.handleSnowflakeTool)(name, args);
                }
                else if (name.startsWith('claims_')) {
                    // Handle Claims tools
                    response = await (0, claims_1.handleClaimsTool)(name, args);
                }
                else if (name.startsWith('google_')) {
                    // Handle Google Workspace tools
                    response = await (0, google_1.handleGoogleTool)(name, args);
                }
                else if (name.startsWith('s3_')) {
                    // Handle S3 tools
                    response = await (0, s3_1.handleS3Tool)(name, args);
                }
                else if (name.startsWith('gemini_')) {
                    // Handle Gemini AI tools
                    response = await (0, gemini_1.handleGeminiTool)(name, args);
                }
                else if (name.startsWith('beeswax_')) {
                    // Handle Beeswax CSV tools
                    response = await (0, beeswax_1.handleBeeswaxTool)(name, args);
                }
                else if (name.startsWith('xlsx_')) {
                    // Handle Excel/XLSX tools
                    response = await (0, xlsx_1.handleXlsxTool)(name, args);
                }
                else {
                    // Default response for not-yet-implemented tools
                    response = {
                        content: [
                            {
                                type: 'text',
                                text: `Tool "${name}" is recognized but not yet implemented in this version.`
                            }
                        ],
                        isError: true
                    };
                }
            }
            res.json({
                jsonrpc: '2.0',
                result: response,
                id: req.body.id || null
            });
        }
        catch (error) {
            const { error: errorDetails, statusCode } = (0, errors_1.formatErrorResponse)(error);
            res.status(statusCode).json({
                jsonrpc: '2.0',
                error: errorDetails,
                id: req.body.id || null
            });
        }
    }
    getToolCategories() {
        const categories = {};
        for (const tool of this.allTools) {
            const prefix = tool.name.split('_')[0];
            categories[prefix] = (categories[prefix] || 0) + 1;
        }
        return categories;
    }
    async initializeServer() {
        try {
            console.log('Initializing MCP Unified Server...');
            // Initialize connections
            await (0, connections_1.initializeConnections)(this.env);
            // Load all tools
            this.allTools = [
                ...placeholderTools,
                ...qbo_1.qboTools,
                ...snowflake_1.snowflakeTools,
                ...claims_1.claimsTools,
                ...google_1.googleTools,
                ...s3_1.s3Tools,
                ...gemini_1.geminiTools,
                ...beeswax_1.beeswaxTools,
                ...xlsx_1.xlsxTools
                // ...rampTools (can add later from company-os)
            ];
            console.log(`Loaded ${this.allTools.length} tools`);
            // Start HTTP server
            const server = this.app.listen(this.env.MCP_PORT, () => {
                console.log(`🚀 MCP Unified HTTP Server running on port ${this.env.MCP_PORT}`);
                console.log(`🔗 Health check: http://localhost:${this.env.MCP_PORT}/health`);
                console.log(`📡 MCP endpoint: http://localhost:${this.env.MCP_PORT}/mcp/`);
                console.log(`🔧 Environment: ${this.env.NODE_ENV}`);
            });
            // Graceful shutdown
            const shutdown = async (signal) => {
                console.log(`\n📴 Received ${signal}, shutting down gracefully...`);
                server.close(async () => {
                    try {
                        await connections_1.connectionManager.closeAll();
                        console.log('✅ All connections closed');
                        process.exit(0);
                    }
                    catch (error) {
                        console.error('❌ Error during shutdown:', error);
                        process.exit(1);
                    }
                });
                // Force exit after 30 seconds
                setTimeout(() => {
                    console.log('⚠️ Forcing exit after timeout');
                    process.exit(1);
                }, 30000);
            };
            process.on('SIGTERM', () => shutdown('SIGTERM'));
            process.on('SIGINT', () => shutdown('SIGINT'));
        }
        catch (error) {
            console.error('❌ Failed to initialize server:', error);
            process.exit(1);
        }
    }
    async start() {
        await this.initializeServer();
    }
}
exports.UnifiedMCPServer = UnifiedMCPServer;
// Start server if run directly
if (require.main === module) {
    const server = new UnifiedMCPServer();
    server.start().catch(error => {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map