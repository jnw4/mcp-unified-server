"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Tools = void 0;
exports.handleS3Tool = handleS3Tool;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
// Get S3 client from connection manager
function getS3Client() {
    const client = new client_s3_1.S3Client({
        region: process.env.AWS_REGION ?? 'us-east-2',
        ...(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && {
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        })
    });
    return client;
}
// Tool definitions
exports.s3Tools = [
    {
        name: 's3_upload',
        description: 'Upload content to S3 bucket',
        inputSchema: {
            type: 'object',
            properties: {
                key: { type: 'string', description: 'S3 key (path/filename)' },
                content: { type: 'string', description: 'Content to upload (base64 for binary)' },
                contentType: { type: 'string', description: 'MIME type (e.g., text/plain, application/json)', default: 'text/plain' },
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
                isBase64: { type: 'boolean', description: 'Whether content is base64 encoded', default: false },
            },
            required: ['key', 'content'],
        },
    },
    {
        name: 's3_download',
        description: 'Download content from S3 bucket',
        inputSchema: {
            type: 'object',
            properties: {
                key: { type: 'string', description: 'S3 key (path/filename)' },
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
                asBase64: { type: 'boolean', description: 'Return as base64 string for binary files', default: false },
            },
            required: ['key'],
        },
    },
    {
        name: 's3_delete',
        description: 'Delete object from S3 bucket',
        inputSchema: {
            type: 'object',
            properties: {
                key: { type: 'string', description: 'S3 key (path/filename)' },
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
            },
            required: ['key'],
        },
    },
    {
        name: 's3_get_presigned_url',
        description: 'Generate presigned URL for downloading from S3',
        inputSchema: {
            type: 'object',
            properties: {
                key: { type: 'string', description: 'S3 key (path/filename)' },
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
                expiresIn: { type: 'number', description: 'URL expiration in seconds (default: 3600 = 1 hour)' },
            },
            required: ['key'],
        },
    },
    {
        name: 's3_get_presigned_upload_url',
        description: 'Generate presigned URL for uploading to S3 (for direct browser uploads)',
        inputSchema: {
            type: 'object',
            properties: {
                key: { type: 'string', description: 'S3 key (path/filename)' },
                contentType: { type: 'string', description: 'MIME type for upload' },
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
                expiresIn: { type: 'number', description: 'URL expiration in seconds (default: 900 = 15 min)' },
            },
            required: ['key', 'contentType'],
        },
    },
    {
        name: 's3_list_objects',
        description: 'List objects in S3 bucket with optional prefix filter',
        inputSchema: {
            type: 'object',
            properties: {
                prefix: { type: 'string', description: 'Filter by key prefix (folder path)' },
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
                maxKeys: { type: 'number', description: 'Maximum number of objects to return (default: 100)' },
            },
        },
    },
];
// Tool handler
async function handleS3Tool(name, args) {
    try {
        const s3 = getS3Client();
        const bucket = args?.bucket || process.env.AWS_S3_BUCKET || 'pureplay-creatives';
        switch (name) {
            case 's3_upload': {
                const { key, content, contentType = 'text/plain', isBase64 = false } = args;
                let body;
                if (isBase64) {
                    body = Buffer.from(content, 'base64');
                }
                else {
                    body = Buffer.from(content, 'utf-8');
                }
                await s3.send(new client_s3_1.PutObjectCommand({
                    Bucket: bucket,
                    Key: key,
                    Body: body,
                    ContentType: contentType,
                }));
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                bucket,
                                key,
                                size: body.length,
                                contentType,
                                url: `s3://${bucket}/${key}`
                            }, null, 2)
                        }]
                };
            }
            case 's3_download': {
                const { key, asBase64 = false } = args;
                const response = await s3.send(new client_s3_1.GetObjectCommand({ Bucket: bucket, Key: key }));
                const chunks = [];
                for await (const chunk of response.Body) {
                    chunks.push(chunk);
                }
                const buffer = Buffer.concat(chunks);
                const result = {
                    bucket,
                    key,
                    size: buffer.length,
                    contentType: response.ContentType,
                    content: asBase64 ? buffer.toString('base64') : buffer.toString('utf-8'),
                    isBase64: asBase64
                };
                return {
                    content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
                };
            }
            case 's3_delete': {
                const { key } = args;
                await s3.send(new client_s3_1.DeleteObjectCommand({ Bucket: bucket, Key: key }));
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({ success: true, bucket, key, action: 'deleted' }, null, 2)
                        }]
                };
            }
            case 's3_get_presigned_url': {
                const { key, expiresIn = 3600 } = args;
                const url = await (0, s3_request_presigner_1.getSignedUrl)(s3, new client_s3_1.GetObjectCommand({ Bucket: bucket, Key: key }), { expiresIn });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                bucket,
                                key,
                                url,
                                expiresIn,
                                expiresAt: new Date(Date.now() + expiresIn * 1000).toISOString()
                            }, null, 2)
                        }]
                };
            }
            case 's3_get_presigned_upload_url': {
                const { key, contentType, expiresIn = 900 } = args;
                const url = await (0, s3_request_presigner_1.getSignedUrl)(s3, new client_s3_1.PutObjectCommand({ Bucket: bucket, Key: key, ContentType: contentType }), { expiresIn });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                bucket,
                                key,
                                url,
                                contentType,
                                expiresIn,
                                expiresAt: new Date(Date.now() + expiresIn * 1000).toISOString(),
                                usage: 'Use this URL for direct browser PUT uploads'
                            }, null, 2)
                        }]
                };
            }
            case 's3_list_objects': {
                const { prefix, maxKeys = 100 } = args;
                const response = await s3.send(new client_s3_1.ListObjectsV2Command({
                    Bucket: bucket,
                    Prefix: prefix,
                    MaxKeys: maxKeys,
                }));
                const objects = response.Contents?.map(obj => ({
                    key: obj.Key,
                    size: obj.Size,
                    lastModified: obj.LastModified?.toISOString(),
                    storageClass: obj.StorageClass,
                })) || [];
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                bucket,
                                prefix: prefix || '',
                                objectCount: objects.length,
                                isTruncated: response.IsTruncated || false,
                                objects
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown S3 tool: ${name}` }],
                    isError: true,
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `S3 tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true,
        };
    }
}
//# sourceMappingURL=index.js.map