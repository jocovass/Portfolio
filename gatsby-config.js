/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Joco | Front-end Developer',
    description: 'I am Joco, self taught Web Developer based in Liverpool.',
    author: 'Joco',
    // siteUrl: 'www.jococodes.com',
    social: {
      twitter: 'joco.codes',
      instagram: 'joco.codes',
      linkedin: 'joco.codes',
      github: 'joco.codes',
      email: 'joco.codes@gmail.com',
    },
    imageShare: 'share.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
             {
            family: 'Merriweather',
            variants: ['300', '300i', '400', '400i', '700', '900'],
             }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Joco | Front-end Developer',
        short_name: 'J.Codes',
        icon: 'src/images/icon.png',
        start_url: '/',
        background_color: '#050532',
        theme_color: '#050532',
        display: 'standalone',
      },
    },
    'gatsby-plugin-offline',
  ],
};
