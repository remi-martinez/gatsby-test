module.exports = {
  siteMetadata: {
    title: "My Gatsby Site"
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-plugin-mdx",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          }
      },
      {
          resolve: `gatsby-source-sqlite`,
          options: {
              fileName: './database/db.slite3',
              queries: [
                  {
                      statement: 'SELECT * FROM series',
                      idFieldName: 'name',
                      name: 'series'
                  }
              ]
          }
      }
  ],
};
