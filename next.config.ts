import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prm-attachments-qa.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "prm-attachments.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        // YouTube stills for the JazzClub video testimonials.
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async rewrites() {
    const rawApiUrl = process.env.NEXT_PUBLIC_PRM_API_URL || "";
    let cleanApiUrl = rawApiUrl.trim();
    if (cleanApiUrl && !cleanApiUrl.startsWith("http://") && !cleanApiUrl.startsWith("https://")) {
      cleanApiUrl = `https://${cleanApiUrl}`;
    }
    if (cleanApiUrl.endsWith("/")) {
      cleanApiUrl = cleanApiUrl.slice(0, -1);
    }

    return [
      {
        source: "/api/prm-proxy/:path*",
        destination: `${cleanApiUrl}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/our-story",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/forpartners",
        destination: "/for-partners",
        permanent: true,
      },
      {
        source: "/channel-partners",
        destination: "/for-partners",
        permanent: true,
      },
      {
        source: "/forvendors",
        destination: "/for-vendors",
        permanent: true,
      },
      {
        source: "/list-your-product",
        destination: "/for-vendors",
        permanent: true,
      },
      {
        source: "/apply-to-join",
        destination: "/for-partners",
        permanent: true,
      },
      {
        source: "/become-a-partner",
        destination: "/for-partners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
