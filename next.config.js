const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    register: true,
    skipWaiting: true, 
    disable: false, 
    buildExcludes: [/middleware-manifest.json$/]
  });
  
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
      ignoreDuringBuilds: true,
  },
  };
  
  module.exports = withPWA(nextConfig);
  