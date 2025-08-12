// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // allow modern formats automatically
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    // Enable: import Logo from '@/components/assets/logo.svg'
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { icon: true },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
