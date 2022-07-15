/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      }
    )

    return config
  },
}

module.exports = nextConfig
