// Connection manager for shared resources
import { Environment } from '../utils/validation';

// Connection status tracking
export interface ConnectionStatus {
  connected: boolean;
  lastConnected?: Date;
  error?: string;
}

class ConnectionManager {
  private connections: Map<string, any> = new Map();
  private status: Map<string, ConnectionStatus> = new Map();

  // Register a connection
  setConnection(name: string, connection: any): void {
    this.connections.set(name, connection);
    this.status.set(name, { connected: true, lastConnected: new Date() });
  }

  // Get a connection
  getConnection(name: string): any {
    return this.connections.get(name);
  }

  // Check if connection exists and is active
  hasConnection(name: string): boolean {
    const status = this.status.get(name);
    return status?.connected === true;
  }

  // Get connection status
  getConnectionStatus(name: string): ConnectionStatus | undefined {
    return this.status.get(name);
  }

  // Mark connection as failed
  setConnectionError(name: string, error: string): void {
    this.status.set(name, { connected: false, error });
  }

  // Close all connections gracefully
  async closeAll(): Promise<void> {
    const closePromises: Promise<void>[] = [];

    for (const [name, connection] of this.connections.entries()) {
      if (connection && typeof connection.close === 'function') {
        closePromises.push(
          connection.close().catch((error: any) =>
            console.warn(`Failed to close ${name} connection:`, error)
          )
        );
      }
      if (connection && typeof connection.destroy === 'function') {
        closePromises.push(
          connection.destroy().catch((error: any) =>
            console.warn(`Failed to destroy ${name} connection:`, error)
          )
        );
      }
    }

    await Promise.all(closePromises);

    this.connections.clear();
    this.status.clear();
  }

  // Get all connection statuses
  getAllStatuses(): Record<string, ConnectionStatus> {
    const statuses: Record<string, ConnectionStatus> = {};
    for (const [name, status] of this.status.entries()) {
      statuses[name] = status;
    }
    return statuses;
  }
}

// Global connection manager instance
export const connectionManager = new ConnectionManager();

// Initialize connections based on environment
export async function initializeConnections(env: Environment): Promise<void> {
  const initPromises: Promise<void>[] = [];

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
async function initializeSnowflake(env: Environment): Promise<void> {
  try {
    // Dynamic import to avoid loading if not needed
    const snowflake = await import('snowflake-sdk');

    const connection = snowflake.createConnection({
      account: env.SNOWFLAKE_ACCOUNT,
      username: env.SNOWFLAKE_USER,
      authenticator: env.SNOWFLAKE_AUTHENTICATOR,
      warehouse: env.SNOWFLAKE_WAREHOUSE,
      database: env.SNOWFLAKE_DATABASE,
      privateKeyPath: env.SNOWFLAKE_PRIVATE_KEY_PATH
    });

    // Test connection
    await new Promise<void>((resolve, reject) => {
      connection.connect((err, conn) => {
        if (err) {
          reject(new Error(`Snowflake connection failed: ${err.message}`));
        } else {
          resolve();
        }
      });
    });

    connectionManager.setConnection('snowflake', connection);
    console.log('Snowflake connection initialized successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    connectionManager.setConnectionError('snowflake', errorMessage);
    console.warn('Failed to initialize Snowflake connection:', errorMessage);
  }
}

// Google client initialization
async function initializeGoogle(env: Environment): Promise<void> {
  try {
    // Dynamic import to avoid loading if not needed
    const { google } = await import('googleapis');

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
    } else if (env.GOOGLE_CLIENT_EMAIL && env.GOOGLE_WRITE_PRIVATE_KEY) {
      // Direct service account auth
      auth = new google.auth.JWT(
        env.GOOGLE_CLIENT_EMAIL,
        undefined,
        env.GOOGLE_WRITE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        [
          'https://www.googleapis.com/auth/gmail.readonly',
          'https://www.googleapis.com/auth/gmail.send',
          'https://www.googleapis.com/auth/presentations',
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/documents'
        ]
      );
    } else {
      throw new Error('No Google authentication credentials provided');
    }

    // Test authentication
    await auth.getAccessToken();

    connectionManager.setConnection('google', auth);
    console.log('Google Auth client initialized successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    connectionManager.setConnectionError('google', errorMessage);
    console.warn('Failed to initialize Google client:', errorMessage);
  }
}

// AWS client initialization
async function initializeAWS(env: Environment): Promise<void> {
  try {
    // Dynamic import to avoid loading if not needed
    const { S3Client } = await import('@aws-sdk/client-s3');

    const s3Client = new S3Client({
      region: env.AWS_REGION,
      ...(env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && {
        credentials: {
          accessKeyId: env.AWS_ACCESS_KEY_ID,
          secretAccessKey: env.AWS_SECRET_ACCESS_KEY
        }
      })
    });

    connectionManager.setConnection('aws_s3', s3Client);
    console.log('AWS S3 client initialized successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    connectionManager.setConnectionError('aws_s3', errorMessage);
    console.warn('Failed to initialize AWS S3 client:', errorMessage);
  }
}