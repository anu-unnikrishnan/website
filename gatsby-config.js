module.exports = {
siteMetadata: {
title: `Anu Unnikrishnan`,
},
plugins: [
          `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, //added this second one
          {
          resolve: `gatsby-transformer-remark`,
          options: {
          plugins: [
                    {
                    resolve: `gatsby-remark-images`,
                    options: {
                    maxWidth: 350,
                    },
                    },
                    ],
          },
          },
          {
          resolve: `gatsby-source-filesystem`,
          options: {
          path: `${__dirname}/src/pages`,
          },
          },
          `gatsby-plugin-emotion`,
          {
          resolve: `gatsby-plugin-typography`,
          options: {
          pathToConfigModule: `src/utils/typography`,
          },
          },
          ],
}

          /*
          {
          resolve: `gatsby-source-filesystem`,
          options: {
          name: `src`,
          path: `${__dirname}/src/`,
          },
          },
          `gatsby-transformer-remark`,
          `gatsby-plugin-emotion`,
          {
          resolve: `gatsby-plugin-typography`,
          options: {
          pathToConfigModule: `src/utils/typography`,
          },
          },
          ],
}
           */
