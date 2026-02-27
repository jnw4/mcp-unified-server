#!/bin/sh
set -e

# Validate required environment variables
validate_env() {
    local required_vars="MCP_AUTH_SECRET SNOWFLAKE_ACCOUNT SNOWFLAKE_USER"
    local missing_vars=""

    for var in $required_vars; do
        if [ -z "$(eval echo \$$var)" ]; then
            missing_vars="$missing_vars $var"
        fi
    done

    if [ -n "$missing_vars" ]; then
        echo "ERROR: Missing required environment variables:$missing_vars"
        echo "Please check your environment configuration."
        exit 1
    fi
}

# Graceful shutdown handler
shutdown() {
    echo "Received shutdown signal, gracefully stopping..."
    kill -TERM "$child" 2>/dev/null || true
    wait "$child" 2>/dev/null || true
    echo "Server stopped."
    exit 0
}

# Set up signal handlers
trap shutdown TERM INT

# Validate environment
validate_env

echo "Starting MCP Unified HTTP Server..."
echo "Port: ${MCP_PORT:-3000}"
echo "Environment: ${NODE_ENV:-development}"

# Start the application in background
exec "$@" &
child=$!

# Wait for the child process
wait "$child"