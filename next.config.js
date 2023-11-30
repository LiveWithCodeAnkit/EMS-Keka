/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config;
  },
};
