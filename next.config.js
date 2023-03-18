/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['scontent.fktm10-1.fna.fbcdn.net'], //make it 'your-domain.com'
  },
}

module.exports = nextConfig
