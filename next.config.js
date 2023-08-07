/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pyvlrcinsmbkzdwgbdkm.supabase.co', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
