/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects () {
    return [
      {
        source: '/hire/:path*',
        destination: '/hire-experts/:path*',
        permanent: true
      }
    ]
  }
}
export default nextConfig;
