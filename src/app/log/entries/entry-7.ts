import { LogEntry } from "../types";

export const entry7: LogEntry = {
  date: "2026-02-16",
  title: "Private Markets API",
  content:
    "Added a backend API project for managing private market funds, investors, and investments. Built with Express 5, TypeScript (ESM), and PostgreSQL 16, fully containerised with Docker Compose. Key design decisions include dual-layer validation (application + database constraints), PostgreSQL domains for enumerated types, centralised error handling with PostgreSQL error code mapping, and integration tests running against a real database via Supertest and Vitest.",
  tags: ["Express 5", "TypeScript", "PostgreSQL", "Docker", "REST API"],
};
