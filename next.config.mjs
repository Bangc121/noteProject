/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      // Wildcard path matching
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/products/:slug",
        destination: "/news/:slug",
      },
    ];
  },
};

export default nextConfig;
