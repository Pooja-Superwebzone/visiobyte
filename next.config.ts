// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    // 1) Exclude .svg from the existing asset rule
    const assetRule = config.module.rules.find(
      // Next’s rule usually tests many image types including .svg
      // @ts-ignore - the type is not super strict here
      (rule) => rule?.test?.test?.('.svg')
    );
    if (assetRule) {
      // @ts-ignore
      assetRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, 
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
