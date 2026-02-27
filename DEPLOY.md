# Deployment Guide - MCP Unified HTTP Server

## 🚀 Quick Deploy to Render

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   # Create GitHub repo and push
   gh repo create mcp-unified-server --public --source=. --push
   ```

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Click "New Web Service"
   - Connect your GitHub repo: `your-username/mcp-unified-server`
   - Render will auto-detect the `render.yaml` configuration
   - Click "Create Web Service"

3. **Get your hosted URL:**
   - After deployment: `https://your-app-name.onrender.com`
   - Health check: `https://your-app-name.onrender.com/health`
   - MCP endpoint: `https://your-app-name.onrender.com/mcp`

### Option 2: Deploy via Railway

1. **Login and deploy:**
   ```bash
   railway login
   railway new
   railway up
   ```

### Option 3: Deploy via Docker to any platform

```bash
# Build and run locally
docker build -f docker/Dockerfile -t mcp-unified-server .
docker run -p 3000:3000 --env-file .env mcp-unified-server

# Or deploy to any Docker hosting service
```

## 🔑 Permanent Access Token (Never Expires)

```
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFyZWRAcHVyZXBsYXkubWVkaWEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzIxODk5NzIsImV4cCI6NDA3MDkwODgwMCwiaXNzIjoibWNwLXVuaWZpZWQtc2VydmVyIn0.TjNBniFK2WNavNXfZlsBLjDBLMbNly1BpGbsDKcNQi8
```

## 👥 Sharing with Others

Once deployed, share these details:

**MCP Server Configuration for `.claude/mcp.json`:**
```json
{
  "pureplay-mcp": {
    "command": "npx",
    "args": ["@modelcontextprotocol/cli", "connect", "https://YOUR-DEPLOYED-URL.onrender.com/mcp"],
    "env": {
      "MCP_HTTP_BEARER_TOKEN": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFyZWRAcHVyZXBsYXkubWVkaWEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzIxODk5NzIsImV4cCI6NDA3MDkwODgwMCwiaXNzIjoibWNwLXVuaWZpZWQtc2VydmVyIn0.TjNBniFK2WNavNXfZlsBLjDBLMbNly1BpGbsDKcNQi8"
    }
  }
}
```

## 🛠 Available Tools

**QuickBooks (12 tools):** All QBO operations using your credentials
**Snowflake (8 tools):** Data queries using your warehouse
**Claims (10 tools):** Knowledge management
**Utilities:** Server diagnostics

Users just need the URL + token - no individual Snowflake/QBO setup required!

## 🔒 Security Notes

- The permanent token has admin access to all tools
- Server uses your PurePlay credentials internally
- Users can't access your raw credentials, only use the tools
- Consider rotating the auth secret periodically
- Monitor usage via server logs

## 📊 Monitoring

- Health check: `GET /health`
- Tool usage logs in hosting platform dashboard
- Connection status monitoring included