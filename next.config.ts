import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //     // hmrRefreshes: true,
  //   },
  // },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'reqres.in' }],
  },
};

export default nextConfig;
