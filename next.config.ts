// next.config.ts
import withPWA from "next-pwa";

const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
};

const nextConfig = {
  reactStrictMode: true,
  // other Next.js options here
};

export default withPWA(pwaConfig)(nextConfig);
