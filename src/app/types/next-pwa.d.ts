declare module "next-pwa";

import withPWA from "next-pwa";

const nextConfig = {
  // your config here
};

export default withPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
});
