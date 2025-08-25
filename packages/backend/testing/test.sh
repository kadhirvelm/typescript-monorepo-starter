#!/bin/bash

export DATABASE_HOST_URL="postgresql://postgres:test-database@localhost:5432/test?schema=public";
export DIRECT_URL="postgresql://postgres:test-database@localhost:5432/test?schema=public";

cd ../database;

bunx prisma migrate reset --force;

echo -e "\n\nRunning tests...\n\n"

cd ../backend

bun test $1;
