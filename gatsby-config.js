module.exports = {
  siteMetadata: {
    title: `Country Music`,
    description: `The official website for midwest country musician Tj Morrow. Find up-to-date music, shows, and contact information.`,
    author: `@brherron`,
    siteUrl: `https://www.tjmorrowmusic.com`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['proxima-nova'],
          urls: ['https://use.typekit.net/dok2zlr.css']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-transition-link',
    'react-typical',
    'react-burger-menu'
  ],
}
