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
const axios_1 = __importDefault(require("axios"));
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
// Get Beeswax API client
function getBeeswaxClient() {
    const apiUrl = process.env.BEESWAX_API_URL || 'https://stingersbx.api.beeswax.com';
    const apiKey = process.env.BEESWAX_API_KEY;
    const userId = process.env.BEESWAX_USER_ID;
    if (!apiKey || !userId) {
        throw new Error('BEESWAX_API_KEY and BEESWAX_USER_ID environment variables are required for DSP API calls');
    }
    return axios_1.default.create({
        baseURL: apiUrl,
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json'
        }
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
    {
        name: 'beeswax_get_campaigns',
        description: 'Get campaigns from Beeswax DSP',
        inputSchema: {
            type: 'object',
            properties: {
                advertiser_id: { type: 'string', description: 'Filter by advertiser ID' },
                campaign_name: { type: 'string', description: 'Filter by campaign name' },
                active: { type: 'boolean', description: 'Filter by active status' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 50 }
            }
        }
    },
    {
        name: 'beeswax_create_campaign',
        description: 'Create a new campaign in Beeswax DSP',
        inputSchema: {
            type: 'object',
            properties: {
                advertiser_id: { type: 'string', description: 'Advertiser ID' },
                campaign_name: { type: 'string', description: 'Campaign name' },
                budget: { type: 'number', description: 'Campaign budget in cents' },
                start_date: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                end_date: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                active: { type: 'boolean', description: 'Campaign active status', default: true }
            },
            required: ['advertiser_id', 'campaign_name', 'budget', 'start_date']
        }
    },
    {
        name: 'beeswax_get_line_items',
        description: 'Get line items from Beeswax DSP',
        inputSchema: {
            type: 'object',
            properties: {
                campaign_id: { type: 'string', description: 'Filter by campaign ID' },
                advertiser_id: { type: 'string', description: 'Filter by advertiser ID' },
                active: { type: 'boolean', description: 'Filter by active status' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 50 }
            }
        }
    },
    {
        name: 'beeswax_create_line_item',
        description: 'Create a new line item in Beeswax DSP',
        inputSchema: {
            type: 'object',
            properties: {
                campaign_id: { type: 'string', description: 'Campaign ID' },
                line_item_name: { type: 'string', description: 'Line item name' },
                bidding_strategy: { type: 'string', enum: ['CPM', 'CPC', 'AUTO'], description: 'Bidding strategy', default: 'CPM' },
                bid_amount: { type: 'number', description: 'Bid amount in cents' },
                budget: { type: 'number', description: 'Line item budget in cents' },
                targeting: {
                    type: 'object',
                    properties: {
                        geo: { type: 'array', items: { type: 'string' }, description: 'Geographic targeting' },
                        device_type: { type: 'array', items: { type: 'string' }, description: 'Device type targeting' }
                    }
                }
            },
            required: ['campaign_id', 'line_item_name', 'bid_amount', 'budget']
        }
    },
    {
        name: 'beeswax_get_creatives',
        description: 'Get creatives from Beeswax DSP',
        inputSchema: {
            type: 'object',
            properties: {
                advertiser_id: { type: 'string', description: 'Filter by advertiser ID' },
                creative_name: { type: 'string', description: 'Filter by creative name' },
                active: { type: 'boolean', description: 'Filter by active status' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 50 }
            }
        }
    },
    {
        name: 'beeswax_upload_creative',
        description: 'Upload a creative to Beeswax DSP',
        inputSchema: {
            type: 'object',
            properties: {
                advertiser_id: { type: 'string', description: 'Advertiser ID' },
                creative_name: { type: 'string', description: 'Creative name' },
                creative_content: { type: 'string', description: 'Base64 encoded creative content (image/video)' },
                creative_type: { type: 'string', enum: ['BANNER', 'VIDEO', 'NATIVE'], description: 'Creative type' },
                width: { type: 'number', description: 'Creative width in pixels' },
                height: { type: 'number', description: 'Creative height in pixels' },
                click_url: { type: 'string', description: 'Click through URL' }
            },
            required: ['advertiser_id', 'creative_name', 'creative_content', 'creative_type', 'width', 'height', 'click_url']
        }
    },
    {
        name: 'beeswax_get_reports',
        description: 'Get performance reports from Beeswax DSP',
        inputSchema: {
            type: 'object',
            properties: {
                report_type: { type: 'string', enum: ['campaign', 'line_item', 'creative'], description: 'Report type', default: 'campaign' },
                start_date: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
                end_date: { type: 'string', description: 'End date (YYYY-MM-DD)' },
                advertiser_id: { type: 'string', description: 'Filter by advertiser ID' },
                metrics: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Metrics to include',
                    default: ['impressions', 'clicks', 'spend', 'conversions']
                }
            },
            required: ['start_date', 'end_date']
        }
    }
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
            // Beeswax DSP API tools
            case 'beeswax_get_campaigns': {
                const beeswax = getBeeswaxClient();
                const { advertiser_id, campaign_name, active, limit = 50 } = args;
                const params = new URLSearchParams();
                if (advertiser_id)
                    params.append('advertiser_id', advertiser_id);
                if (campaign_name)
                    params.append('campaign_name', campaign_name);
                if (active !== undefined)
                    params.append('active', active.toString());
                params.append('rows', limit.toString());
                const response = await beeswax.get(`/rest/campaign?${params}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total: response.data.payload?.length || 0,
                                campaigns: response.data.payload?.map((campaign) => ({
                                    campaign_id: campaign.campaign_id,
                                    campaign_name: campaign.campaign_name,
                                    advertiser_id: campaign.advertiser_id,
                                    budget: campaign.budget,
                                    start_date: campaign.start_date,
                                    end_date: campaign.end_date,
                                    active: campaign.active,
                                    spend: campaign.spend,
                                    impressions: campaign.impressions,
                                    clicks: campaign.clicks
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_create_campaign': {
                const beeswax = getBeeswaxClient();
                const { advertiser_id, campaign_name, budget, start_date, end_date, active = true } = args;
                const campaignData = {
                    advertiser_id,
                    campaign_name,
                    budget,
                    start_date,
                    end_date,
                    active,
                    campaign_budget_type: 1, // LIFETIME
                    bidding_strategy: 'CPM'
                };
                const response = await beeswax.post('/rest/campaign', campaignData);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: response.data.success,
                                campaign: {
                                    campaign_id: response.data.payload?.campaign_id,
                                    campaign_name: response.data.payload?.campaign_name,
                                    advertiser_id: response.data.payload?.advertiser_id,
                                    budget: response.data.payload?.budget,
                                    active: response.data.payload?.active
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_get_line_items': {
                const beeswax = getBeeswaxClient();
                const { campaign_id, advertiser_id, active, limit = 50 } = args;
                const params = new URLSearchParams();
                if (campaign_id)
                    params.append('campaign_id', campaign_id);
                if (advertiser_id)
                    params.append('advertiser_id', advertiser_id);
                if (active !== undefined)
                    params.append('active', active.toString());
                params.append('rows', limit.toString());
                const response = await beeswax.get(`/rest/line_item?${params}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total: response.data.payload?.length || 0,
                                line_items: response.data.payload?.map((li) => ({
                                    line_item_id: li.line_item_id,
                                    line_item_name: li.line_item_name,
                                    campaign_id: li.campaign_id,
                                    bidding_strategy: li.bidding_strategy,
                                    bid_amount: li.bid_amount,
                                    budget: li.budget,
                                    active: li.active,
                                    spend: li.spend,
                                    impressions: li.impressions,
                                    clicks: li.clicks
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_create_line_item': {
                const beeswax = getBeeswaxClient();
                const { campaign_id, line_item_name, bidding_strategy = 'CPM', bid_amount, budget, targeting = {} } = args;
                const lineItemData = {
                    campaign_id,
                    line_item_name,
                    bidding_strategy,
                    bid_amount,
                    budget,
                    budget_type: 1, // LIFETIME
                    active: true,
                    ...targeting
                };
                const response = await beeswax.post('/rest/line_item', lineItemData);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: response.data.success,
                                line_item: {
                                    line_item_id: response.data.payload?.line_item_id,
                                    line_item_name: response.data.payload?.line_item_name,
                                    campaign_id: response.data.payload?.campaign_id,
                                    bidding_strategy: response.data.payload?.bidding_strategy,
                                    bid_amount: response.data.payload?.bid_amount,
                                    budget: response.data.payload?.budget
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_get_creatives': {
                const beeswax = getBeeswaxClient();
                const { advertiser_id, creative_name, active, limit = 50 } = args;
                const params = new URLSearchParams();
                if (advertiser_id)
                    params.append('advertiser_id', advertiser_id);
                if (creative_name)
                    params.append('creative_name', creative_name);
                if (active !== undefined)
                    params.append('active', active.toString());
                params.append('rows', limit.toString());
                const response = await beeswax.get(`/rest/creative?${params}`);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total: response.data.payload?.length || 0,
                                creatives: response.data.payload?.map((creative) => ({
                                    creative_id: creative.creative_id,
                                    creative_name: creative.creative_name,
                                    advertiser_id: creative.advertiser_id,
                                    creative_type: creative.creative_type,
                                    width: creative.width,
                                    height: creative.height,
                                    active: creative.active,
                                    click_url: creative.click_url,
                                    impressions: creative.impressions,
                                    clicks: creative.clicks
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_upload_creative': {
                const beeswax = getBeeswaxClient();
                const { advertiser_id, creative_name, creative_content, creative_type, width, height, click_url } = args;
                // First upload the creative asset
                const assetData = {
                    advertiser_id,
                    asset_name: creative_name,
                    asset_content: creative_content, // Base64 content
                    asset_type: creative_type
                };
                const assetResponse = await beeswax.post('/rest/creative_asset', assetData);
                if (!assetResponse.data.success) {
                    throw new Error('Failed to upload creative asset');
                }
                // Then create the creative
                const creativeData = {
                    advertiser_id,
                    creative_name,
                    creative_type,
                    width,
                    height,
                    click_url,
                    creative_asset_id: assetResponse.data.payload.creative_asset_id,
                    active: true
                };
                const response = await beeswax.post('/rest/creative', creativeData);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: response.data.success,
                                creative: {
                                    creative_id: response.data.payload?.creative_id,
                                    creative_name: response.data.payload?.creative_name,
                                    creative_type: response.data.payload?.creative_type,
                                    width: response.data.payload?.width,
                                    height: response.data.payload?.height,
                                    click_url: response.data.payload?.click_url,
                                    active: response.data.payload?.active
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'beeswax_get_reports': {
                const beeswax = getBeeswaxClient();
                const { report_type = 'campaign', start_date, end_date, advertiser_id, metrics = ['impressions', 'clicks', 'spend', 'conversions'] } = args;
                const reportData = {
                    report_type,
                    start_date,
                    end_date,
                    advertiser_id,
                    metrics: metrics.join(','),
                    dimensions: report_type,
                    format: 'json'
                };
                const response = await beeswax.post('/rest/report', reportData);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: response.data.success,
                                report_type,
                                date_range: `${start_date} to ${end_date}`,
                                total_rows: response.data.payload?.length || 0,
                                data: response.data.payload || [],
                                summary: {
                                    total_impressions: response.data.payload?.reduce((sum, row) => sum + (row.impressions || 0), 0),
                                    total_clicks: response.data.payload?.reduce((sum, row) => sum + (row.clicks || 0), 0),
                                    total_spend: response.data.payload?.reduce((sum, row) => sum + (row.spend || 0), 0),
                                    total_conversions: response.data.payload?.reduce((sum, row) => sum + (row.conversions || 0), 0)
                                }
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