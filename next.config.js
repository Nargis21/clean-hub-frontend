/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['cdn-icons-png.flaticon.com', 'img.freepik.com']
    }
}

module.exports = nextConfig
