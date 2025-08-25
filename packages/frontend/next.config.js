// biome-ignore lint/style/useNodejsImportProtocol: Use Node.js import protocol
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "/visual/**",
        port: "8080",
        protocol: "http",
      },
    ],
  },
  async redirects() {
    return [
      {
        destination: "/blog/resync",
        permanent: false,
        source: "/blog",
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

if (process.env.NODE_ENV === "development") {
  nextConfig.env = {
    NEXT_PUBLIC_API_CLIENT_URL: `http://${process.env.PUBLIC_URL}:8080`,
    NEXT_PUBLIC_API_URL: `http://${process.env.PUBLIC_URL}:8080`,
    NEXT_PUBLIC_DEVELOPMENT_MODE: "true",
  };
}

module.exports = nextConfig;
