#!/bin/bash

curl -fsSL https://bun.com/install | bash
nvm install 23.11.0
nvm use 23.11.0
nvm alias default 23.11.0

echo "@@@ Using node version: $(node -v) @@@"

corepack enable
brew install oven-sh/bun/bun

echo "@@@ All set @@@"
