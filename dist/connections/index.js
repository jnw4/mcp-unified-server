"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionManager = void 0;
exports.initializeConnections = initializeConnections;
class ConnectionManager {
    connections = new Map();
    status = new Map();
    // Register a connection
    setConnection(name, connection) {
        this.connections.set(name, connection);
        this.status.set(name, { connected: true, lastConnected: new Date() });
    }
    // Get a connection
    getConnection(name) {
        return this.connections.get(name);
    }
    // Check if connection exists and is active
    hasConnection(name) {
        const status = this.status.get(name);
        return status?.connected === true;
    }
    // Get connection status
    getConnectionStatus(name) {
        return this.status.get(name);
    }
    // Mark connection as failed
    setConnectionError(name, error) {
        this.status.set(name, { connected: false, error });
    }
    // Close all connections gracefully
    async closeAll() {
        const closePromises = [];
        for (const [name, connection] of this.connections.entries()) {
            if (connection && typeof connection.close === 'function') {
                closePromises.push(connection.close().catch((error) => console.warn(`Failed to close ${name} connection:`, error)));
            }
            if (connection && typeof connection.destroy === 'function') {
                closePromises.push(connection.destroy().catch((error) => console.warn(`Failed to destroy ${name} connection:`, error)));
            }
        }
        await Promise.all(closePromises);
        this.connections.clear();
        this.status.clear();
    }
    // Get all connection statuses
    getAllStatuses() {
        const statuses = {};
        for (const [name, status] of this.status.entries()) {
            statuses[name] = status;
        }
        return statuses;
    }
}
// Global connection manager instance
exports.connectionManager = new ConnectionManager();
// Initialize connections based on environment
async function initializeConnections(env) {
    const initPromises = [];
    // Initialize Snowflake connection if configured
    if (env.SNOWFLAKE_ACCOUNT && env.SNOWFLAKE_USER) {
        initPromises.push(initializeSnowflake(env));
    }
    // Initialize Google client if configured
    if (env.GOOGLE_APPLICATION_CREDENTIALS || env.GOOGLE_CLIENT_EMAIL) {
        initPromises.push(initializeGoogle(env));
    }
    // Initialize AWS client if configured
    if (env.AWS_REGION) {
        initPromises.push(initializeAWS(env));
    }
    // Wait for all connections to initialize
    await Promise.all(initPromises);
}
// Snowflake connection initialization
async function initializeSnowflake(env) {
    try {
        // Dynamic import to avoid loading if not needed
        const snowflake = await Promise.resolve().then(() => __importStar(require('snowflake-sdk')));
        const connection = snowflake.createConnection({
            account: env.SNOWFLAKE_ACCOUNT,
            username: env.SNOWFLAKE_USER,
            authenticator: env.SNOWFLAKE_AUTHENTICATOR,
            warehouse: env.SNOWFLAKE_WAREHOUSE,
            database: env.SNOWFLAKE_DATABASE,
            privateKeyPath: env.SNOWFLAKE_PRIVATE_KEY_PATH
        });
        // Test connection
        await new Promise((resolve, reject) => {
            connection.connect((err, conn) => {
                if (err) {
                    reject(new Error(`Snowflake connection failed: ${err.message}`));
                }
                else {
                    resolve();
                }
            });
        });
        exports.connectionManager.setConnection('snowflake', connection);
        console.log('Snowflake connection initialized successfully');
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        exports.connectionManager.setConnectionError('snowflake', errorMessage);
        console.warn('Failed to initialize Snowflake connection:', errorMessage);
    }
}
// Google client initialization
async function initializeGoogle(env) {
    try {
        // Dynamic import to avoid loading if not needed
        const { google } = await Promise.resolve().then(() => __importStar(require('googleapis')));
        let auth;
        if (env.GOOGLE_APPLICATION_CREDENTIALS) {
            // Service account file auth
            auth = new google.auth.GoogleAuth({
                keyFile: env.GOOGLE_APPLICATION_CREDENTIALS,
                scopes: [
                    'https://www.googleapis.com/auth/gmail.readonly',
                    'https://www.googleapis.com/auth/gmail.send',
                    'https://www.googleapis.com/auth/presentations',
                    'https://www.googleapis.com/auth/spreadsheets',
                    'https://www.googleapis.com/auth/documents'
                ]
            });
        }
        else if (env.GOOGLE_CLIENT_EMAIL && env.GOOGLE_WRITE_PRIVATE_KEY) {
            // Direct service account auth
            auth = new google.auth.JWT(env.GOOGLE_CLIENT_EMAIL, undefined, env.GOOGLE_WRITE_PRIVATE_KEY.replace(/\\n/g, '\n'), [
                'https://www.googleapis.com/auth/gmail.readonly',
                'https://www.googleapis.com/auth/gmail.send',
                'https://www.googleapis.com/auth/presentations',
                'https://www.googleapis.com/auth/spreadsheets',
                'https://www.googleapis.com/auth/documents'
            ]);
        }
        else {
            throw new Error('No Google authentication credentials provided');
        }
        // Test authentication
        await auth.getAccessToken();
        exports.connectionManager.setConnection('google', auth);
        console.log('Google Auth client initialized successfully');
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        exports.connectionManager.setConnectionError('google', errorMessage);
        console.warn('Failed to initialize Google client:', errorMessage);
    }
}
// AWS client initialization
async function initializeAWS(env) {
    try {
        // Dynamic import to avoid loading if not needed
        const { S3Client } = await Promise.resolve().then(() => __importStar(require('@aws-sdk/client-s3')));
        const s3Client = new S3Client({
            region: env.AWS_REGION,
            ...(env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && {
                credentials: {
                    accessKeyId: env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: env.AWS_SECRET_ACCESS_KEY
                }
            })
        });
        exports.connectionManager.setConnection('aws_s3', s3Client);
        console.log('AWS S3 client initialized successfully');
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        exports.connectionManager.setConnectionError('aws_s3', errorMessage);
        console.warn('Failed to initialize AWS S3 client:', errorMessage);
    }
}
//# sourceMappingURL=index.js.map