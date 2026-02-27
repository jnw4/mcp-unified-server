"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vercelTools = void 0;
exports.handleVercelTool = handleVercelTool;
const axios_1 = __importDefault(require("axios"));
// Get Vercel client
function getVercelClient() {
    const token = process.env.VERCEL_TOKEN;
    if (!token) {
        throw new Error('VERCEL_TOKEN environment variable is required');
    }
    return axios_1.default.create({
        baseURL: 'https://api.vercel.com',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}
// Tool definitions
exports.vercelTools = [
    {
        name: 'vercel_list_projects',
        description: 'List all projects in your Vercel account',
        inputSchema: {
            type: 'object',
            properties: {
                team_id: { type: 'string', description: 'Team ID (optional, uses personal account if not provided)' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 20 }
            }
        }
    },
    {
        name: 'vercel_get_project',
        description: 'Get detailed information about a specific project',
        inputSchema: {
            type: 'object',
            properties: {
                project_id: { type: 'string', description: 'Project ID or name' },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['project_id']
        }
    },
    {
        name: 'vercel_list_deployments',
        description: 'List deployments for a project',
        inputSchema: {
            type: 'object',
            properties: {
                project_id: { type: 'string', description: 'Project ID or name' },
                team_id: { type: 'string', description: 'Team ID (optional)' },
                limit: { type: 'number', minimum: 1, maximum: 100, default: 20 },
                state: { type: 'string', enum: ['BUILDING', 'ERROR', 'INITIALIZING', 'QUEUED', 'READY', 'CANCELED'], description: 'Filter by deployment state' }
            },
            required: ['project_id']
        }
    },
    {
        name: 'vercel_get_deployment',
        description: 'Get detailed information about a specific deployment',
        inputSchema: {
            type: 'object',
            properties: {
                deployment_id: { type: 'string', description: 'Deployment ID or URL' },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['deployment_id']
        }
    },
    {
        name: 'vercel_create_deployment',
        description: 'Create a new deployment',
        inputSchema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Project name' },
                files: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            file: { type: 'string', description: 'File path' },
                            data: { type: 'string', description: 'File content (base64 encoded or plain text)' }
                        },
                        required: ['file', 'data']
                    },
                    description: 'Files to deploy'
                },
                projectSettings: {
                    type: 'object',
                    properties: {
                        framework: { type: 'string', description: 'Framework preset (e.g., nextjs, react)' },
                        buildCommand: { type: 'string', description: 'Custom build command' },
                        outputDirectory: { type: 'string', description: 'Output directory' },
                        installCommand: { type: 'string', description: 'Custom install command' }
                    }
                },
                env: {
                    type: 'object',
                    additionalProperties: { type: 'string' },
                    description: 'Environment variables'
                },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['name', 'files']
        }
    },
    {
        name: 'vercel_list_env_vars',
        description: 'List environment variables for a project',
        inputSchema: {
            type: 'object',
            properties: {
                project_id: { type: 'string', description: 'Project ID or name' },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['project_id']
        }
    },
    {
        name: 'vercel_create_env_var',
        description: 'Create or update an environment variable',
        inputSchema: {
            type: 'object',
            properties: {
                project_id: { type: 'string', description: 'Project ID or name' },
                key: { type: 'string', description: 'Environment variable name' },
                value: { type: 'string', description: 'Environment variable value' },
                target: {
                    type: 'array',
                    items: { type: 'string', enum: ['production', 'preview', 'development'] },
                    description: 'Deployment targets',
                    default: ['production', 'preview', 'development']
                },
                type: { type: 'string', enum: ['plain', 'secret'], description: 'Variable type', default: 'plain' },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['project_id', 'key', 'value']
        }
    },
    {
        name: 'vercel_delete_env_var',
        description: 'Delete an environment variable',
        inputSchema: {
            type: 'object',
            properties: {
                project_id: { type: 'string', description: 'Project ID or name' },
                env_var_id: { type: 'string', description: 'Environment variable ID' },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['project_id', 'env_var_id']
        }
    },
    {
        name: 'vercel_list_domains',
        description: 'List domains for a project',
        inputSchema: {
            type: 'object',
            properties: {
                project_id: { type: 'string', description: 'Project ID or name' },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['project_id']
        }
    },
    {
        name: 'vercel_add_domain',
        description: 'Add a domain to a project',
        inputSchema: {
            type: 'object',
            properties: {
                project_id: { type: 'string', description: 'Project ID or name' },
                name: { type: 'string', description: 'Domain name (e.g., example.com)' },
                redirect: { type: 'string', description: 'Redirect target domain (optional)' },
                team_id: { type: 'string', description: 'Team ID (optional)' }
            },
            required: ['project_id', 'name']
        }
    }
];
// Tool handler
async function handleVercelTool(name, args) {
    try {
        const client = getVercelClient();
        const teamId = args?.team_id || process.env.VERCEL_TEAM_ID;
        const teamParam = teamId ? { teamId } : {};
        switch (name) {
            case 'vercel_list_projects': {
                const { limit = 20 } = args;
                const response = await client.get('/v9/projects', {
                    params: { ...teamParam, limit }
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                total: response.data.pagination?.count || response.data.projects?.length,
                                projects: response.data.projects?.map((project) => ({
                                    id: project.id,
                                    name: project.name,
                                    description: project.description,
                                    framework: project.framework,
                                    url: `https://${project.name}.vercel.app`,
                                    createdAt: project.createdAt,
                                    updatedAt: project.updatedAt
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_get_project': {
                const { project_id } = args;
                const response = await client.get(`/v9/projects/${project_id}`, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                project: {
                                    id: response.data.id,
                                    name: response.data.name,
                                    description: response.data.description,
                                    framework: response.data.framework,
                                    buildCommand: response.data.buildCommand,
                                    outputDirectory: response.data.outputDirectory,
                                    installCommand: response.data.installCommand,
                                    url: `https://${response.data.name}.vercel.app`,
                                    git: response.data.link,
                                    createdAt: response.data.createdAt,
                                    updatedAt: response.data.updatedAt
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_list_deployments': {
                const { project_id, limit = 20, state } = args;
                const response = await client.get('/v6/deployments', {
                    params: {
                        ...teamParam,
                        projectId: project_id,
                        limit,
                        ...(state && { state })
                    }
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                project_id,
                                total: response.data.pagination?.count || response.data.deployments?.length,
                                deployments: response.data.deployments?.map((deployment) => ({
                                    uid: deployment.uid,
                                    url: deployment.url,
                                    state: deployment.state,
                                    type: deployment.type,
                                    target: deployment.target,
                                    createdAt: deployment.createdAt,
                                    buildingAt: deployment.buildingAt,
                                    readyAt: deployment.readyAt
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_get_deployment': {
                const { deployment_id } = args;
                const response = await client.get(`/v13/deployments/${deployment_id}`, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                deployment: {
                                    uid: response.data.uid,
                                    name: response.data.name,
                                    url: response.data.url,
                                    state: response.data.state,
                                    type: response.data.type,
                                    target: response.data.target,
                                    projectId: response.data.projectId,
                                    source: response.data.source,
                                    createdAt: response.data.createdAt,
                                    buildingAt: response.data.buildingAt,
                                    readyAt: response.data.readyAt
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_create_deployment': {
                const { name, files, projectSettings = {}, env = {} } = args;
                const deploymentData = {
                    name,
                    files,
                    projectSettings,
                    env,
                    target: 'production'
                };
                const response = await client.post('/v13/deployments', deploymentData, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                deployment: {
                                    uid: response.data.uid,
                                    name: response.data.name,
                                    url: response.data.url,
                                    state: response.data.state,
                                    inspectorUrl: response.data.inspectorUrl
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_list_env_vars': {
                const { project_id } = args;
                const response = await client.get(`/v9/projects/${project_id}/env`, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                project_id,
                                envs: response.data.envs?.map((env) => ({
                                    id: env.id,
                                    key: env.key,
                                    value: env.type === 'secret' ? '[ENCRYPTED]' : env.value,
                                    type: env.type,
                                    target: env.target,
                                    createdAt: env.createdAt,
                                    updatedAt: env.updatedAt
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_create_env_var': {
                const { project_id, key, value, target = ['production', 'preview', 'development'], type = 'plain' } = args;
                const response = await client.post(`/v10/projects/${project_id}/env`, {
                    key,
                    value,
                    target,
                    type
                }, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                env: {
                                    id: response.data.id,
                                    key: response.data.key,
                                    type: response.data.type,
                                    target: response.data.target,
                                    created: true
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_delete_env_var': {
                const { project_id, env_var_id } = args;
                await client.delete(`/v9/projects/${project_id}/env/${env_var_id}`, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                message: `Environment variable ${env_var_id} deleted successfully`
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_list_domains': {
                const { project_id } = args;
                const response = await client.get(`/v9/projects/${project_id}/domains`, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                project_id,
                                domains: response.data.domains?.map((domain) => ({
                                    name: domain.name,
                                    verified: domain.verified,
                                    verification: domain.verification,
                                    redirect: domain.redirect,
                                    createdAt: domain.createdAt,
                                    updatedAt: domain.updatedAt
                                })) || []
                            }, null, 2)
                        }]
                };
            }
            case 'vercel_add_domain': {
                const { project_id, name, redirect } = args;
                const response = await client.post(`/v10/projects/${project_id}/domains`, {
                    name,
                    ...(redirect && { redirect })
                }, {
                    params: teamParam
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                domain: {
                                    name: response.data.name,
                                    verified: response.data.verified,
                                    verification: response.data.verification,
                                    redirect: response.data.redirect
                                }
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown Vercel tool: ${name}` }],
                    isError: true
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `Vercel tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true
        };
    }
}
//# sourceMappingURL=index.js.map