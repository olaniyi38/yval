/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.website-files.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
    env: {
        NEXT_PUBLIC_API_URl: "http://127.0.0.1:3000"
    }
}

module.exports = nextConfig
