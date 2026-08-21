# Security and production notes

## Current architecture

The site is a statically rendered Next.js application. It has no API routes, Server Actions, authentication, database, payment processing, file uploads, or server-side form submission. Order and trial forms validate input in the browser and prepare an encoded message for the configured WhatsApp destination. The local FAQ chatbot does not transmit or persist messages.

Because there are no state-changing server endpoints, CSRF protection and server-side rate limiting are not currently applicable. The short client-side button lock only improves UX and must not be treated as anti-abuse protection.

## Environment variables

- All `.env*` files are ignored except `.env.example`.
- `NEXT_PUBLIC_SITE_URL` is public by design and must contain the final HTTPS origin at build time.
- Never prefix a secret with `NEXT_PUBLIC_`.
- Store future provider credentials in the deployment platform's secret store or an ignored environment file, and access them only from server-only modules.

## Content Security Policy

Production disables `unsafe-eval`. The static build retains `unsafe-inline` for Next.js bootstrap scripts and inline animation styles. Moving to a nonce-based strict CSP requires per-request dynamic rendering through a Next.js Proxy and changes the caching/performance model.

## Before adding server features

Any future API route, Server Action, payment callback, authenticated feature, or database write must add, as applicable:

- server-side schema validation and output encoding;
- authentication and object-level authorization;
- CSRF or strict Origin validation for cookie-authenticated mutations;
- rate limiting and request-size limits at a trusted server or edge layer;
- secure, redacted logging without credentials or personal message contents;
- payment/webhook signature verification and replay protection;
- a documented retention and deletion policy;
- secrets restricted to server-only modules.

## Deployment checklist

- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin.
- Confirm the host preserves the response headers configured in `next.config.ts`.
- Add HSTS `includeSubDomains` or preload only after confirming every current and future subdomain is HTTPS-only.
- Do not enable remote image hosts without an explicit allowlist.
- Run `npm audit`, `npm run lint`, `npm run typecheck`, and `npm run build` for each release.
- Re-run a browser security-header scan against the deployed HTTPS origin.
