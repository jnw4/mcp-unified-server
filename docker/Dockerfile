# Multi-stage build for production optimization
FROM node:18-alpine AS builder

# Install build dependencies
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm ci --only=development

# Copy source code and build
COPY src/ ./src/
COPY config/ ./config/
RUN npm run build

# Production stage
FROM node:18-alpine AS runtime

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S mcp -u 1001 -G nodejs

# Install production dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy built application and config
COPY --from=builder --chown=mcp:nodejs /app/dist ./dist
COPY --from=builder --chown=mcp:nodejs /app/config ./config
COPY --chown=mcp:nodejs docker/entrypoint.sh ./

# Make entrypoint executable
RUN chmod +x entrypoint.sh

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:' + (process.env.MCP_PORT || 3000) + '/health', (res) => process.exit(res.statusCode === 200 ? 0 : 1))"

# Switch to non-root user
USER mcp

# Expose port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production

# Start the application
ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "dist/index.js"]