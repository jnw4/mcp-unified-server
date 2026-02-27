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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.beeswaxTools = void 0;
exports.handleBeeswaxTool = handleBeeswaxTool;
const csv_parser_1 = __importDefault(require("csv-parser"));
const stream_1 = require("stream");
const util_1 = require("util");
const client_s3_1 = require("@aws-sdk/client-s3");
const pipelineAsync = (0, util_1.promisify)(stream_1.pipeline);
// Get S3 client
function getS3Client() {
    return new client_s3_1.S3Client({
        region: process.env.AWS_REGION ?? 'us-east-2',
        ...(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && {
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        })
    });
}
// Tool definitions
exports.beeswaxTools = [
    {
        name: 'beeswax_clean_csv',
        description: 'Clean and normalize a CSV file (remove empty rows, normalize headers, standardize formats)',
        inputSchema: {
            type: 'object',
            properties: {
                csvContent: { type: 'string', description: 'CSV content as string' },
                removeEmptyRows: { type: 'boolean', description: 'Remove empty or whitespace-only rows (default: true)' },
                normalizeHeaders: { type: 'boolean', description: 'Normalize column headers (lowercase, underscore) (default: true)' },
                trimValues: { type: 'boolean', description: 'Trim whitespace from all cell values (default: true)' },
            },
            required: ['csvContent'],
        },
    },
    {
        name: 'beeswax_clean_s3_object',
        description: 'Clean a CSV file stored in S3 and upload the cleaned version',
        inputSchema: {
            type: 'object',
            properties: {
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
                key: { type: 'string', description: 'S3 object key (path/filename)' },
                outputKey: { type: 'string', description: 'Output key for cleaned file (default: adds -cleaned suffix)' },
                removeEmptyRows: { type: 'boolean', description: 'Remove empty rows (default: true)' },
                normalizeHeaders: { type: 'boolean', description: 'Normalize headers (default: true)' },
                trimValues: { type: 'boolean', description: 'Trim whitespace (default: true)' },
                tagAsProcessed: { type: 'boolean', description: 'Add processed=true tag to cleaned file (default: true)' },
            },
            required: ['key'],
        },
    },
    {
        name: 'beeswax_clean_s3_prefix',
        description: 'Clean all CSV files under an S3 prefix (batch processing)',
        inputSchema: {
            type: 'object',
            properties: {
                bucket: { type: 'string', description: 'S3 bucket name (default: pureplay-creatives)' },
                prefix: { type: 'string', description: 'S3 prefix to process (folder path)' },
                outputPrefix: { type: 'string', description: 'Output prefix for cleaned files (default: adds -cleaned to original prefix)' },
                maxFiles: { type: 'number', description: 'Maximum files to process (default: 10)', minimum: 1, maximum: 50 },
                skipProcessed: { type: 'boolean', description: 'Skip files already tagged as processed (default: true)' },
            },
            required: ['prefix'],
        },
    },
];
// Helper functions
function normalizeHeader(header) {
    return header
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
}
function isEmptyRow(row) {
    return Object.values(row).every(value => !value || value.trim() === '');
}
function cleanRow(row, trimValues) {
    if (!trimValues)
        return row;
    const cleaned = {};
    for (const [key, value] of Object.entries(row)) {
        cleaned[key] = typeof value === 'string' ? value.trim() : value;
    }
    return cleaned;
}
async function cleanCsvContent(csvContent, options = {}) {
    const { removeEmptyRows = true, normalizeHeaders = true, trimValues = true, } = options;
    return new Promise((resolve, reject) => {
        const rows = [];
        const stats = {
            originalRows: 0,
            emptyRowsRemoved: 0,
            finalRows: 0,
            headersNormalized: false,
        };
        // Parse CSV
        const parser = (0, csv_parser_1.default)({ headers: true });
        parser.on('data', (row) => {
            stats.originalRows++;
            // Check if row is empty
            if (removeEmptyRows && isEmptyRow(row)) {
                stats.emptyRowsRemoved++;
                return;
            }
            // Clean row values
            const cleanedRow = cleanRow(row, trimValues);
            rows.push(cleanedRow);
        });
        parser.on('end', async () => {
            try {
                stats.finalRows = rows.length;
                if (rows.length === 0) {
                    resolve({ cleaned: '', stats });
                    return;
                }
                // Get headers from first row
                let headers = Object.keys(rows[0]);
                // Normalize headers if requested
                if (normalizeHeaders) {
                    const normalizedHeaders = headers.map(normalizeHeader);
                    stats.headersNormalized = !headers.every((h, i) => h === normalizedHeaders[i]);
                    // Update rows with normalized headers
                    const normalizedRows = rows.map(row => {
                        const newRow = {};
                        headers.forEach((oldHeader, i) => {
                            newRow[normalizedHeaders[i]] = row[oldHeader];
                        });
                        return newRow;
                    });
                    rows.splice(0, rows.length, ...normalizedRows);
                    headers = normalizedHeaders;
                }
                // Create CSV content
                const csvLines = [
                    headers.join(','),
                    ...rows.map(row => headers.map(header => {
                        const value = row[header] || '';
                        // Quote values that contain commas, quotes, or newlines
                        if (value.includes(',') || value.includes('"') || value.includes('\n')) {
                            return `"${value.replace(/"/g, '""')}"`;
                        }
                        return value;
                    }).join(','))
                ];
                resolve({ cleaned: csvLines.join('\n'), stats });
            }
            catch (error) {
                reject(error);
            }
        });
        parser.on('error', reject);
        // Feed CSV content to parser
        parser.write(csvContent);
        parser.end();
    });
}
// Tool handler
async function handleBeeswaxTool(name, args) {
    try {
        const s3 = getS3Client();
        const bucket = args?.bucket || process.env.AWS_S3_BUCKET || 'pureplay-creatives';
        switch (name) {
            case 'beeswax_clean_csv': {
                const { csvContent, removeEmptyRows = true, normalizeHeaders = true, trimValues = true } = args;
                const { cleaned, stats } = await cleanCsvContent(csvContent, {
                    removeEmptyRows,
                    normalizeHeaders,
                    trimValues,
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                stats,
                                cleanedCsv: cleaned,
                                preview: cleaned.split('\n').slice(0, 5).join('\n'), // First 5 lines
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_clean_s3_object': {
                const { key, outputKey, removeEmptyRows = true, normalizeHeaders = true, trimValues = true, tagAsProcessed = true, } = args;
                // Download CSV from S3
                const getResponse = await s3.send(new client_s3_1.GetObjectCommand({ Bucket: bucket, Key: key }));
                const csvContent = await getResponse.Body?.transformToString() || '';
                // Clean CSV
                const { cleaned, stats } = await cleanCsvContent(csvContent, {
                    removeEmptyRows,
                    normalizeHeaders,
                    trimValues,
                });
                // Generate output key
                const finalOutputKey = outputKey || key.replace(/\.csv$/i, '-cleaned.csv');
                // Upload cleaned CSV
                await s3.send(new client_s3_1.PutObjectCommand({
                    Bucket: bucket,
                    Key: finalOutputKey,
                    Body: cleaned,
                    ContentType: 'text/csv',
                }));
                // Tag as processed if requested
                if (tagAsProcessed) {
                    await s3.send(new client_s3_1.PutObjectTaggingCommand({
                        Bucket: bucket,
                        Key: finalOutputKey,
                        Tagging: {
                            TagSet: [
                                { Key: 'processed', Value: 'true' },
                                { Key: 'processedAt', Value: new Date().toISOString() },
                                { Key: 'originalKey', Value: key },
                            ],
                        },
                    }));
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                bucket,
                                originalKey: key,
                                cleanedKey: finalOutputKey,
                                stats,
                                url: `s3://${bucket}/${finalOutputKey}`,
                                tagged: tagAsProcessed,
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_clean_s3_prefix': {
                const { prefix, outputPrefix, maxFiles = 10, skipProcessed = true, } = args;
                // List objects under prefix
                const { ListObjectsV2Command } = await Promise.resolve().then(() => __importStar(require('@aws-sdk/client-s3')));
                const listResponse = await s3.send(new ListObjectsV2Command({
                    Bucket: bucket,
                    Prefix: prefix,
                    MaxKeys: maxFiles,
                }));
                const objects = listResponse.Contents?.filter(obj => obj.Key?.toLowerCase().endsWith('.csv')) || [];
                const results = [];
                let processed = 0;
                let skipped = 0;
                for (const obj of objects.slice(0, maxFiles)) {
                    const key = obj.Key;
                    try {
                        // Check if already processed (if skipProcessed is true)
                        if (skipProcessed) {
                            try {
                                const tagsResponse = await s3.send(new client_s3_1.GetObjectTaggingCommand({
                                    Bucket: bucket,
                                    Key: key,
                                }));
                                const hasProcessedTag = tagsResponse.TagSet?.some(tag => tag.Key === 'processed' && tag.Value === 'true');
                                if (hasProcessedTag) {
                                    skipped++;
                                    continue;
                                }
                            }
                            catch {
                                // No tags or error reading tags, continue processing
                            }
                        }
                        // Process this file
                        const cleanResult = await handleBeeswaxTool('beeswax_clean_s3_object', {
                            bucket,
                            key,
                            outputKey: outputPrefix ? key.replace(prefix, outputPrefix) : undefined,
                            removeEmptyRows: true,
                            normalizeHeaders: true,
                            trimValues: true,
                            tagAsProcessed: true,
                        });
                        const result = JSON.parse(cleanResult.content[0].text);
                        results.push({
                            originalKey: key,
                            cleanedKey: result.cleanedKey,
                            stats: result.stats,
                        });
                        processed++;
                    }
                    catch (error) {
                        results.push({
                            originalKey: key,
                            error: error instanceof Error ? error.message : 'Unknown error',
                        });
                    }
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                bucket,
                                prefix,
                                totalFiles: objects.length,
                                processed,
                                skipped,
                                results,
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown Beeswax tool: ${name}` }],
                    isError: true,
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `Beeswax tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true,
        };
    }
}
//# sourceMappingURL=index.js.map