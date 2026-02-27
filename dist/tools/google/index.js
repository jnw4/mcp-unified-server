"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleTools = void 0;
exports.handleGoogleTool = handleGoogleTool;
const googleapis_1 = require("googleapis");
const google_auth_library_1 = require("google-auth-library");
// Scopes
const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive';
const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const DOCS_SCOPE = 'https://www.googleapis.com/auth/documents';
// Get auth using write credentials or fallback to default
const getWriteAuth = (scopes) => {
    const email = process.env.GOOGLE_WRITE_CLIENT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL;
    const key = process.env.GOOGLE_WRITE_PRIVATE_KEY || process.env.GOOGLE_PRIVATE_KEY;
    if (!email || !key) {
        throw new Error('Google write environment variables missing');
    }
    return new google_auth_library_1.JWT({
        email,
        key: key.replace(/\\n/g, '\n'),
        scopes,
    });
};
// Tool definitions (adding to existing Google Slides tools)
exports.googleTools = [
    {
        name: 'google_create_sheet',
        description: 'Create a new Google Sheet with data',
        inputSchema: {
            type: 'object',
            properties: {
                title: { type: 'string', description: 'Sheet title' },
                data: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: { type: 'string' },
                    },
                    description: 'Data as array of rows (each row is array of cell values)',
                },
                folderId: { type: 'string', description: 'Optional Google Drive folder ID' },
                sharePublic: { type: 'boolean', description: 'Make publicly viewable (default: false)' },
            },
            required: ['title', 'data'],
        },
    },
    {
        name: 'google_create_doc',
        description: 'Create a new Google Doc with formatted content',
        inputSchema: {
            type: 'object',
            properties: {
                title: { type: 'string', description: 'Document title' },
                content: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            text: { type: 'string', description: 'Text content' },
                            style: {
                                type: 'string',
                                enum: ['TITLE', 'HEADING_1', 'HEADING_2', 'HEADING_3', 'NORMAL_TEXT'],
                                description: 'Text style',
                                default: 'NORMAL_TEXT',
                            },
                        },
                        required: ['text'],
                    },
                    description: 'Content as array of text segments with styles',
                },
                folderId: { type: 'string', description: 'Optional Google Drive folder ID' },
                sharePublic: { type: 'boolean', description: 'Make publicly viewable (default: false)' },
            },
            required: ['title', 'content'],
        },
    },
    {
        name: 'google_read_sheet',
        description: 'Read data from a Google Sheet',
        inputSchema: {
            type: 'object',
            properties: {
                spreadsheetId: { type: 'string', description: 'Google Sheet ID (from URL)' },
                range: { type: 'string', description: 'Range to read (e.g., "Sheet1!A1:C10")', default: 'Sheet1' },
            },
            required: ['spreadsheetId'],
        },
    },
    {
        name: 'google_update_sheet',
        description: 'Update data in a Google Sheet',
        inputSchema: {
            type: 'object',
            properties: {
                spreadsheetId: { type: 'string', description: 'Google Sheet ID (from URL)' },
                range: { type: 'string', description: 'Range to update (e.g., "Sheet1!A1")' },
                data: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: { type: 'string' },
                    },
                    description: 'Data as array of rows',
                },
            },
            required: ['spreadsheetId', 'range', 'data'],
        },
    },
];
// Helper to share file publicly
const sharePublicly = async (drive, fileId) => {
    await drive.permissions.create({
        fileId,
        supportsAllDrives: true,
        requestBody: {
            role: 'reader',
            type: 'anyone',
        },
    });
};
// Tool handler
async function handleGoogleTool(name, args) {
    try {
        switch (name) {
            case 'google_create_sheet': {
                const { title, data, folderId, sharePublic = false } = args;
                const auth = getWriteAuth([SHEETS_SCOPE, DRIVE_SCOPE]);
                const sheets = googleapis_1.google.sheets({ auth, version: 'v4' });
                const drive = googleapis_1.google.drive({ auth, version: 'v3' });
                // Create spreadsheet
                const createParams = {
                    supportsAllDrives: true,
                    requestBody: {
                        name: title,
                        mimeType: 'application/vnd.google-apps.spreadsheet',
                    },
                };
                if (folderId) {
                    createParams.requestBody.parents = [folderId];
                }
                const { data: file } = await drive.files.create(createParams);
                const spreadsheetId = file?.id;
                if (!spreadsheetId)
                    throw new Error('Failed to create spreadsheet');
                // Add data if provided
                if (data && data.length > 0) {
                    await sheets.spreadsheets.values.update({
                        spreadsheetId,
                        range: 'Sheet1!A1',
                        valueInputOption: 'RAW',
                        requestBody: { values: data },
                    });
                }
                // Share publicly if requested
                if (sharePublic) {
                    await sharePublicly(drive, spreadsheetId);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                spreadsheetId,
                                title,
                                url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
                                rowsAdded: data?.length || 0,
                                public: sharePublic,
                            }, null, 2)
                        }]
                };
            }
            case 'google_create_doc': {
                const { title, content, folderId, sharePublic = false } = args;
                const auth = getWriteAuth([DOCS_SCOPE, DRIVE_SCOPE]);
                const docs = googleapis_1.google.docs({ auth, version: 'v1' });
                const drive = googleapis_1.google.drive({ auth, version: 'v3' });
                // Create document
                const createParams = {
                    supportsAllDrives: true,
                    requestBody: {
                        name: title,
                        mimeType: 'application/vnd.google-apps.document',
                    },
                };
                if (folderId) {
                    createParams.requestBody.parents = [folderId];
                }
                const { data: file } = await drive.files.create(createParams);
                const documentId = file?.id;
                if (!documentId)
                    throw new Error('Failed to create document');
                // Add content if provided
                if (content && content.length > 0) {
                    const requests = [];
                    let cursor = 1; // Docs start with implicit \n at index 0
                    for (const segment of content) {
                        const text = segment.text + '\n';
                        const style = segment.style || 'NORMAL_TEXT';
                        requests.push({
                            insertText: {
                                location: { index: cursor },
                                text,
                            },
                        });
                        requests.push({
                            updateParagraphStyle: {
                                range: {
                                    startIndex: cursor,
                                    endIndex: cursor + text.length,
                                },
                                paragraphStyle: { namedStyleType: style },
                                fields: 'namedStyleType',
                            },
                        });
                        cursor += text.length;
                    }
                    if (requests.length > 0) {
                        await docs.documents.batchUpdate({
                            documentId,
                            requestBody: { requests },
                        });
                    }
                }
                // Share publicly if requested
                if (sharePublic) {
                    await sharePublicly(drive, documentId);
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                documentId,
                                title,
                                url: `https://docs.google.com/document/d/${documentId}`,
                                segmentsAdded: content?.length || 0,
                                public: sharePublic,
                            }, null, 2)
                        }]
                };
            }
            case 'google_read_sheet': {
                const { spreadsheetId, range = 'Sheet1' } = args;
                const auth = getWriteAuth([SHEETS_SCOPE]);
                const sheets = googleapis_1.google.sheets({ auth, version: 'v4' });
                const response = await sheets.spreadsheets.values.get({
                    spreadsheetId,
                    range,
                });
                const values = response.data.values || [];
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                spreadsheetId,
                                range,
                                rowCount: values.length,
                                columnCount: values[0]?.length || 0,
                                data: values,
                            }, null, 2)
                        }]
                };
            }
            case 'google_update_sheet': {
                const { spreadsheetId, range, data } = args;
                const auth = getWriteAuth([SHEETS_SCOPE]);
                const sheets = googleapis_1.google.sheets({ auth, version: 'v4' });
                await sheets.spreadsheets.values.update({
                    spreadsheetId,
                    range,
                    valueInputOption: 'RAW',
                    requestBody: { values: data },
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                spreadsheetId,
                                range,
                                rowsUpdated: data.length,
                                url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown Google tool: ${name}` }],
                    isError: true,
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `Google tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true,
        };
    }
}
//# sourceMappingURL=index.js.map