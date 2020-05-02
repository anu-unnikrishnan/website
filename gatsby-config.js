module.exports = {
siteMetadata: {
title: `Anu Unnikrishnan`,
},
plugins: [

    { //from here (this goes below)
        resolve: `gatsby-source-filesystem`,
        options: {
        path: `${__dirname}/src/pages`,
        name: "media"
        },
        }, //to here (this goes below)

          `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, //added this second one
          {
          resolve: `gatsby-transformer-remark`,
          options: {
          plugins: [

            { //delete from here
                resolve: `gatsby-remark-relative-images`,
                options: {
                  name: "media" // Must match the source name ^
                }
              }, //to here 
              
                    {
                    resolve: `gatsby-remark-images`,
                    options: {
                    maxWidth: 350,
                    },
                    },
                    ],
          },
          },

          //here goes gatsby-source-filesystem

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
