const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/labirinto-robo-html';
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isDev ? undefined : basePath,
  assetPrefix: isDev ? undefined : `${basePath}/`,
  env: {
    BASE_PATH: basePath
  },
  reactStrictMode: false,
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
      child_process: false,
    }

    config.resolve.alias = {
      ...config.resolve.alias,
    }

    config.plugins.push(new CopyWebpackPlugin({
      patterns: [
        { from: path.join(__dirname, './node_modules/sql.js/dist/sql-wasm.wasm'), to: path.join(__dirname, './public/sql-wasm.wasm') }
      ]
    }))

    return config;
  }
}

module.exports = nextConfig;