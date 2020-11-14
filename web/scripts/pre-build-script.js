
const generateLayout = require('./generate-layout');
const generateSiteMap = require('./generate-sitemap');

const siteConfig = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

const preBuild = () => {
  generateSiteMap(siteConfig);
  generateLayout();
};

preBuild();

module.exports = preBuild;