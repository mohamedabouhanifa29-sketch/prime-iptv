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

The current order modal validates and sanitizes user input, then presents a completion state without transmitting or storing personal data. Before accepting real orders, connect it to a server-side route with server validation, CSRF protection, rate limiting, and a payment/WhatsApp provider. Keep provider credentials in `.env.local` and read them only from server-side modules. Never prefix secrets with `NEXT_PUBLIC_`.

Security headers are configured in `next.config.ts`. The CSP currently allows development requirements; for production, use nonce-based scripts if your deployment architecture supports them and remove `unsafe-eval` after confirming the production runtime does not require it.

The legal pages are editable starter structures, not legal advice. Complete them with verified business, jurisdiction, payment, and retention details before launch.
