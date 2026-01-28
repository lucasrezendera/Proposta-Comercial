/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  // Otimizações para performance
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Otimizar imagens
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
