/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**', // Allows all paths from this domain
      },
    ],
  },
};

export default nextConfig;
