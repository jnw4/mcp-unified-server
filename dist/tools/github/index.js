"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubTools = void 0;
exports.handleGitHubTool = handleGitHubTool;
const rest_1 = require("@octokit/rest");
// Get GitHub client
function getGitHubClient() {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        throw new Error('GITHUB_TOKEN environment variable is required');
    }
    return new rest_1.Octokit({
        auth: token
    });
}
// Tool definitions
exports.githubTools = [
    {
        name: 'github_list_repos',
        description: 'List repositories for authenticated user or organization',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner (defaults to authenticated user)' },
                type: { type: 'string', enum: ['all', 'public', 'private', 'forks', 'sources', 'member'], default: 'all' },
                sort: { type: 'string', enum: ['created', 'updated', 'pushed', 'full_name'], default: 'updated' },
                per_page: { type: 'number', minimum: 1, maximum: 100, default: 30 }
            }
        }
    },
    {
        name: 'github_create_repo',
        description: 'Create a new repository',
        inputSchema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Repository name' },
                description: { type: 'string', description: 'Repository description' },
                private: { type: 'boolean', description: 'Create private repository', default: false },
                auto_init: { type: 'boolean', description: 'Initialize with README', default: true },
                gitignore_template: { type: 'string', description: 'Gitignore template (e.g., Node, Python)' },
                license_template: { type: 'string', description: 'License template (e.g., mit, apache-2.0)' }
            },
            required: ['name']
        }
    },
    {
        name: 'github_get_repo',
        description: 'Get repository information',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' }
            },
            required: ['owner', 'repo']
        }
    },
    {
        name: 'github_list_issues',
        description: 'List issues for a repository',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' },
                state: { type: 'string', enum: ['open', 'closed', 'all'], default: 'open' },
                labels: { type: 'string', description: 'Comma-separated list of label names' },
                assignee: { type: 'string', description: 'Filter by assignee username' },
                per_page: { type: 'number', minimum: 1, maximum: 100, default: 30 }
            },
            required: ['owner', 'repo']
        }
    },
    {
        name: 'github_create_issue',
        description: 'Create a new issue',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' },
                title: { type: 'string', description: 'Issue title' },
                body: { type: 'string', description: 'Issue body/description' },
                assignees: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Usernames to assign to issue'
                },
                labels: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Labels to add to issue'
                }
            },
            required: ['owner', 'repo', 'title']
        }
    },
    {
        name: 'github_list_pulls',
        description: 'List pull requests for a repository',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' },
                state: { type: 'string', enum: ['open', 'closed', 'all'], default: 'open' },
                base: { type: 'string', description: 'Filter by base branch' },
                head: { type: 'string', description: 'Filter by head branch' },
                per_page: { type: 'number', minimum: 1, maximum: 100, default: 30 }
            },
            required: ['owner', 'repo']
        }
    },
    {
        name: 'github_create_pull',
        description: 'Create a new pull request',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' },
                title: { type: 'string', description: 'Pull request title' },
                body: { type: 'string', description: 'Pull request body/description' },
                head: { type: 'string', description: 'Head branch (source)' },
                base: { type: 'string', description: 'Base branch (target)', default: 'main' },
                draft: { type: 'boolean', description: 'Create as draft PR', default: false }
            },
            required: ['owner', 'repo', 'title', 'head']
        }
    },
    {
        name: 'github_merge_pull',
        description: 'Merge a pull request',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' },
                pull_number: { type: 'number', description: 'Pull request number' },
                commit_title: { type: 'string', description: 'Custom merge commit title' },
                commit_message: { type: 'string', description: 'Custom merge commit message' },
                merge_method: { type: 'string', enum: ['merge', 'squash', 'rebase'], default: 'merge' }
            },
            required: ['owner', 'repo', 'pull_number']
        }
    },
    {
        name: 'github_list_workflows',
        description: 'List GitHub Actions workflows',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' },
                per_page: { type: 'number', minimum: 1, maximum: 100, default: 30 }
            },
            required: ['owner', 'repo']
        }
    },
    {
        name: 'github_trigger_workflow',
        description: 'Trigger a GitHub Actions workflow',
        inputSchema: {
            type: 'object',
            properties: {
                owner: { type: 'string', description: 'Repository owner' },
                repo: { type: 'string', description: 'Repository name' },
                workflow_id: { type: 'string', description: 'Workflow ID or filename' },
                ref: { type: 'string', description: 'Git reference (branch/tag)', default: 'main' },
                inputs: {
                    type: 'object',
                    description: 'Workflow input parameters',
                    additionalProperties: { type: 'string' }
                }
            },
            required: ['owner', 'repo', 'workflow_id']
        }
    }
];
// Tool handler
async function handleGitHubTool(name, args) {
    try {
        const octokit = getGitHubClient();
        const defaultOwner = process.env.GITHUB_OWNER;
        switch (name) {
            case 'github_list_repos': {
                const { owner, type = 'all', sort = 'updated', per_page = 30 } = args;
                const response = owner
                    ? await octokit.rest.repos.listForUser({ username: owner, type, sort, per_page })
                    : await octokit.rest.repos.listForAuthenticatedUser({ type, sort, per_page });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                owner: owner || 'authenticated user',
                                total_count: response.data.length,
                                repositories: response.data.map(repo => ({
                                    name: repo.name,
                                    full_name: repo.full_name,
                                    description: repo.description,
                                    private: repo.private,
                                    url: repo.html_url,
                                    stars: repo.stargazers_count,
                                    forks: repo.forks_count,
                                    language: repo.language,
                                    updated_at: repo.updated_at
                                }))
                            }, null, 2)
                        }]
                };
            }
            case 'github_create_repo': {
                const { name, description, private: isPrivate = false, auto_init = true, gitignore_template, license_template } = args;
                const response = await octokit.rest.repos.createForAuthenticatedUser({
                    name,
                    description,
                    private: isPrivate,
                    auto_init,
                    gitignore_template,
                    license_template
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                repository: {
                                    name: response.data.name,
                                    full_name: response.data.full_name,
                                    description: response.data.description,
                                    private: response.data.private,
                                    url: response.data.html_url,
                                    clone_url: response.data.clone_url,
                                    ssh_url: response.data.ssh_url
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'github_get_repo': {
                const { owner, repo } = args;
                const response = await octokit.rest.repos.get({ owner, repo });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                repository: {
                                    name: response.data.name,
                                    full_name: response.data.full_name,
                                    description: response.data.description,
                                    private: response.data.private,
                                    url: response.data.html_url,
                                    stars: response.data.stargazers_count,
                                    forks: response.data.forks_count,
                                    language: response.data.language,
                                    size: response.data.size,
                                    default_branch: response.data.default_branch,
                                    created_at: response.data.created_at,
                                    updated_at: response.data.updated_at
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'github_list_issues': {
                const { owner, repo, state = 'open', labels, assignee, per_page = 30 } = args;
                const response = await octokit.rest.issues.listForRepo({
                    owner,
                    repo,
                    state,
                    labels,
                    assignee,
                    per_page
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                repository: `${owner}/${repo}`,
                                total_count: response.data.length,
                                issues: response.data.map(issue => ({
                                    number: issue.number,
                                    title: issue.title,
                                    body: issue.body?.substring(0, 200) + (issue.body && issue.body.length > 200 ? '...' : ''),
                                    state: issue.state,
                                    user: issue.user?.login,
                                    assignees: issue.assignees?.map(a => a.login),
                                    labels: issue.labels.map(l => typeof l === 'string' ? l : l.name),
                                    url: issue.html_url,
                                    created_at: issue.created_at,
                                    updated_at: issue.updated_at
                                }))
                            }, null, 2)
                        }]
                };
            }
            case 'github_create_issue': {
                const { owner, repo, title, body, assignees, labels } = args;
                const response = await octokit.rest.issues.create({
                    owner,
                    repo,
                    title,
                    body,
                    assignees,
                    labels
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                issue: {
                                    number: response.data.number,
                                    title: response.data.title,
                                    body: response.data.body,
                                    state: response.data.state,
                                    url: response.data.html_url,
                                    assignees: response.data.assignees?.map(a => a.login),
                                    labels: response.data.labels.map(l => typeof l === 'string' ? l : l.name)
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'github_list_pulls': {
                const { owner, repo, state = 'open', base, head, per_page = 30 } = args;
                const response = await octokit.rest.pulls.list({
                    owner,
                    repo,
                    state,
                    base,
                    head,
                    per_page
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                repository: `${owner}/${repo}`,
                                total_count: response.data.length,
                                pull_requests: response.data.map(pr => ({
                                    number: pr.number,
                                    title: pr.title,
                                    body: pr.body?.substring(0, 200) + (pr.body && pr.body.length > 200 ? '...' : ''),
                                    state: pr.state,
                                    user: pr.user?.login,
                                    head: pr.head.ref,
                                    base: pr.base.ref,
                                    url: pr.html_url,
                                    draft: pr.draft,
                                    mergeable: pr.mergeable,
                                    created_at: pr.created_at,
                                    updated_at: pr.updated_at
                                }))
                            }, null, 2)
                        }]
                };
            }
            case 'github_create_pull': {
                const { owner, repo, title, body, head, base = 'main', draft = false } = args;
                const response = await octokit.rest.pulls.create({
                    owner,
                    repo,
                    title,
                    body,
                    head,
                    base,
                    draft
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                pull_request: {
                                    number: response.data.number,
                                    title: response.data.title,
                                    body: response.data.body,
                                    state: response.data.state,
                                    head: response.data.head.ref,
                                    base: response.data.base.ref,
                                    url: response.data.html_url,
                                    draft: response.data.draft
                                }
                            }, null, 2)
                        }]
                };
            }
            case 'github_merge_pull': {
                const { owner, repo, pull_number, commit_title, commit_message, merge_method = 'merge' } = args;
                const response = await octokit.rest.pulls.merge({
                    owner,
                    repo,
                    pull_number,
                    commit_title,
                    commit_message,
                    merge_method
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                merged: response.data.merged,
                                sha: response.data.sha,
                                message: response.data.message
                            }, null, 2)
                        }]
                };
            }
            case 'github_list_workflows': {
                const { owner, repo, per_page = 30 } = args;
                const response = await octokit.rest.actions.listRepoWorkflows({
                    owner,
                    repo,
                    per_page
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                repository: `${owner}/${repo}`,
                                total_count: response.data.total_count,
                                workflows: response.data.workflows.map(workflow => ({
                                    id: workflow.id,
                                    name: workflow.name,
                                    path: workflow.path,
                                    state: workflow.state,
                                    url: workflow.html_url,
                                    created_at: workflow.created_at,
                                    updated_at: workflow.updated_at
                                }))
                            }, null, 2)
                        }]
                };
            }
            case 'github_trigger_workflow': {
                const { owner, repo, workflow_id, ref = 'main', inputs = {} } = args;
                await octokit.rest.actions.createWorkflowDispatch({
                    owner,
                    repo,
                    workflow_id,
                    ref,
                    inputs
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                message: `Workflow ${workflow_id} triggered successfully on ${ref}`,
                                workflow_id,
                                ref,
                                inputs
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown GitHub tool: ${name}` }],
                    isError: true
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `GitHub tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true
        };
    }
}
//# sourceMappingURL=index.js.map