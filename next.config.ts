// import type { NextConfig } from "next";

// always redirects to the home page if blank address

/* @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, 
      },
    ];
  },
};

module.exports = nextConfig;



export default nextConfig;
