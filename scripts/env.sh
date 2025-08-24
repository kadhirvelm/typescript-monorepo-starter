#!/bin/bash

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Starting Docker..."
    
    # Start Docker based on OS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open -a Docker
    else
        echo "Unsupported OS for automatic Docker startup"
        exit 1
    fi

    # Wait for Docker to be ready
    echo "Waiting for Docker to start..."
    while ! docker info > /dev/null 2>&1; do
        sleep 1
    done

    echo "Docker is now running"
fi

export $(cat .env | grep -v '^#' | xargs)

if ! grep -q "^NODE_ENV=development" .env; then
  echo "Error: NODE_ENV=development not found in .env file. Please create a .env file with the right content and try again."
  exit 1
fi

if [ "$1" = "reset" ]; then
  echo -e "\033[33mResetting Docker environment...\033[0m"
  docker-compose -p application -f docker-compose.yml down -v --remove-orphans
  echo -e "\033[33mEnvironment reset complete.\033[0m"
  exit 0
fi

if [ "$1" = "local" ]; then
  ip_address="localhost"
  echo -e "\033[33mUsing localhost\033[0m"
else
  # Get the local IP address, preferring non-loopback IPv4 addresses
  ip_address=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1 | grep -Eo '([0-9]*\.){3}[0-9]*')
  echo -e "\033[33mUsing IP address: $ip_address\033[0m"
fi

sed -i.bak "s|^PUBLIC_URL=.*|PUBLIC_URL=$ip_address|" .env
echo -e "\033[33mUpdated PUBLIC_URL in .env file\033[0m"

# Turning everything on!

# Function to turn on services
turn_on_services() {
    docker-compose -p application -f docker-compose.yml up -d
    rm .env.bak
    # Run migrations
    cd packages/database && bun run db:migrate && cd ../..
    # Run turbo in foreground - don't background this process
    turbo run dev --ui=tui
}

# Function to check if the frontend is available
check_frontend() {
    curl -s "http://$ip_address:3000" > /dev/null
    return $?
}

# Function to open the frontend in the browser
open_frontend() {
    # Wait until frontend is available, checking every 2 seconds
    while ! check_frontend; do
        sleep 2
    done

    echo -e "\033[33mFrontend is ready. Opening in browser...\033[0m"

    # Open browser based on OS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open "http://$ip_address:3000"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        xdg-open "http://$ip_address:3000"
    else
        echo "Unsupported OS for automatic browser opening"
    fi
}

# Run only the browser opening in background, services in foreground
open_frontend &
turn_on_services



