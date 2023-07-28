// @ts-check

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withSvgr = require('next-svgr');
const path = require('path');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  eslint: {
    dirs: ['src']
  },
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
    formats: ['image/avif', 'image/webp']
  },
  transpilePackages: ['react-tweet']
};

module.exports = () => {
  const plugins = [withBundleAnalyzer, withContentlayer, withSvgr];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
