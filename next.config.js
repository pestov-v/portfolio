const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    loadPaths: [path.join(__dirname)],
  },
};

module.exports = nextConfig;
