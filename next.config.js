/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: false,
  images: {
    localPatterns: [
      {
        pathname: '/.*',
      },
    ],
  },
}

module.exports = nextConfig
