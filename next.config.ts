import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
 
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
      return [
        {
          source: "/posts",
          destination: "/blog",
          permanent: true
        }
      ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/a/ek8hyk1349/*'
      }
    ]
  }
};
 
export default withContentCollections(nextConfig);