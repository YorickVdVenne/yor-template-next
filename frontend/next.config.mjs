/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nl', // Redirect to the default locale
        permanent: false
      }
    ];
  }
};

export default nextConfig;
