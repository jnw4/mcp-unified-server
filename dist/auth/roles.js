"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRolesConfig = loadRolesConfig;
exports.hasToolAccess = hasToolAccess;
exports.getAllowedTools = getAllowedTools;
exports.getTokenExpiry = getTokenExpiry;
exports.validateRole = validateRole;
exports.getAvailableRoles = getAvailableRoles;
const fs_1 = require("fs");
const path_1 = require("path");
const errors_1 = require("../utils/errors");
// Load roles configuration
let rolesConfig;
function loadRolesConfig() {
    if (!rolesConfig) {
        try {
            const configPath = (0, path_1.join)(process.cwd(), 'config', 'roles.json');
            const configData = (0, fs_1.readFileSync)(configPath, 'utf-8');
            rolesConfig = JSON.parse(configData);
        }
        catch (error) {
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
function matchesPattern(toolName, pattern) {
    if (pattern === '*')
        return true;
    if (pattern.endsWith('*')) {
        const prefix = pattern.slice(0, -1);
        return toolName.startsWith(prefix);
    }
    return toolName === pattern;
}
// Check if a role has access to a specific tool
function hasToolAccess(role, toolName) {
    const config = loadRolesConfig();
    const roleConfig = config.roles[role];
    if (!roleConfig) {
        throw new errors_1.AuthorizationError(`Unknown role: ${role}`);
    }
    return roleConfig.allowedTools.some(pattern => matchesPattern(toolName, pattern));
}
// Get all allowed tools for a role (for listing)
function getAllowedTools(role, availableTools) {
    const config = loadRolesConfig();
    const roleConfig = config.roles[role];
    if (!roleConfig) {
        throw new errors_1.AuthorizationError(`Unknown role: ${role}`);
    }
    // If admin (has '*'), return all tools
    if (roleConfig.allowedTools.includes('*')) {
        return availableTools;
    }
    // Filter tools based on patterns
    return availableTools.filter(toolName => roleConfig.allowedTools.some(pattern => matchesPattern(toolName, pattern)));
}
// Get token expiry for a role
function getTokenExpiry(role) {
    const config = loadRolesConfig();
    return config.tokenExpiry[role] || config.tokenExpiry[config.defaultRole] || '4h';
}
// Validate that a role exists
function validateRole(role) {
    const config = loadRolesConfig();
    return role in config.roles;
}
// Get all available roles
function getAvailableRoles() {
    const config = loadRolesConfig();
    return Object.keys(config.roles);
}
//# sourceMappingURL=roles.js.map