import cors from 'cors';
import { CorsOptions } from 'cors';

// CORS configuration for MCP HTTP server
export function createCorsMiddleware() {
  const corsOptions: CorsOptions = {
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
      // In development, allow all origins
      if (process.env.NODE_ENV === 'development') {
        return callback(null, true);
      }

      // In production, define allowed origins
      const allowedOrigins = [
        'https://claude.ai',
        'https://console.anthropic.com',
        'http://localhost:3000',
        'http://localhost:8080',
        // Add your production domains here
      ];

      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`CORS rejected origin: ${origin}`);
        callback(new Error(`Origin ${origin} not allowed by CORS policy`));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept'
    ],
    credentials: true,
    maxAge: 86400, // 24 hours
    optionsSuccessStatus: 200 // For legacy browser support
  };

  return cors(corsOptions);
}