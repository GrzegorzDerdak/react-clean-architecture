/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.IMAGES_DOMAINS],
  },
};

module.exports = nextConfig;
