/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
