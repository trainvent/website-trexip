# Trexip

Trexip is a small Next.js landing page that presents a consent-based digital receipt network for bank-connected commerce.

## Local development

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.
3. Open `http://localhost:3000`.

## Production build

- Create a production build with `npm run build`.
- The project uses `output: "export"` in [next.config.mjs](/home/leonmarq/Code/website-trexip/next.config.mjs), so Next.js generates a static export.

## Styling

- Global styles live in [app/globals.css](/home/leonmarq/Code/website-trexip/app/globals.css).
- The UI uses Tailwind utilities alongside a few CSS custom properties for color and typography.

## Deployment note

If you deploy the site under a subpath instead of the domain root, set `basePath` in [next.config.mjs](/home/leonmarq/Code/website-trexip/next.config.mjs). If the site is deployed at the root, you can leave it unset.
