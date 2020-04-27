/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Joco | Front-end Developer",
    description: "I am Joco, a self taught Web Developer based in Liverpool.",
    author: "Joco",
    siteUrl: "http://jococodes.com",
    social: {
      twitter: "CodesJoco",
      instagram: "joco.codes",
      linkedin: "jozsef-vass-1204231a5",
      github: "jocovass",
      email: "joco.codes@gmail.com",
    },
    imageShare: "share.png",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-149385336-1",
        heading: false,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Merriweather",
            variants: ["300", "300i", "400", "400i", "700", "900"],
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer",
            },
          },
        ],
      },
    },
    "gatsby-background-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Joco | Front-end Developer",
        short_name: "J.Codes",
        icon: "src/images/icon.png",
        icons: [
          {
            src: "images/app-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "images/app-icon-big.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: "/",
        background_color: "#333",
        theme_color: "#333",
        display: "standalone",
      },
    },
    "gatsby-plugin-offline",
  ],
}
