#!/usr/bin/env node
declare class UnifiedMCPServer {
    private server;
    private app;
    private env;
    private allTools;
    constructor();
    private setupMiddleware;
    private setupMCPHandlers;
    private setupHTTPRoutes;
    private handleMCPRequest;
    private getToolCategories;
    private initializeServer;
    start(): Promise<void>;
}
export { UnifiedMCPServer };
//# sourceMappingURL=index.d.ts.map