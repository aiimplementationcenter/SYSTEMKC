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
      { source: '/the-sprint/', destination: '/the-challenge/', permanent: true },
      { source: '/free-guide/', destination: '/the-challenge/', permanent: true },
      { source: '/giveaway/', destination: '/the-challenge/', permanent: true },
      { source: '/giveaway/rules/', destination: '/the-challenge/', permanent: true },
      { source: '/giveaway/refer/', destination: '/the-challenge/', permanent: true },
      { source: '/mentorship/', destination: '/the-challenge/', permanent: false },
    ];
  },
};

export default nextConfig;
