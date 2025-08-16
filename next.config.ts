/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  // Static export configuration for GitHub Pages deployment
  output: "export",

  // Disable image optimization for static export compatibility
  images: {
    unoptimized: true,
  },

  // Note: Turbopack is enabled automatically in Next.js 15 with --turbo flag

  // Base path configuration for GitHub Pages (only in production)
  ...(isProd &&
    isGitHubPages && {
      basePath: "/biblical-transcript-app",
      assetPrefix: "/biblical-transcript-app/",
    }),

  // Trailing slash for static export
  trailingSlash: true,

  // Disable server-side features for static export
  distDir: "out",
};

module.exports = nextConfig;
