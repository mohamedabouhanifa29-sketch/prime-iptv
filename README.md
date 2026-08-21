# PRIME IPTV

A production-oriented, responsive commercial website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, React Hook Form, and Zod.

## 1. Install Node.js

Install the current Node.js LTS release from [nodejs.org](https://nodejs.org). Confirm the installation with `node --version` and `npm --version`. Node.js 20.9 or newer is recommended.

## 2. Install dependencies

From this project folder, run:

```bash
npm install
```

## 3. Start development

```bash
npm run dev
```

Open `http://localhost:3000`.

## 4. Change prices

Edit `lib/pricing.ts`. Each plan contains its displayed name, duration, price, and optional badge/featured state.

## 5. Configure WhatsApp

Edit `whatsapp` in `lib/config.ts` using the international number without spaces, such as `212600000000`. An empty value safely displays “WhatsApp soon”.

## 6. Configure email

Edit `email` in `lib/config.ts`. An empty value safely displays “Email soon”.

## 7. Modify the logo

Edit the reusable wordmark in `components/Logo.tsx`. Replace `public/icon.svg` for the browser icon. Keep accessible text in the logo link.

## 8. Add a domain

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the final HTTPS origin, with no trailing slash. Configure the same domain with your hosting provider and redeploy so canonical, sitemap, and robots URLs are regenerated.

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 9. Production build

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## 10. Deploy

For Vercel, import the Git repository, configure `NEXT_PUBLIC_SITE_URL`, and deploy with the detected Next.js defaults. Other Node.js hosts can run `npm install`, `npm run build`, and `npm start`. Use HTTPS in production.

## Order and security notes

Order and trial forms validate and normalize input locally, then prepare an encoded message for the fixed WhatsApp destination configured in `lib/config.ts`. The site does not store these forms and currently has no API routes or Server Actions. WhatsApp opens only after a valid user submission.

Security headers are configured in `next.config.ts`. Production removes `unsafe-eval`, enables HSTS, blocks framing and object/embed content, restricts browser permissions, and permits no remote image hosts. The static Next.js CSP retains `unsafe-inline` for framework bootstrap scripts and inline animation styles. A nonce-based strict CSP would require dynamic rendering and a per-request Proxy; evaluate that tradeoff if the site later handles accounts, payments, or other sensitive server-side operations.

All `.env*` files are ignored except `.env.example`. Keep secrets in an ignored environment file or the deployment platform's secret store, read them only from server-only modules, and never prefix secrets with `NEXT_PUBLIC_`. `NEXT_PUBLIC_SITE_URL` is intentionally public because it is used for canonical and sitemap URLs.

If an API route, payment callback, authenticated action, or database is added later, implement server-side schema validation, authorization, origin/CSRF checks where applicable, rate limiting, request-size limits, safe logging, and provider webhook signature verification before deployment. Client-side throttling is not a security control.
