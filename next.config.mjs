/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // for static export
    basePath: '',
    images: {
        unoptimized: true, // GitHub Pages doesn't support Next Image optimization
    },
};

export default nextConfig;
