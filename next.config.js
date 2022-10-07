/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTM = require('next-transpile-modules')(['react-icons']); // pass the modules you would like to see transpiled

module.exports = withTM({});

module.exports = {
  images: {
    domains: ['images.ctfassets.net','downloads.ctfassets.net','dl.airtable.com'],
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: { images: { layoutRaw: true } },
  reactStrictMode: true,
  swcMinify:true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
}
