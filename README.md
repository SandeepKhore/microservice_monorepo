## Microservice Monorepo

This repository is a **NestJS monorepo** containing a small microservice ecosystem:

- **Gateway** (`apps/gateway`) – HTTP API gateway that exposes REST endpoints and talks to backend services via gRPC.
- **Auth Service** (`apps/auth-service`) – Authentication and authorization logic (e.g. login, token handling) exposed via gRPC.
- **User Service** (`apps/user-service`) – User domain logic and persistence exposed via gRPC.
- **Proto Library** (`libs/proto`) – Shared `.proto` files for gRPC contracts.

Built artifacts are emitted into the `dist/` directory by Nest/TypeScript.

---

## Prerequisites

- **Node.js**: v18+ recommended
- **npm**: v9+ recommended
- A running **MongoDB** instance (for the services that use Mongoose)

---

## Installation

From the repository root:

```bash
npm install
```

This installs dependencies for the monorepo and all workspaces under `apps/*` and `libs/*`.

---

## Running the services

From the repository root you can use the provided npm scripts:

- **Gateway only**

  ```bash
  npm run start:gateway
  ```

- **Auth service only**

  ```bash
  npm run start:auth
  ```

- **User service only**

  ```bash
  npm run start:user
  ```

- **All services in parallel**

  ```bash
  npm run start:all
  ```

By default, these use the Nest CLI (`nest start <project>`) with configuration from `nest-cli.json`.

---

## Building

To build all applications in the monorepo:

```bash
npm run build
```

The compiled JavaScript will be placed under `dist/apps/*`.

---

## Project structure

- **`apps/gateway`**: Nest application acting as HTTP gateway
  - `src/main.ts` – bootstrap for the gateway app
  - `src/app.module.ts` / `src/gateway.module.ts` – main modules and wiring
  - `src/controllers` – REST controllers (`auth.controller.ts`, `user.controller.ts`)
  - `src/services` – gRPC client services (`auth-grpc.client.ts`, `user-grpc.client.ts`)

- **`apps/auth-service`**: Nest microservice for authentication
  - `src/main.ts` – microservice bootstrap (likely gRPC)
  - `src/app.module.ts` – module wiring
  - `src/controllers/auth.grpc.controller.ts` – gRPC controller
  - `src/services/auth.service.ts` – auth domain logic
  - `src/schemas/user.schema.ts` – Mongoose schema(s)

- **`apps/user-service`**: Nest microservice for user management
  - `src/main.ts` – microservice bootstrap (likely gRPC)
  - `src/app.module.ts` – module wiring
  - `src/controllers/user.grpc.controller.ts` – gRPC controller
  - `src/services/user.service.ts` – user domain logic
  - `src/schemas/user.schema.ts` – Mongoose schema(s)

- **`libs/proto`**: Shared protocol buffer definitions
  - `auth.proto` – gRPC definitions for auth
  - `user.proto` – gRPC definitions for user

---

## Development tips

- Use the Nest CLI locally for generating modules, controllers, and services:

  ```bash
  npx nest generate <schematic> <name> --project <gateway|auth-service|user-service>
  ```

- When updating `.proto` contracts in `libs/proto`, make sure corresponding client and server implementations are updated in all affected services.

---

## License

Specify your project license here (e.g. MIT) if applicable.


