# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lombard (package name "ransom") — a Russian-language Next.js 14 web application for a multi-category buyback service (equipment, cars, instruments, phones, real estate). All UI text is in Russian (`lang="ru"`).

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server on port 8090
npm run lint      # ESLint (next/core-web-vitals config)
```

No test framework is configured.

## Architecture

### Routing & Pages

Next.js App Router with 5 category routes + root (redirects to equipment content):
- `/` (root) — renders `Equipment` component (the main landing page)
- `/equipment`, `/cars`, `/instruments`, `/phones`, `/realty`

Each route page is a server component that reads config and generates metadata, then renders a client component from `src/components/pages/`.

### Configuration System

All page content is centralized in `config/config.json` — titles, descriptions, form fields, FAQ entries, "how we work" steps, and buyback item lists. The config is read at the server level via `getConfig()` (`src/utils/config/getConfig.ts`), then injected into the Redux store via `StoreProvider`.

The `IConfig` interface (`src/utils/config/IConfig.ts`) defines the shape: `{ app: IAppConfig, texts: ITextsConfig }`.

### State Management

Redux Toolkit with two slices:
- `app` — runtime app config (contact phone)
- `texts` — all page content from config.json

`StoreProvider` (client component) creates the store per-request and hydrates both slices from the server-loaded config.

Types: `AppStore`, `TRootState`, `TAppDispatch` exported from `src/store/store.ts`.

### API & Messaging

Contact form submits to `/api/order/send` (Pages Router API route at `src/pages/api/order/send.ts`), which sends notifications via:
- **Telegram Bot API** — `src/components/messaging/telegram.tsx`
- **Nodemailer SMTP** — `src/components/messaging/email.tsx`

Server-only env vars are validated in `src/utils/config/serverConfig.ts` (uses `server-only` package). Required env vars: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`.

### Reusable Controls (`src/components/controls/`)

- `ContactForm` — dynamic form built from config field definitions, uses react-hook-form + react-imask for phone masking
- `FAQ` — accordion rendering HTML content (sanitized via `sanitizeHtml()` from `src/utils/sanitize.ts`)
- `HowToDo` — numbered step list
- `WishList` — bullet list of items
- `TermsOfSale` — terms display

### Layout

`RootLayout` (server component) loads config, wraps children in `MuiProvider` → `StoreProvider` → `Container` with `Header` and `Footer`. The `Menu` component provides category navigation with active-state highlighting.

### Path Aliases (tsconfig.json)

- `@/*` → `./src/*`
- `@assets/*` → `./src/assets/*`
- `@components/*` → `./src/components/*`
- `@utils/*` → `./src/utils/*`

## Key Conventions

- Pages follow a pattern: server component loads config + generates metadata, client component reads state from Redux via `useAppSelector`
- Each category page component maps config data to the same set of controls (ContactForm, HowToDo, WishList, FAQ)
- Content changes go to `config/config.json`, not code
- `robots.ts` blocks indexing on `dev.*` subdomains
- Custom `server.js` exists for IIS deployment (`web.config` present)
