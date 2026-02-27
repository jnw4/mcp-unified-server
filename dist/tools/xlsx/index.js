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
exports.xlsxTools = void 0;
exports.handleXlsxTool = handleXlsxTool;
const XLSX = __importStar(require("xlsx"));
// Tool definitions
exports.xlsxTools = [
    {
        name: 'xlsx_read_file',
        description: 'Read data from an Excel file (XLSX/XLS)',
        inputSchema: {
            type: 'object',
            properties: {
                content: { type: 'string', description: 'Excel file content as base64 string' },
                sheetName: { type: 'string', description: 'Specific sheet name to read (default: first sheet)' },
                range: { type: 'string', description: 'Cell range to read (e.g., "A1:C10")' },
                header: { type: 'number', description: 'Row number for headers (0-based, default: 0)' },
                raw: { type: 'boolean', description: 'Return raw cell values without formatting (default: false)' },
            },
            required: ['content'],
        },
    },
    {
        name: 'xlsx_create_file',
        description: 'Create an Excel file from data',
        inputSchema: {
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: {},
                    },
                    description: 'Data as array of rows (each row is array of cell values)',
                },
                sheetName: { type: 'string', description: 'Sheet name (default: "Sheet1")' },
                headers: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Optional column headers',
                },
            },
            required: ['data'],
        },
    },
    {
        name: 'xlsx_convert_csv',
        description: 'Convert CSV content to Excel format',
        inputSchema: {
            type: 'object',
            properties: {
                csvContent: { type: 'string', description: 'CSV content as string' },
                sheetName: { type: 'string', description: 'Sheet name (default: "Sheet1")' },
                delimiter: { type: 'string', description: 'CSV delimiter (default: ",")' },
            },
            required: ['csvContent'],
        },
    },
];
// Tool handler
async function handleXlsxTool(name, args) {
    try {
        switch (name) {
            case 'xlsx_read_file': {
                const { content, sheetName, range, header = 0, raw = false } = args;
                // Decode base64 content
                const buffer = Buffer.from(content, 'base64');
                // Read workbook
                const workbook = XLSX.read(buffer, { type: 'buffer' });
                // Get sheet
                const sheet = sheetName
                    ? workbook.Sheets[sheetName]
                    : workbook.Sheets[workbook.SheetNames[0]];
                if (!sheet) {
                    throw new Error(`Sheet "${sheetName || workbook.SheetNames[0]}" not found`);
                }
                // Convert to JSON
                const options = {
                    header: header,
                    raw: raw,
                };
                if (range) {
                    options.range = range;
                }
                const data = XLSX.utils.sheet_to_json(sheet, options);
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                sheetName: sheetName || workbook.SheetNames[0],
                                availableSheets: workbook.SheetNames,
                                rowCount: data.length,
                                columnCount: sheet['!ref'] ? XLSX.utils.decode_range(sheet['!ref']).e.c + 1 : 0,
                                data: data,
                                range: range || 'all',
                            }, null, 2)
                        }]
                };
            }
            case 'xlsx_create_file': {
                const { data, sheetName = 'Sheet1', headers } = args;
                // Prepare data with headers if provided
                const worksheetData = headers ? [headers, ...data] : data;
                // Create worksheet
                const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
                // Create workbook
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
                // Generate Excel buffer
                const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                sheetName,
                                rowCount: worksheetData.length,
                                columnCount: worksheetData[0]?.length || 0,
                                hasHeaders: !!headers,
                                size: buffer.length,
                                content: buffer.toString('base64'),
                                isBase64: true,
                            }, null, 2)
                        }]
                };
            }
            case 'xlsx_convert_csv': {
                const { csvContent, sheetName = 'Sheet1', delimiter = ',' } = args;
                // Parse CSV manually (simple implementation)
                const lines = csvContent.trim().split('\n');
                const data = lines.map((line) => {
                    // Simple CSV parsing - doesn't handle quoted fields with commas
                    return line.split(delimiter).map((cell) => cell.trim());
                });
                // Create worksheet
                const worksheet = XLSX.utils.aoa_to_sheet(data);
                // Create workbook
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
                // Generate Excel buffer
                const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                sheetName,
                                rowCount: data.length,
                                columnCount: data[0]?.length || 0,
                                originalFormat: 'CSV',
                                size: buffer.length,
                                content: buffer.toString('base64'),
                                isBase64: true,
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown XLSX tool: ${name}` }],
                    isError: true,
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `XLSX tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true,
        };
    }
}
//# sourceMappingURL=index.js.map