FROM imbios/bun-node:latest-23.11.0-slim AS builder

WORKDIR /app

COPY . .

RUN bunx turbo prune @tsm-backend/backend
RUN cp -r packages/games out/packages/games && cp -r packages/api out/packages/api && cp .env out/packages/backend/

WORKDIR /app/out

RUN apt-get update -y && apt-get install -y openssl

RUN bun install

ENV NODE_ENV=production
RUN bun run turbo run build --filter=@tsm-backend/backend && bun install --production

FROM imbios/bun-node:latest-23.11.0-slim AS runner

COPY --from=builder /app/out /app/out

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app/out/packages/backend

RUN bun install

ENV NODE_ENV=production

EXPOSE 8080

CMD ["/bin/bash", "-c", "bun serve"]