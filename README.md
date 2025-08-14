# TypeScript Monorepo Starter

A modern, production-ready TypeScript monorepo template featuring NestJS, Next.js, Prisma, PostgreSQL, Biome, and Bun. This project demonstrates best practices for building scalable applications with clear service boundaries and type safety.

## 🏗️ Architecture Overview

This monorepo follows a **service-oriented architecture** with clear boundaries between different layers:

```
packages/
├── api/          # Shared API types and service definitions
├── backend/      # NestJS server application
├── database/     # Prisma schema and database client
└── frontend/     # Next.js client application
```

## 🚀 Technologies

### **Backend Stack**
- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework for building efficient, scalable server-side applications
  - Built-in dependency injection and modular architecture
  - Decorator-based routing and middleware
  - Built-in validation and transformation pipes
  - Comprehensive testing utilities

### **Frontend Stack**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
  - Server-side rendering and static generation
  - Built-in API routes
  - Optimized performance and SEO

### **Database & ORM**
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM for Node.js and TypeScript
  - Type-safe database queries
  - Auto-generated TypeScript types
  - Database migrations and seeding
  - Support for multiple databases (PostgreSQL, MySQL, SQLite)
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced open-source relational database

### **Development Tools**
- **[Biome](https://biomejs.dev/)** - Fast formatter, linter, and more
  - Replaces ESLint + Prettier with a single, fast tool
  - Zero configuration by default
  - Written in Rust for performance
- **[Bun](https://bun.sh/)** - All-in-one JavaScript runtime and toolkit
  - Fast package manager and bundler
  - Built-in test runner
  - Compatible with Node.js APIs

### **Monorepo Management**
- **[Turbo](https://turbo.build/)** - High-performance build system for JavaScript and TypeScript codebases
  - Incremental builds and caching
  - Parallel task execution
  - Intelligent dependency graph management

## 🎯 Service Boundaries & Type Safety

### **Shared API Layer (`packages/api`)**
The `api` package serves as the **contract layer** between frontend and backend:

```typescript
// packages/api/genericTypes/service.ts
export interface Service<TRequest, TResponse> {
  execute(request: TRequest): Promise<TResponse>;
}

// packages/api/services/health.ts
export interface HealthCheckRequest {
  timestamp: string;
}

export interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
}
```

### **Self-Contained TypeScript Services**
Each service is defined with:
- **Input/Output contracts** - Clear request/response interfaces
- **Generic service interface** - Reusable service pattern
- **Type-safe error handling** - Consistent error types across the system

### **Database Layer (`packages/database`)**
- **Prisma Client** - Generated TypeScript client for database operations
- **Schema-first approach** - Database schema defines the data model
- **Migration management** - Version-controlled database changes

### **Backend Services (`packages/backend`)**
- **NestJS modules** - Organized by business domain
- **Service implementations** - Business logic with dependency injection
- **Controller layer** - HTTP endpoints with validation
- **Middleware** - Cross-cutting concerns (logging, error handling)

### **Frontend Integration (`packages/frontend`)**
- **Service callers** - Type-safe API communication
- **React hooks** - Custom hooks for service integration
- **Error handling** - Consistent error display and user feedback

## 🛠️ Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- [Docker](https://www.docker.com/) and Docker Compose
- [PostgreSQL](https://www.postgresql.org/) (or use Docker)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd typescript-monorepo-starter
   ./scripts/bootstrap.sh
   bun install
   ```

2. **Set up environment variables:**
Edit the .env file to include the right values.

```
POSTGRES_PASSWORD="your choice password"
PUBLIC_URL="automatically filled"
PGADMIN_DEFAULT_EMAIL="your choice email"
PGADMIN_DEFAULT_PASSWORD="your choice password"
DATABASE_HOST_URL=postgresql://postgres:${POSTGRES_PASSWORD}$@localhost:5432/${database-name-here}$?schema=public
DIRECT_URL=postgresql://postgres:${POSTGRES_PASSWORD}$@localhost:5432/${database-name-here}$?schema=public
NODE_ENV=development
```

4. **Run database migrations:**
```bash
cd packages/database
bun run db:migrate
```

## 📁 Project Structure

```
typescript-monorepo-starter/
├── packages/
│   ├── api/                    # Shared types and service contracts
│   │   ├── genericTypes/      # Base interfaces and types
│   │   └── services/          # Service definitions
│   ├── backend/               # NestJS server application
│   │   ├── src/
│   │   │   ├── configuration/ # App configuration
│   │   │   ├── database/      # Database integration
│   │   │   ├── health/        # Health check endpoints
│   │   │   └── library/       # Shared utilities
│   │   └── Dockerfile         # Container configuration
│   ├── database/              # Database schema and client
│   │   └── prisma/           # Prisma schema and migrations
│   └── frontend/             # Next.js client application
│       ├── src/
│       │   ├── app/          # Next.js App Router
│       │   ├── lib/          # Utility functions
│       │   └── services/     # API integration
│       └── jest.config.mjs   # Testing configuration
├── scripts/                   # Build and deployment scripts
├── biome.json                # Biome configuration
├── turbo.json                # Turbo build configuration
└── docker-compose.yml        # Development environment
```

## 🔧 Development Workflow

### **Code Quality**
- **Biome** handles formatting and linting automatically
- **TypeScript** provides compile-time type checking

### **Testing**
- **Jest** for unit and integration tests
- **Testing utilities** for mocking and assertions
- **Coverage reporting** for test quality metrics

### **Building & Deployment**
- **Turbo** manages build dependencies and caching
- **Docker** containers for consistent deployment
- **Environment-specific** configurations

## 🚀 Deployment

### **Development**
```bash
# Run in development mode -> will run migrations and turn on everything required
bun run dev
```

## 📚 Key Concepts

### **Service-Oriented Architecture**
- **Clear boundaries** between different system layers
- **Contract-first** API design
- **Loose coupling** between services
- **Type safety** across the entire stack

### **Monorepo Benefits**
- **Shared code** and types
- **Consistent tooling** across packages
- **Atomic commits** across related changes
- **Simplified dependency management**

### **Type Safety**
- **End-to-end type safety** from database to UI
- **Auto-generated types** from Prisma schema
- **Shared interfaces** between frontend and backend

---

Built with ❤️ using modern TypeScript tooling and best practices.
