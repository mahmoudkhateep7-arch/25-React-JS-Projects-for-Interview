import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'unsplash.com' },
      { protocol: 'https', hostname: 'cdn.dummyjson.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'annerabbitte.ie' },
      { protocol: 'http', hostname: 'forkify-api.herokuapp.com' },
      { protocol: 'https', hostname: 'forkify-api.herokuapp.com' },





    ]


  }
};

export default nextConfig;
