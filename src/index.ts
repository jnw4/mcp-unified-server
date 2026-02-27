#!/usr/bin/env node

import express from 'express';
import helmet from 'helmet';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ErrorCode
} from '@modelcontextprotocol/sdk/types.js';

import { validateEnvironment, Environment } from './utils/validation';
import { formatErrorResponse, MCPError } from './utils/errors';
import { createCorsMiddleware } from './middleware/cors';
import { authenticateToken, authorizeToolAccess, optionalAuth } from './middleware/auth';
import { initializeConnections, connectionManager } from './connections';
import { getAllowedTools } from './auth/roles';

// Import tool modules
import { qboTools, handleQboTool } from './tools/qbo';
import { snowflakeTools, handleSnowflakeTool } from './tools/snowflake';
import { claimsTools, handleClaimsTool } from './tools/claims';
import { googleTools, handleGoogleTool } from './tools/google';
import { s3Tools, handleS3Tool } from './tools/s3';
import { geminiTools, handleGeminiTool } from './tools/gemini';
import { beeswaxTools, handleBeeswaxTool } from './tools/beeswax';
import { xlsxTools, handleXlsxTool } from './tools/xlsx';
import { openaiTools, handleOpenAITool } from './tools/openai';
import { anthropicTools, handleAnthropicTool } from './tools/anthropic';
import { githubTools, handleGitHubTool } from './tools/github';
import { vercelTools, handleVercelTool } from './tools/vercel';
import { supabaseTools, handleSupabaseTool } from './tools/supabase';
import { rampTools, handleRampTool } from './tools/ramp';

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
  private server: Server;
  private app: express.Application;
  private env: Environment;
  private allTools: any[] = [];

  constructor() {
    // Validate environment
    this.env = validateEnvironment();

    // Initialize Express app
    this.app = express();
    this.setupMiddleware();

    // Initialize MCP server
    this.server = new Server(
      {
        name: 'mcp-unified-server',
        version: '1.0.0'
      },
      {
        capabilities: {
          tools: {},
          resources: {},
          prompts: {}
        }
      }
    );

    this.setupMCPHandlers();
    this.setupHTTPRoutes();
  }

  private setupMiddleware(): void {
    // Security headers
    this.app.use(helmet({
      contentSecurityPolicy: false, // Allow dynamic content for MCP
      crossOriginEmbedderPolicy: false
    }));

    // CORS
    this.app.use(createCorsMiddleware());

    // Body parsing
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));

    // Request logging
    this.app.use((req, res, next) => {
      console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
      next();
    });
  }

  private setupMCPHandlers(): void {
    // Handle tool listing (role filtering handled in HTTP handler)
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      try {
        return {
          tools: this.allTools
        };
      } catch (error) {
        throw new McpError(
          ErrorCode.InternalError,
          `Failed to list tools: ${error instanceof Error ? error.message : 'Unknown error'}`
        );
      }
    });

    // Handle tool execution (role authorization handled in HTTP handler)
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        const { name, arguments: args } = request.params;

        // Find tool
        const tool = this.allTools.find(t => t.name === name);
        if (!tool) {
          throw new McpError(ErrorCode.MethodNotFound, `Tool not found: ${name}`);
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

      } catch (error) {
        if (error instanceof McpError) {
          throw error;
        }

        throw new McpError(
          ErrorCode.InternalError,
          `Tool execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        );
      }
    });
  }

  private setupHTTPRoutes(): void {
    // Health check endpoint (no auth required)
    this.app.get('/health', (req, res) => {
      const connectionStatuses = connectionManager.getAllStatuses();

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
    this.app.post('/mcp/list', authenticateToken, this.handleMCPRequest.bind(this));
    this.app.post('/mcp/call', authenticateToken, authorizeToolAccess, this.handleMCPRequest.bind(this));

    // Alternative endpoint paths for compatibility
    this.app.post('/tools/list', authenticateToken, this.handleMCPRequest.bind(this));
    this.app.post('/tools/call', authenticateToken, authorizeToolAccess, this.handleMCPRequest.bind(this));

    // Server info endpoint (optional auth)
    this.app.get('/info', optionalAuth, (req, res) => {
      const userRole = req.auth?.role || 'anonymous';
      const availableTools = req.auth
        ? getAllowedTools(userRole, this.allTools.map(t => t.name))
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
    this.app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      const { error: errorDetails, statusCode } = formatErrorResponse(error);

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

  private async handleMCPRequest(req: express.Request, res: express.Response): Promise<void> {
    try {
      const isListRequest = req.path.includes('list');
      const userRole = req.auth?.role || 'readonly';

      let response;
      if (isListRequest) {
        // Handle tool listing with role-based filtering
        const allowedTools = getAllowedTools(userRole, this.allTools.map(t => t.name));
        const filteredTools = this.allTools.filter(tool => allowedTools.includes(tool.name));
        response = { tools: filteredTools };
      } else {
        // Handle tool execution
        const { name, arguments: args } = req.body.params || req.body;

        // Find tool
        const tool = this.allTools.find(t => t.name === name);
        if (!tool) {
          throw new MCPError(`Tool not found: ${name}`, 'TOOL_NOT_FOUND', 404);
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
        } else if (name.startsWith('qbo_')) {
          // Handle QBO tools
          response = await handleQboTool(name, args);
        } else if (name.startsWith('snowflake_')) {
          // Handle Snowflake tools
          response = await handleSnowflakeTool(name, args);
        } else if (name.startsWith('claims_')) {
          // Handle Claims tools
          response = await handleClaimsTool(name, args);
        } else if (name.startsWith('google_')) {
          // Handle Google Workspace tools
          response = await handleGoogleTool(name, args);
        } else if (name.startsWith('s3_')) {
          // Handle S3 tools
          response = await handleS3Tool(name, args);
        } else if (name.startsWith('gemini_')) {
          // Handle Gemini AI tools
          response = await handleGeminiTool(name, args);
        } else if (name.startsWith('beeswax_')) {
          // Handle Beeswax CSV tools
          response = await handleBeeswaxTool(name, args);
        } else if (name.startsWith('xlsx_')) {
          // Handle Excel/XLSX tools
          response = await handleXlsxTool(name, args);
        } else if (name.startsWith('openai_')) {
          // Handle OpenAI tools
          response = await handleOpenAITool(name, args);
        } else if (name.startsWith('anthropic_')) {
          // Handle Anthropic Claude tools
          response = await handleAnthropicTool(name, args);
        } else if (name.startsWith('github_')) {
          // Handle GitHub tools
          response = await handleGitHubTool(name, args);
        } else if (name.startsWith('vercel_')) {
          // Handle Vercel tools
          response = await handleVercelTool(name, args);
        } else if (name.startsWith('supabase_')) {
          // Handle Supabase tools
          response = await handleSupabaseTool(name, args);
        } else if (name.startsWith('ramp_')) {
          // Handle Ramp tools
          response = await handleRampTool(name, args);
        } else {
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

    } catch (error) {
      const { error: errorDetails, statusCode } = formatErrorResponse(error);
      res.status(statusCode).json({
        jsonrpc: '2.0',
        error: errorDetails,
        id: req.body.id || null
      });
    }
  }

  private getToolCategories(): Record<string, number> {
    const categories: Record<string, number> = {};

    for (const tool of this.allTools) {
      const prefix = tool.name.split('_')[0];
      categories[prefix] = (categories[prefix] || 0) + 1;
    }

    return categories;
  }

  private async initializeServer(): Promise<void> {
    try {
      console.log('Initializing MCP Unified Server...');

      // Initialize connections
      await initializeConnections(this.env);

      // Load all tools
      this.allTools = [
        ...placeholderTools,
        ...qboTools,
        ...snowflakeTools,
        ...claimsTools,
        ...googleTools,
        ...s3Tools,
        ...geminiTools,
        ...beeswaxTools,
        ...xlsxTools,
        ...openaiTools,
        ...anthropicTools,
        ...githubTools,
        ...vercelTools,
        ...supabaseTools,
        ...rampTools
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
      const shutdown = async (signal: string) => {
        console.log(`\n📴 Received ${signal}, shutting down gracefully...`);

        server.close(async () => {
          try {
            await connectionManager.closeAll();
            console.log('✅ All connections closed');
            process.exit(0);
          } catch (error) {
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

    } catch (error) {
      console.error('❌ Failed to initialize server:', error);
      process.exit(1);
    }
  }

  public async start(): Promise<void> {
    await this.initializeServer();
  }
}

// Start server if run directly
if (require.main === module) {
  const server = new UnifiedMCPServer();
  server.start().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

export { UnifiedMCPServer };