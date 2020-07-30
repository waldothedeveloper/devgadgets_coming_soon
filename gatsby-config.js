const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Dev Gadgets`,
    description: `The #1 gadgets resource for developers and technology enthusiasts.`,
    author: `@waldothedeveloper`,
    copyright: `Copyright © 2020 Dev Gadgets. All rights reserved`,
    siteUrl: `https://devgadgets.com`,
    keywords: [
      `Technology Gadgets`,
      `Gadgets`,
      `Programming`,
      `Programming books`,
      `Programming courses`,
      `Software Engineer`,
      `Web Developer`,
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-59759762-6`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://waldolavaut.us10.list-manage.com/subscribe/post?u=22377aca679801284569b9bce&amp;id=5596b856f1",
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
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
        name: `dev gadgets`,
        short_name: `devgadgets`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/devgadgets-icon-black.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
