/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**/*",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "/**/*",
      },
    ],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
