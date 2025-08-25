#!/bin/bash

export $(cat .env | grep -v '^#' | xargs);

if [ "$1" != "frontend" ]; then
    cd packages/database;

    export DATABASE_HOST_URL="postgresql://postgres:test-database@localhost:5432/test?schema=public";
    export DIRECT_URL="postgresql://postgres:test-database@localhost:5432/test?schema=public";

    bunx prisma migrate dev;
    bunx prisma migrate reset --force;

    cd ../../
fi

echo -e "\n\nRunning tests...\n\n"

if [ "$1" = "backend" ]; then
  cd packages/backend
  bun test $2;
elif [ "$1" = "frontend" ]; then
  cd packages/frontend
  bun test $2;
else
  cd packages/backend
  bun test $1;

  cd ../frontend
  bun test $1;
fi
