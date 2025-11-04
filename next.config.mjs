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
  
  // Add cache headers for static assets under public/
  // This sets 1 year cache for all static assets (immutable means they won't change)
  async headers() {
    return [
      // JavaScript files in /js directory (matches all .js files)
      {
        source: '/js/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // CSS files in /css directory (matches all .css files)
      {
        source: '/css/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Image files in /image directory (matches all image files)
      {
        source: '/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Icon files and fonts in /icons directory (matches all files including fonts)
      {
        source: '/icons/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Font files in /fonts directory (if exists)
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ]
  },

  async redirects () {
    return [
      {
        source: '/hire/:path*',
        destination: '/hire-experts/:path*',
        permanent: true
      },
      {
        source: '/projects',
        destination: '/portfolio',
        permanent: true
      },
      {
        source: '/projects/:path*',
        destination: '/portfolio/:path*',
        permanent: true
      },
      {
        source: '/project-details/:slug',
        destination: '/portfolio/:slug',
        permanent: true
      }
    ]
  }
}
export default nextConfig;
