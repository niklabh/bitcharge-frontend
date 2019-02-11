const fs = require('fs')
const buildSitemap = require('react-router-sitemap').sitemapBuilder

const paths = [
  '/signup',
  '/login',
  '/privacy',
  '/terms',
  '/about'
]

const hostname = 'https://bitcharge.co'
const sitemap = buildSitemap(hostname, paths)

fs.writeFileSync('../public/sitemap.xml', sitemap.toString())
