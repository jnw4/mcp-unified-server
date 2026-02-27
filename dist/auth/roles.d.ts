export interface RoleConfig {
    description: string;
    allowedTools: string[];
}
export interface RolesConfig {
    roles: Record<string, RoleConfig>;
    defaultRole: string;
    tokenExpiry: Record<string, string>;
}
export declare function loadRolesConfig(): RolesConfig;
export declare function hasToolAccess(role: string, toolName: string): boolean;
export declare function getAllowedTools(role: string, availableTools: string[]): string[];
export declare function getTokenExpiry(role: string): string;
export declare function validateRole(role: string): boolean;
export declare function getAvailableRoles(): string[];
//# sourceMappingURL=roles.d.ts.map