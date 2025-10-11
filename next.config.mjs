/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Optimize bundle size
  swcMinify: true,
  compiler: {
    removeConsole: {
    exclude: ['error', 'warn'], // Keep errors and warnings
  },
  },
  
  // Optimize images
  images: { 
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.inheritx.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Optimize production builds
  productionBrowserSourceMaps: false,
  
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
