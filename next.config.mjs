/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gpputulrbqsthavrrbjx.supabase.co"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "gpputulrbqsthavrrbjx.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
