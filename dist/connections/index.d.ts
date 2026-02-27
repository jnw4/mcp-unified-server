import { Environment } from '../utils/validation';
export interface ConnectionStatus {
    connected: boolean;
    lastConnected?: Date;
    error?: string;
}
declare class ConnectionManager {
    private connections;
    private status;
    setConnection(name: string, connection: any): void;
    getConnection(name: string): any;
    hasConnection(name: string): boolean;
    getConnectionStatus(name: string): ConnectionStatus | undefined;
    setConnectionError(name: string, error: string): void;
    closeAll(): Promise<void>;
    getAllStatuses(): Record<string, ConnectionStatus>;
}
export declare const connectionManager: ConnectionManager;
export declare function initializeConnections(env: Environment): Promise<void>;
export {};
//# sourceMappingURL=index.d.ts.map