/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.crunchbase.com',
            pathname: '/image/upload/**',
          },
        ],
      },
};

export default nextConfig;
