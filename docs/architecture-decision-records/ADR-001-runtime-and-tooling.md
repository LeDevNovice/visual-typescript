# 001 – runtime-and-tooling

Date: 2025-05-29

## Context
Visual TypeScript needs a stable JavaScript runtime that will still be supported
when we reach version 1.0.  
The stack must be **reproducible** (CI, potential contributors) and common enough to avoid
on-boarding friction.

## Decision
We will use:

| Item | Version | Managed with |
|------|---------|--------------|
| **Node.js** | **22.x LTS** (end of life April 2027) | pinned via Volta |
| **Package manager** | **pnpm 10** | pinned via Volta |
| **Volta** | latest stable | locks Node & pnpm per project |

Files created:

* `package.json` – a `"volta"` section containing `node` and `pnpm` versions.  
* `.npmrc` – options  
  `strict-peer-deps=true`, `verify-store-integrity=true`, `shared-workspace-lockfile=true`.

## Alternatives considered
* **Node 20 LTS** — EOL April 2026 (12 months shorter)  
* **Bun v1** — impressive performance, but React/D3 ecosystem still settling  
* **Deno** — incomplete Node compatibility, many libraries missing

## Consequences
### Positive
* Long maintenance window (~ 24 months)  
* Perfect reproducibility with Volta; no `nvm use` required  
* pnpm 10 brings speed + workspace if necessary

### Negative
* Contributors must install Volta (or use nvm 22)  
* Possible native-module incompatibilities with Node 18-20 (mitigated by using only stable Web APIs)

### Follow-ups
* Monitor Node 24 LTS (Oct 2026) and evaluate migration  
* Add a CI matrix job “Node 22 | Node latest” to spot future breaking changes
