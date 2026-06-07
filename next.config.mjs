/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/services/system-audit-kansas-city/', destination: '/apply/', permanent: true },
      { source: '/services/ai-training-kansas-city/', destination: '/mentorship/', permanent: true },
      { source: '/services/done-for-you-automation-kansas-city/', destination: '/done-for-you/', permanent: true },
      { source: '/services/monthly-automation-support-kansas-city/', destination: '/mentorship/', permanent: true },
      { source: '/services/', destination: '/the-system/', permanent: true },
      { source: '/use-cases/', destination: '/the-system/', permanent: true },
      { source: '/free-audit/', destination: '/apply/', permanent: true },
      { source: '/free-guide/', destination: '/giveaway/', permanent: true },
    ];
  },
};

export default nextConfig;
