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
};
 
export default withContentCollections(nextConfig);