# MCP Unified HTTP Server

A consolidated HTTP MCP server that combines 70+ tools from multiple domains:

- **QuickBooks Online** (12 tools): Financial data, invoicing, customers
- **Snowflake** (8+ tools): Data warehousing, analytics, vector search
- **Claims Management** (13 tools): Email processing, claim matching, citations
- **Google Workspace** (9+ tools): Slides, Sheets, Docs creation and management
- **Ramp** (4 tools): Corporate card transactions and spend analysis
- **AWS S3** (6 tools): File upload, download, presigned URLs
- **Gemini AI** (3 tools): Content generation, file analysis
- **Client Hierarchy** (5 tools): Agency/brand/campaign management
- **Excel Processing** (3 tools): XLSX file parsing and generation
- **Beeswax CSV** (3 tools): DSP data cleaning and normalization

## Features

- ✅ **HTTP Transport**: RESTful API with streaming support for long operations
- ✅ **Bearer Token Authentication**: JWT-style tokens with role-based claims
- ✅ **Role-Based Access Control**: Admin, Analyst, Finance, and ReadOnly roles
- ✅ **Docker Deployment**: Production-ready container with health checks
- ✅ **Connection Pooling**: Efficient resource management for databases and APIs
- ✅ **Comprehensive Error Handling**: Structured error responses with proper HTTP status codes

## Quick Start

### 1. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your actual credentials
vi .env
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Generate Authentication Token

```bash
# Generate admin token
npm run generate-token -- --role admin --expires 24h

# Generate analyst token
npm run generate-token -- --role analyst --expires 8h
```

### 4. Start Development Server

```bash
# Development mode with hot reload
npm run dev

# Build and start production
npm run build
npm start
```

### 5. Test the Server

```bash
# Health check
curl http://localhost:3000/health

# List available tools (requires auth token)
curl -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -X POST http://localhost:3000/mcp/list

# Call a tool
curl -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -X POST http://localhost:3000/mcp/call \
     -d '{"name": "snowflake_list_databases", "arguments": {}}'
```

## Docker Deployment

### Development

```bash
# Start with Docker Compose
cd docker
docker-compose up -d

# View logs
docker-compose logs -f mcp-unified-server
```

### Production

```bash
# Build production image
docker build -f docker/Dockerfile -t mcp-unified-server:latest .

# Run with environment variables
docker run -d \
  --name mcp-unified-server \
  -p 3000:3000 \
  --env-file .env \
  mcp-unified-server:latest
```

## API Endpoints

### Authentication
All tool endpoints require `Authorization: Bearer <token>` header.

### Core Endpoints

- `GET /health` - Health check (no auth required)
- `POST /mcp/list` - List available tools for authenticated role
- `POST /mcp/call` - Execute a tool

### Tool Categories

#### QuickBooks (qbo_*)
- `qbo_get_invoices` - Retrieve invoices with filtering
- `qbo_get_customers` - List customers
- `qbo_query` - Execute custom QBO queries
- `qbo_create_invoice` - Create new invoices

#### Snowflake (snowflake_*)
- `snowflake_run_query` - Execute SQL queries
- `snowflake_list_databases` - List available databases
- `snowflake_vector_search` - Semantic vector search
- `snowflake_generate_embedding` - Create embeddings

#### Claims (claims_*)
- `claims_list` - List claims with filtering
- `claims_search` - Search claims by criteria
- `claims_add_citation` - Add supporting citations
- `extract_claims_from_text` - AI-powered claim extraction

#### Google Workspace (google_*)
- `list_presentations` - List Google Slides presentations
- `create_presentation` - Create new presentation
- `create_google_sheet` - Create Google Sheets
- `create_google_doc` - Create Google Docs

## Role-Based Access Control

### Roles

| Role | Access | Token Expiry |
|------|--------|--------------|
| `admin` | All tools (*) | 24h |
| `analyst` | snowflake_*, claims_*, google_*, s3_*, gemini_* | 8h |
| `finance` | qbo_*, claims_*, ramp_* | 8h |
| `readonly` | get_*, list_*, describe_* operations only | 4h |

### Token Generation

```bash
# Admin token (24h expiry)
npm run generate-token -- --role admin --user "admin@pureplay.media"

# Custom expiry
npm run generate-token -- --role analyst --expires 2h --user "analyst@pureplay.media"
```

## MCP Client Configuration

Update your `.claude/mcp.json`:

```json
{
  "mcp-unified-http": {
    "command": "npx",
    "args": ["@modelcontextprotocol/cli", "connect", "http://localhost:3000/mcp"],
    "env": {
      "MCP_HTTP_BEARER_TOKEN": "YOUR_BEARER_TOKEN_HERE"
    }
  }
}
```

## Development

### Project Structure

```
src/
├── index.ts                 # Main HTTP server + MCP integration
├── middleware/
│   ├── auth.ts             # Bearer token validation
│   └── cors.ts             # CORS configuration
├── tools/                  # Tool modules by domain
│   ├── qbo/index.ts        # QuickBooks tools
│   ├── snowflake/index.ts  # Snowflake tools
│   ├── claims/index.ts     # Claims management tools
│   └── ...
├── auth/
│   ├── roles.ts            # Role definitions & access matrix
│   └── tokens.ts           # JWT generation & validation
├── connections/            # Shared connection pools
└── utils/                  # Common utilities
```

### Adding New Tools

1. Create tool module in appropriate `src/tools/` directory
2. Export tools array with MCP tool definitions
3. Import and register in `src/index.ts`
4. Update role permissions in `config/roles.json`
5. Add documentation to this README

### Testing

```bash
# Run unit tests
npm test

# Type checking
npm run type-check

# Build verification
npm run build
```

## Environment Variables

### Required
- `MCP_AUTH_SECRET` - JWT signing secret (generate strong random key)
- `SNOWFLAKE_ACCOUNT` - Snowflake account identifier
- `SNOWFLAKE_USER` - Snowflake username

### Optional
- `MCP_PORT` - HTTP server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

See `.env.example` for complete list of supported variables.

## Security Considerations

- **JWT Tokens**: Use strong, randomly generated `MCP_AUTH_SECRET`
- **Token Expiry**: Tokens automatically expire based on role configuration
- **HTTPS**: Use reverse proxy (nginx/cloudflare) for TLS termination in production
- **CORS**: Configure allowed origins in production environment
- **Container Security**: Runs as non-root user, minimal attack surface

## Troubleshooting

### Common Issues

1. **"Invalid token" errors**
   - Verify `MCP_AUTH_SECRET` matches between token generation and server
   - Check token hasn't expired
   - Ensure Bearer token format: `Authorization: Bearer <token>`

2. **Tool permission denied**
   - Verify your role has access to the requested tool
   - Check `config/roles.json` for role definitions

3. **Database connection failures**
   - Verify Snowflake/QBO credentials in environment
   - Check network connectivity and firewall rules

4. **Google API authentication**
   - Ensure `GOOGLE_APPLICATION_CREDENTIALS` points to valid service account
   - Verify service account has required API permissions

### Logs

```bash
# Docker logs
docker-compose logs -f mcp-unified-server

# Direct logs
npm run dev
```

## Migration from Stdio Servers

The unified HTTP server replaces these stdio-based servers:
- `company-os` (42 tools) ✅
- `claims` (13 tools) ✅
- `snowflake` (10+ tools) ✅
- `google-slides` (9 tools) ✅

Tools maintain identical functionality and parameters for seamless migration.

## Support

For issues and feature requests, contact the PurePlay development team.