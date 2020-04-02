module.exports = {
  siteMetadata: {
    title: `Covid-19`,
    description: `shows updated stats for covid 19.`,
    author: `@suleiman-mayow`,
  },
  plugins: [
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
        name: `Covid-19`,
        description: `The application shows updated stats for covid outbreak. as a contribution from Alieniz to the open source world`,
        short_name: `Covid-19`,
        start_url: `/`,
        background_color: `#1f1d1d`,
        theme_color: `#1f1d1d`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        legacy: false,
        include_favicon: false,
        cache_busting_mode: `none`, // `query`(default), `name`, or `none`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-104681216-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://api.covid19api.com/countries",
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        typePrefix: "internal__",
        name: `countries`,
        params: {
          results: 10,
        },
        verboseOutput: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          },
          {
            family: `Lato`,
            variants: [`400`, `700`]
          },
          {
            family: `Poppins`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
