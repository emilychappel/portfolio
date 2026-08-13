/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local SVG placeholders are used for all imagery so the site renders
    // fully offline. Swap /public/images/*.svg for real photos later —
    // once you use raster files (jpg/png) you can remove dangerouslyAllowSVG.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
