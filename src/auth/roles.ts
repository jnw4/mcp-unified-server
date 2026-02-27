import { readFileSync } from 'fs';
import { join } from 'path';
import { AuthorizationError } from '../utils/errors';

export interface RoleConfig {
  description: string;
  allowedTools: string[];
}

export interface RolesConfig {
  roles: Record<string, RoleConfig>;
  defaultRole: string;
  tokenExpiry: Record<string, string>;
}

// Load roles configuration
let rolesConfig: RolesConfig;

export function loadRolesConfig(): RolesConfig {
  if (!rolesConfig) {
    try {
      const configPath = join(process.cwd(), 'config', 'roles.json');
      const configData = readFileSync(configPath, 'utf-8');
      rolesConfig = JSON.parse(configData);
    } catch (error) {
      // Fallback to default configuration if file not found
      rolesConfig = {
        roles: {
          admin: {
            description: 'Full access to all tools and administrative functions',
            allowedTools: ['*']
          },
          analyst: {
            description: 'Data analysis tools - Snowflake, Claims, Google, S3, Gemini',
            allowedTools: [
              'snowflake_*',
              'claims_*',
              'google_*',
              's3_*',
              'gemini_*',
              'xlsx_*',
              'client_hierarchy_*'
            ]
          },
          finance: {
            description: 'Financial tools - QBO, Claims, Ramp',
            allowedTools: [
              'qbo_*',
              'claims_*',
              'ramp_*',
              'xlsx_*'
            ]
          },
          readonly: {
            description: 'Read-only access to most tools',
            allowedTools: [
              'qbo_get_*',
              'qbo_query',
              'snowflake_run_query',
              'snowflake_list_*',
              'snowflake_describe_*',
              'snowflake_preview_*',
              'claims_list_*',
              'claims_get_*',
              'ramp_get_*',
              'google_list_*',
              'google_get_*',
              's3_download',
              's3_get_*'
            ]
          }
        },
        defaultRole: 'readonly',
        tokenExpiry: {
          admin: '24h',
          analyst: '8h',
          finance: '8h',
          readonly: '4h'
        }
      };
    }
  }
  return rolesConfig;
}

// Wildcard pattern matching
function matchesPattern(toolName: string, pattern: string): boolean {
  if (pattern === '*') return true;

  if (pattern.endsWith('*')) {
    const prefix = pattern.slice(0, -1);
    return toolName.startsWith(prefix);
  }

  return toolName === pattern;
}

// Check if a role has access to a specific tool
export function hasToolAccess(role: string, toolName: string): boolean {
  const config = loadRolesConfig();
  const roleConfig = config.roles[role];

  if (!roleConfig) {
    throw new AuthorizationError(`Unknown role: ${role}`);
  }

  return roleConfig.allowedTools.some(pattern => matchesPattern(toolName, pattern));
}

// Get all allowed tools for a role (for listing)
export function getAllowedTools(role: string, availableTools: string[]): string[] {
  const config = loadRolesConfig();
  const roleConfig = config.roles[role];

  if (!roleConfig) {
    throw new AuthorizationError(`Unknown role: ${role}`);
  }

  // If admin (has '*'), return all tools
  if (roleConfig.allowedTools.includes('*')) {
    return availableTools;
  }

  // Filter tools based on patterns
  return availableTools.filter(toolName =>
    roleConfig.allowedTools.some(pattern => matchesPattern(toolName, pattern))
  );
}

// Get token expiry for a role
export function getTokenExpiry(role: string): string {
  const config = loadRolesConfig();
  return config.tokenExpiry[role] || config.tokenExpiry[config.defaultRole] || '4h';
}

// Validate that a role exists
export function validateRole(role: string): boolean {
  const config = loadRolesConfig();
  return role in config.roles;
}

// Get all available roles
export function getAvailableRoles(): string[] {
  const config = loadRolesConfig();
  return Object.keys(config.roles);
}