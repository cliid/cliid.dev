// @ts-nocheck

const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withPWA = require('next-pwa');
const { withContentlayer } = require('next-contentlayer');
const incstr = require('incstr');

const classNames = {};

const generateClassName = incstr.idGenerator({
  alphabet: 'abcdefghijklmnopqrstuvwxyz'
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com giscus.app;
  child-src 'self' *.youtube.com *.google.com *.twitter.com giscus.app;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' fonts.gstatic.com;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts', 'hooks', 'constants']
  },
  swcMinify: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
      's3-alpha.figma.com',
      'octodex.github.com',
      'upload.wikimedia.org'
    ],
    formats: ['image/avif', 'image/webp']
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    if (!dev) {
      const CompressionPlugin = require('compression-webpack-plugin');
      const BrotliPlugin = require('brotli-webpack-plugin');

      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|svg)$/,
          minRatio: 0.8
        })
      );

      config.plugins.push(
        new BrotliPlugin({
          filename: '[path][base].br',
          test: /\.(js|css|svg)$/,
          threshold: 10240,
          minRatio: 0.7
        })
      );

      const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');
      config.plugins.push(
        new MangleCssClassPlugin({
          classNameRegExp:
            '(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\[|\\]))*)*',
          classGenerator: (original, opts, context) => {
            if (classNames[original]) {
              return classNames[original];
            }

            let nextId;

            do {
              // Class name cannot start with a number.
              nextId = generateClassName();
            } while (/^[0-9_-]/.test(nextId));

            return (classNames[original] = nextId);
          }
        })
      );
    }

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/',
        headers: securityHeaders
      },
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://cliid.notion.site/cliid/Resume-66f1b9343226457a8b11be5e9062407c',
        permanent: true
      }
    ];
  }
};

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: process.env.NODE_ENV === 'development'
        }
      }
    ],
    [withContentlayer]
  ],
  nextConfig
);
