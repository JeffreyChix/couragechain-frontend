/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "developers.stellar.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
