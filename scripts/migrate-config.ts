#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { generateToken } from '../src/auth/tokens';

interface MCPServerConfig {
  command: string;
  args: string[];
  env: Record<string, string>;
}

interface MCPConfig {
  [serverName: string]: MCPServerConfig;
}

interface MigrationOptions {
  configPath?: string;
  role?: string;
  user?: string;
  port?: number;
  backup?: boolean;
  help?: boolean;
}

function parseArgs(): MigrationOptions {
  const args = process.argv.slice(2);
  const options: MigrationOptions = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--config':
      case '-c':
        options.configPath = args[++i];
        break;
      case '--role':
      case '-r':
        options.role = args[++i];
        break;
      case '--user':
      case '-u':
        options.user = args[++i];
        break;
      case '--port':
      case '-p':
        options.port = parseInt(args[++i]);
        break;
      case '--backup':
      case '-b':
        options.backup = true;
        break;
      case '--help':
      case '-h':
        options.help = true;
        break;
      default:
        console.error(`Unknown option: ${arg}`);
        process.exit(1);
    }
  }

  return options;
}

function printUsage(): void {
  console.log(`
MCP Unified Server - Configuration Migration

Usage: npm run migrate-config -- [options]

Options:
  -c, --config <path>    Path to MCP config file (default: ~/.claude/mcp.json)
  -r, --role <role>      Role for new token (default: admin)
  -u, --user <user>      User for new token (default: migrated-user)
  -p, --port <port>      HTTP server port (default: 3000)
  -b, --backup          Create backup of original config
  -h, --help            Show this help message

This script will:
1. Read your existing MCP configuration
2. Generate a new authentication token
3. Replace stdio-based servers with HTTP configuration
4. Preserve environment variables where possible

Example:
  npm run migrate-config -- --role admin --user admin@pureplay.media --backup
`);
}

async function main(): Promise<void> {
  try {
    const options = parseArgs();

    if (options.help) {
      printUsage();
      return;
    }

    // Set defaults
    const configPath = options.configPath || join(process.env.HOME || '~', '.claude', 'mcp.json');
    const role = options.role || 'admin';
    const user = options.user || `migrated-user-${Date.now()}`;
    const port = options.port || 3000;

    console.log('🔄 MCP Configuration Migration\n');

    // Read existing config
    let existingConfig: MCPConfig;
    try {
      const configData = readFileSync(configPath, 'utf-8');
      existingConfig = JSON.parse(configData);
      console.log(`✅ Loaded existing config from: ${configPath}`);
    } catch (error) {
      console.error(`❌ Failed to read config file: ${configPath}`);
      console.error('Make sure the file exists and is valid JSON');
      process.exit(1);
    }

    // Create backup if requested
    if (options.backup) {
      const backupPath = `${configPath}.backup-${Date.now()}`;
      writeFileSync(backupPath, JSON.stringify(existingConfig, null, 2));
      console.log(`📦 Backup created: ${backupPath}`);
    }

    // Generate new authentication token
    console.log(`🔐 Generating token for role: ${role}...`);
    const token = await generateToken(user, role);
    console.log('✅ Token generated successfully');

    // Identify servers to migrate
    const serversToMigrate = [
      'company-os',
      'claims',
      'snowflake',
      'google-slides'
    ];

    const migratedConfig: MCPConfig = { ...existingConfig };

    // Remove old stdio-based servers
    for (const serverName of serversToMigrate) {
      if (existingConfig[serverName]) {
        console.log(`🔄 Migrating server: ${serverName}`);
        delete migratedConfig[serverName];
      }
    }

    // Add new HTTP-based unified server
    migratedConfig['mcp-unified-http'] = {
      command: 'npx',
      args: ['@modelcontextprotocol/cli', 'connect', `http://localhost:${port}/mcp`],
      env: {
        MCP_HTTP_BEARER_TOKEN: token
      }
    };

    // Write updated config
    writeFileSync(configPath, JSON.stringify(migratedConfig, null, 2));
    console.log(`✅ Updated config written to: ${configPath}`);

    // Summary
    console.log('\n📊 Migration Summary:');
    console.log('─'.repeat(50));
    console.log(`Removed servers: ${serversToMigrate.filter(s => existingConfig[s]).join(', ')}`);
    console.log(`Added server: mcp-unified-http`);
    console.log(`HTTP endpoint: http://localhost:${port}/mcp`);
    console.log(`Authentication: Bearer token (role: ${role})`);
    console.log('─'.repeat(50));

    console.log('\n🚀 Next Steps:');
    console.log('1. Start the unified HTTP server: npm run dev');
    console.log('2. Test the connection with Claude Code');
    console.log('3. Verify all tools are accessible');
    console.log('4. Remove backup file once confirmed working\n');

    console.log('🎫 Your Bearer Token (save this securely):');
    console.log('─'.repeat(50));
    console.log(token);
    console.log('─'.repeat(50));

  } catch (error) {
    console.error('❌ Migration failed:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}