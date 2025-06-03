import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<domain>vandelaytechnologies\\.io)',
          },
        ],
        destination: 'https://www.vandelaytechnologies.io/:path*',
        permanent: true,
      },
      // Redirect http to https (for www)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.vandelaytechnologies.io',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.vandelaytechnologies.io/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
