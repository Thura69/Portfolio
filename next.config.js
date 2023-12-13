/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add file-loader for PDFs
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static',
            publicPath: '/_next/static',
            name: '[name].[ext]',
          },
        },
      ],
    });

    // For server-side rendering of PDFs
    if (isServer) {
      const fileLoaderRule = config.module.rules.find((rule) => rule.oneOf);
      if (fileLoaderRule) {
        const fileLoader = fileLoaderRule.oneOf.find(
          (rule) => rule.loader && rule.loader.indexOf('/file-loader/') !== -1
        );
        if (fileLoader) {
          fileLoader.loader = 'file-loader';
          fileLoader.options = {
            outputPath: 'static',
            publicPath: '/_next/static',
            name: '[name].[ext]',
          };
        }
      }
    }

    return config;
  },
}

module.exports = nextConfig
