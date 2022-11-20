/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.postimg.cc"],
  },
  experimental: {
    appDir: true,
  },
};
