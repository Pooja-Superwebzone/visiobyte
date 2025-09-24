// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    // 1) Exclude .svg from the existing asset rule
    const assetRule = config.module.rules.find(
      (rule) => rule && rule.test && rule.test.test && rule.test.test('.svg')
    );
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

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
