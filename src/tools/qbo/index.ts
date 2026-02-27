import { Tool } from '@modelcontextprotocol/sdk/types.js';
// @ts-ignore - no types for intuit-oauth
import OAuthClient from 'intuit-oauth';

// QBO OAuth client
let oauthClient: OAuthClient | null = null;
let accessToken: string | null = null;
let refreshToken: string | null = null;
let realmId: string | null = null;

function getOAuthClient(): OAuthClient {
  if (!oauthClient) {
    oauthClient = new OAuthClient({
      clientId: process.env.QBO_CLIENT_ID!,
      clientSecret: process.env.QBO_CLIENT_SECRET!,
      environment: 'production', // or 'sandbox'
      redirectUri: process.env.QBO_REDIRECT_URI!,
    });
  }
  return oauthClient;
}

// Tool definitions
export const qboTools: Tool[] = [
  {
    name: 'qbo_get_auth_url',
    description: 'Get the OAuth authorization URL to connect to QuickBooks. User must visit this URL to authorize.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  {
    name: 'qbo_set_tokens',
    description: 'Set OAuth tokens after user authorizes. Provide the authorization code from the callback URL.',
    inputSchema: {
      type: 'object',
      properties: {
        auth_code: { type: 'string', description: 'Authorization code from OAuth callback' },
        realm_id: { type: 'string', description: 'Company ID (realmId) from callback URL' },
      },
      required: ['auth_code', 'realm_id'],
    },
  },
  {
    name: 'qbo_set_access_token',
    description: 'Set access token directly (from OAuth playground response). Use when you already have the token.',
    inputSchema: {
      type: 'object',
      properties: {
        access_token: { type: 'string', description: 'Access token from OAuth response' },
        realm_id: { type: 'string', description: 'Company ID (realmId)' },
        refresh_token: { type: 'string', description: 'Refresh token (optional, for token refresh)' },
      },
      required: ['access_token', 'realm_id'],
    },
  },
  {
    name: 'qbo_query',
    description: 'Run a QuickBooks query. Uses QBO query language (similar to SQL). Examples: "SELECT * FROM Invoice", "SELECT * FROM Customer WHERE DisplayName LIKE \'%Acme%\'"',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'QBO query string' },
      },
      required: ['query'],
    },
  },
  {
    name: 'qbo_get_invoices',
    description: 'Get invoices with optional filters',
    inputSchema: {
      type: 'object',
      properties: {
        status: { type: 'string', enum: ['open', 'paid', 'overdue', 'all'], description: 'Filter by status' },
        customer: { type: 'string', description: 'Filter by customer name' },
        limit: { type: 'number', description: 'Max results (default 100)' },
      },
      required: [],
    },
  },
  {
    name: 'qbo_get_customers',
    description: 'Get customer list',
    inputSchema: {
      type: 'object',
      properties: {
        search: { type: 'string', description: 'Search by name' },
        limit: { type: 'number', description: 'Max results (default 100)' },
      },
      required: [],
    },
  },
  {
    name: 'qbo_get_pnl',
    description: 'Get Profit & Loss report',
    inputSchema: {
      type: 'object',
      properties: {
        start_date: { type: 'string', description: 'Start date (YYYY-MM-DD)' },
        end_date: { type: 'string', description: 'End date (YYYY-MM-DD)' },
      },
      required: [],
    },
  },
  {
    name: 'qbo_get_balance_sheet',
    description: 'Get Balance Sheet report',
    inputSchema: {
      type: 'object',
      properties: {
        as_of_date: { type: 'string', description: 'As of date (YYYY-MM-DD)' },
      },
      required: [],
    },
  },
  {
    name: 'qbo_get_accounts',
    description: 'Get chart of accounts',
    inputSchema: {
      type: 'object',
      properties: {
        account_type: { type: 'string', description: 'Filter by account type (e.g., Expense, Income, Bank)' },
      },
      required: [],
    },
  },
  {
    name: 'qbo_get_purchases',
    description: 'Get purchase/expense transactions. Returns transactions with their line items and current category (account) assignments.',
    inputSchema: {
      type: 'object',
      properties: {
        start_date: { type: 'string', description: 'Filter from date (YYYY-MM-DD)' },
        end_date: { type: 'string', description: 'Filter to date (YYYY-MM-DD)' },
        payment_type: { type: 'string', enum: ['Cash', 'Check', 'CreditCard'], description: 'Filter by payment type' },
        vendor: { type: 'string', description: 'Filter by vendor name' },
        limit: { type: 'number', description: 'Max results (default 100)' },
      },
      required: [],
    },
  },
  {
    name: 'qbo_update_purchase_category',
    description: 'Update the category (expense account) and/or class on a purchase/expense transaction. Fetches current state, updates the account and class on specified line items, and saves.',
    inputSchema: {
      type: 'object',
      properties: {
        purchase_id: { type: 'string', description: 'The Purchase transaction ID' },
        line_updates: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              line_num: { type: 'number', description: 'Line number to update (1-based). If omitted, updates all lines.' },
              account_id: { type: 'string', description: 'New account (category) ID from chart of accounts' },
              account_name: { type: 'string', description: 'New account name (for reference in response)' },
              class_id: { type: 'string', description: 'New class ID' },
              class_name: { type: 'string', description: 'New class name (for reference in response)' },
            },
            required: ['account_id'],
          },
          description: 'Line items to update with new category/class. If a single entry without line_num, updates all account-based lines.',
        },
      },
      required: ['purchase_id', 'line_updates'],
    },
  },
  {
    name: 'qbo_create_invoice',
    description: 'Create a new invoice',
    inputSchema: {
      type: 'object',
      properties: {
        customer_id: { type: 'string', description: 'Customer ID' },
        line_items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              description: { type: 'string' },
              amount: { type: 'number' },
              quantity: { type: 'number' },
            },
          },
          description: 'Line items for the invoice',
        },
        due_date: { type: 'string', description: 'Due date (YYYY-MM-DD)' },
      },
      required: ['customer_id', 'line_items'],
    },
  },
];

// API helper
async function qboApiCall(endpoint: string, method: string = 'GET', body?: any): Promise<any> {
  if (!accessToken || !realmId) {
    throw new Error('Not authenticated. Use qbo_get_auth_url and qbo_set_tokens first.');
  }

  const baseUrl = 'https://quickbooks.api.intuit.com/v3/company';
  const url = `${baseUrl}/${realmId}/${endpoint}`;

  const response = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`QBO API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Tool handler
export async function handleQboTool(name: string, args: any): Promise<any> {
  switch (name) {
    case 'qbo_get_auth_url': {
      const client = getOAuthClient();
      const authUri = client.authorizeUri({
        scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
        state: 'mcp-unified-server',
      });
      return {
        content: [{
          type: 'text',
          text: `Visit this URL to authorize QuickBooks:\n\n${authUri}\n\nAfter authorizing, you'll be redirected to a URL with 'code' and 'realmId' parameters. Use qbo_set_tokens with those values.`,
        }],
      };
    }

    case 'qbo_set_tokens': {
      const client = getOAuthClient();
      const authResponse = await client.createToken(
        `${process.env.QBO_REDIRECT_URI}?code=${args.auth_code}&realmId=${args.realm_id}`
      );
      accessToken = authResponse.token.access_token;
      refreshToken = authResponse.token.refresh_token;
      realmId = args.realm_id;
      return {
        content: [{ type: 'text', text: 'Successfully authenticated with QuickBooks!' }],
      };
    }

    case 'qbo_set_access_token': {
      accessToken = args.access_token;
      realmId = args.realm_id;
      if (args.refresh_token) {
        refreshToken = args.refresh_token;
      }
      return {
        content: [{ type: 'text', text: 'Successfully set QuickBooks access token!' }],
      };
    }

    case 'qbo_query': {
      const result = await qboApiCall(`query?query=${encodeURIComponent(args.query)}`);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      };
    }

    case 'qbo_get_invoices': {
      let query = 'SELECT * FROM Invoice';
      const conditions: string[] = [];

      if (args.status === 'open') {
        conditions.push("Balance > '0'");
      } else if (args.status === 'paid') {
        conditions.push("Balance = '0'");
      }

      if (args.customer) {
        conditions.push(`CustomerRef LIKE '%${args.customer}%'`);
      }

      if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
      }

      query += ` MAXRESULTS ${args.limit || 100}`;

      const result = await qboApiCall(`query?query=${encodeURIComponent(query)}`);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      };
    }

    case 'qbo_get_customers': {
      let query = 'SELECT * FROM Customer';
      if (args.search) {
        query += ` WHERE DisplayName LIKE '%${args.search}%'`;
      }
      query += ` MAXRESULTS ${args.limit || 100}`;

      const result = await qboApiCall(`query?query=${encodeURIComponent(query)}`);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      };
    }

    case 'qbo_get_pnl': {
      let endpoint = 'reports/ProfitAndLoss';
      const params: string[] = [];
      if (args.start_date) params.push(`start_date=${args.start_date}`);
      if (args.end_date) params.push(`end_date=${args.end_date}`);
      if (params.length > 0) endpoint += '?' + params.join('&');

      const result = await qboApiCall(endpoint);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      };
    }

    case 'qbo_get_balance_sheet': {
      let endpoint = 'reports/BalanceSheet';
      if (args.as_of_date) {
        endpoint += `?as_of_date=${args.as_of_date}`;
      }

      const result = await qboApiCall(endpoint);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      };
    }

    case 'qbo_get_accounts': {
      let query = 'SELECT * FROM Account';
      if (args.account_type) {
        query += ` WHERE AccountType = '${args.account_type}'`;
      }

      const result = await qboApiCall(`query?query=${encodeURIComponent(query)}`);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      };
    }

    case 'qbo_get_purchases': {
      let query = 'SELECT * FROM Purchase';
      const conditions: string[] = [];

      if (args.start_date) {
        conditions.push(`TxnDate >= '${args.start_date}'`);
      }
      if (args.end_date) {
        conditions.push(`TxnDate <= '${args.end_date}'`);
      }
      if (args.payment_type) {
        conditions.push(`PaymentType = '${args.payment_type}'`);
      }

      if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
      }

      query += ` MAXRESULTS ${args.limit || 100}`;

      const result = await qboApiCall(`query?query=${encodeURIComponent(query)}`);

      // If vendor filter provided, filter client-side (QBO doesn't support LIKE on EntityRef)
      let purchases = result.QueryResponse?.Purchase || [];
      if (args.vendor) {
        const vendorLower = args.vendor.toLowerCase();
        purchases = purchases.filter((p: any) =>
          p.EntityRef?.name?.toLowerCase().includes(vendorLower)
        );
      }

      // Summarize for readability
      const summary = purchases.map((p: any) => ({
        Id: p.Id,
        TxnDate: p.TxnDate,
        TotalAmt: p.TotalAmt,
        PaymentType: p.PaymentType,
        Vendor: p.EntityRef?.name || 'N/A',
        AccountRef: p.AccountRef?.name || 'N/A',
        Lines: p.Line?.filter((l: any) => l.DetailType === 'AccountBasedExpenseLineDetail').map((l: any) => ({
          LineNum: l.LineNum,
          Amount: l.Amount,
          Description: l.Description || '',
          Category: l.AccountBasedExpenseLineDetail?.AccountRef?.name || 'Uncategorized',
          AccountId: l.AccountBasedExpenseLineDetail?.AccountRef?.value || null,
        })) || [],
      }));

      return {
        content: [{ type: 'text', text: JSON.stringify(summary, null, 2) }],
      };
    }

    case 'qbo_update_purchase_category': {
      // Fetch current purchase to get SyncToken and full entity
      const current = await qboApiCall(`purchase/${args.purchase_id}`);
      const purchase = current.Purchase;

      if (!purchase) {
        throw new Error(`Purchase ${args.purchase_id} not found`);
      }

      // Update line items with new categories and classes
      for (const update of args.line_updates) {
        const newAccountRef = {
          value: update.account_id,
          ...(update.account_name ? { name: update.account_name } : {}),
        };
        const newClassRef = update.class_id ? {
          value: update.class_id,
          ...(update.class_name ? { name: update.class_name } : {}),
        } : undefined;

        if (update.line_num) {
          // Update specific line
          const line = purchase.Line?.find((l: any) => l.LineNum === update.line_num);
          if (!line) {
            throw new Error(`Line number ${update.line_num} not found on purchase ${args.purchase_id}`);
          }
          if (line.DetailType === 'AccountBasedExpenseLineDetail') {
            line.AccountBasedExpenseLineDetail.AccountRef = newAccountRef;
            if (newClassRef) {
              line.AccountBasedExpenseLineDetail.ClassRef = newClassRef;
            }
          } else {
            throw new Error(`Line ${update.line_num} is not an account-based expense line (type: ${line.DetailType})`);
          }
        } else {
          // Update all account-based lines
          for (const line of purchase.Line || []) {
            if (line.DetailType === 'AccountBasedExpenseLineDetail') {
              line.AccountBasedExpenseLineDetail.AccountRef = newAccountRef;
              if (newClassRef) {
                line.AccountBasedExpenseLineDetail.ClassRef = newClassRef;
              }
            }
          }
        }
      }

      // Sparse update — include required fields
      const updatePayload = {
        Id: purchase.Id,
        SyncToken: purchase.SyncToken,
        sparse: true,
        Line: purchase.Line,
      };

      const result = await qboApiCall('purchase', 'POST', updatePayload);

      const updated = result.Purchase;
      const updatedLines = updated.Line?.filter((l: any) => l.DetailType === 'AccountBasedExpenseLineDetail').map((l: any) => ({
        LineNum: l.LineNum,
        Amount: l.Amount,
        Description: l.Description || '',
        Category: l.AccountBasedExpenseLineDetail?.AccountRef?.name || 'Uncategorized',
        AccountId: l.AccountBasedExpenseLineDetail?.AccountRef?.value || null,
        Class: l.AccountBasedExpenseLineDetail?.ClassRef?.name || null,
        ClassId: l.AccountBasedExpenseLineDetail?.ClassRef?.value || null,
      })) || [];

      return {
        content: [{
          type: 'text',
          text: `Updated purchase ${updated.Id} (${updated.TxnDate}, $${updated.TotalAmt}).\n\nUpdated lines:\n${JSON.stringify(updatedLines, null, 2)}`,
        }],
      };
    }

    case 'qbo_create_invoice': {
      const invoice = {
        CustomerRef: { value: args.customer_id },
        Line: args.line_items.map((item: any, idx: number) => ({
          LineNum: idx + 1,
          Amount: item.amount * (item.quantity || 1),
          DetailType: 'SalesItemLineDetail',
          Description: item.description,
          SalesItemLineDetail: {
            Qty: item.quantity || 1,
            UnitPrice: item.amount,
          },
        })),
        DueDate: args.due_date,
      };

      const result = await qboApiCall('invoice', 'POST', invoice);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      };
    }

    default:
      return {
        content: [{ type: 'text', text: `Unknown QBO tool: ${name}` }],
        isError: true,
      };
  }
}