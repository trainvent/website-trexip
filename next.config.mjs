const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  // Leave this empty for root-domain deployments, including custom domains.
  // Set PAGES_BASE_PATH only when the site is intentionally published under a subpath.
  ...(basePath ? { basePath } : {}),

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`.
  // distDir: 'dist',
};

export default nextConfig;
