import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
import "@/env";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/posts",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/a/ek8hyk1349/*",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3001",
  },
};

export default withContentCollections(nextConfig);
