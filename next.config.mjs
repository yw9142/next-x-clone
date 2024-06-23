/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => [
    {
      source: "/login",
      destination: "/i/flow/login",
      permanent: false,
    },
  ],
};


export default nextConfig;
