import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  async redirects() {
    if (process.env.ENV === 'development') {
      return [];  // No redirects in development
    }
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '^(?!www\\.).*$',
          },
        ],
        permanent: true,
        destination: `https://${process.env.NEXT_PUBLIC_HOSTNAME}/:path*`,
      },
    ];
  },
};

export default nextConfig;
