/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        swcMinify: true,
    },
    // output: "export"
};
export default nextConfig;
