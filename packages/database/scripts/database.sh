#!/bin/bash

cd ../../

export $(cat .env | grep -v '^#' | xargs);

cd packages/database;

bun $1;
