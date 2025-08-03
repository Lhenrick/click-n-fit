declare module "next-pwa" {
  import { NextConfig } from "next";

  type PWAOptions = {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    buildExcludes?: string[];
    [key: string]: any;
  };

  export default function withPWA(
    pwaOptions: PWAOptions
  ): (nextConfig: NextConfig) => NextConfig;
}
