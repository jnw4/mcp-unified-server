#!/usr/bin/env node

import { generateToken, formatTokenInfo } from '../src/auth/tokens';
import { getAvailableRoles } from '../src/auth/roles';
import { validateEnvironment } from '../src/utils/validation';

interface TokenOptions {
  role?: string;
  user?: string;
  expires?: string;
  help?: boolean;
}

function parseArgs(): TokenOptions {
  const args = process.argv.slice(2);
  const options: TokenOptions = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--role':
      case '-r':
        options.role = args[++i];
        break;
      case '--user':
      case '-u':
        options.user = args[++i];
        break;
      case '--expires':
      case '-e':
        options.expires = args[++i];
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
MCP Unified Server - Token Generator

Usage: npm run generate-token -- [options]

Options:
  -r, --role <role>      User role (default: readonly)
  -u, --user <user>      User identifier (default: generated)
  -e, --expires <time>   Token expiry (e.g., 1h, 24h, 7d)
  -h, --help            Show this help message

Examples:
  npm run generate-token -- --role admin --user admin@pureplay.media
  npm run generate-token -- --role analyst --expires 8h
  npm run generate-token -- --role finance --user finance@pureplay.media --expires 24h

Available roles: ${getAvailableRoles().join(', ')}
`);
}

async function main(): Promise<void> {
  try {
    // Parse command line arguments
    const options = parseArgs();

    if (options.help) {
      printUsage();
      return;
    }

    // Validate environment (ensures MCP_AUTH_SECRET is set)
    validateEnvironment();

    // Set defaults
    const role = options.role || 'readonly';
    const userId = options.user || `user-${Date.now()}`;
    const expires = options.expires;

    // Validate role
    const availableRoles = getAvailableRoles();
    if (!availableRoles.includes(role)) {
      console.error(`❌ Invalid role: ${role}`);
      console.error(`Available roles: ${availableRoles.join(', ')}`);
      process.exit(1);
    }

    console.log('🔐 Generating authentication token...\n');

    // Generate token
    const token = await generateToken(userId, role, expires);

    // Decode token to show info
    const { verifyToken } = await import('../src/auth/tokens');
    const payload = await verifyToken(token);

    // Display results
    console.log('✅ Token generated successfully!\n');

    console.log('📋 Token Information:');
    console.log('─'.repeat(50));
    console.log(formatTokenInfo(payload));
    console.log('─'.repeat(50));

    console.log('\n🎫 Bearer Token:');
    console.log('─'.repeat(50));
    console.log(token);
    console.log('─'.repeat(50));

    console.log('\n📖 Usage Examples:');
    console.log('');
    console.log('cURL:');
    console.log(`curl -H "Authorization: Bearer ${token}" \\`);
    console.log(`     -H "Content-Type: application/json" \\`);
    console.log(`     -X POST http://localhost:3000/mcp/list`);
    console.log('');
    console.log('MCP Client Configuration (.claude/mcp.json):');
    console.log(`{
  "mcp-unified-http": {
    "command": "npx",
    "args": ["@modelcontextprotocol/cli", "connect", "http://localhost:3000/mcp"],
    "env": {
      "MCP_HTTP_BEARER_TOKEN": "${token}"
    }
  }
}`);

    console.log('\n💡 Security Notes:');
    console.log('- Keep this token secure and private');
    console.log('- Token will expire automatically based on role policy');
    console.log('- Regenerate tokens regularly for security');
    console.log('- Never commit tokens to version control\n');

  } catch (error) {
    console.error('❌ Failed to generate token:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}