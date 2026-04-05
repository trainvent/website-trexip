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

The repo includes a GitHub Pages workflow at [.github/workflows/deploy-pages.yml](/home/leonmarq/Code/website-trexip/.github/workflows/deploy-pages.yml) that builds the static export from the `master` branch and deploys the contents of `out/`.

The GitHub Pages workflow reads the deployment base path from `actions/configure-pages` and passes it to the build as `PAGES_BASE_PATH`. That lets the same repo build correctly for either a repository Pages URL such as `/website-trexip` or a root-domain/custom-domain deployment.

For root-domain deployments, including custom domains, leave `PAGES_BASE_PATH` empty so exported assets resolve from paths like `/_next/...`.

If you intentionally publish the site under a subpath outside GitHub Actions, set `PAGES_BASE_PATH` when building so [next.config.mjs](/home/leonmarq/Code/website-trexip/next.config.mjs) can apply that base path.
