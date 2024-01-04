/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['cdn-icons-png.flaticon.com', 'img.freepik.com', 'w7.pngwing.com', 'i.ibb.co']
    }
}

module.exports = nextConfig
