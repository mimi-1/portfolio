require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `StarDust Jazz Duo`,
    description: `Promotional website for a musical group Stardust Jazz Duo, blog about jazz and music, order music for your event`,
    author: `Maryna, Victor, Zhanna, Taras`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      { name: `Galery`, link: `/galery` },
      { name: `Happening`, link: `/happening` },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
  },

  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
        timeout: 4000, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Roboto`,
                variants: [`400`, `500`, `600`],
              },
              {
                family: `Fascinate`,
              },
              {
                family: `Kaushan Script`,
              },
              {
                family: `Oswald`,
                variants: [`400`, `600`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,

    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "https://wp.kaleigh.tech/graphql", //"http://www.gatsby.lotusms.tech/graphql", // baseUrl: "live-gatbsyjswp.pantheonsite.io",

    //     type: {
    //       Page: {
    //         exclude: true,
    //       },
    //       User: {
    //         exclude: true,
    //       },
    //       Theme: { exclude: true },
    //       Settings: { exclude: true },
    //     },
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `StarDust Jazz Duo`,
        short_name: `StarDust`,
        start_url: `/`,
        background_color: `#91509D`,
        theme_color: `#DCEDC8`,
        display: `standalone`,
        icon: `src/images/music.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
