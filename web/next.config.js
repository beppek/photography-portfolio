/* eslint-disable global-require */
const siteConfig = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')(siteConfig);
      require('./scripts/generate-layout')();
    }
    return config;
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};
