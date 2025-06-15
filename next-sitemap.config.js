/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.grude-online.info",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/wp-admin/", "/wp-login.php"] },
    ],
  },
};
