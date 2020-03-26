/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allInternalCountries {
        edges {
          node {
            Country
            Provinces
            Slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allInternalCountries.edges.forEach(({ node }) => {
      console.log(node.Slug)
      if(node.Slug !== null){
        createPage({
          path: `/country/${node.Slug}`,
          component: path.resolve(`./src/templates/country.js`),
          context: {
            // This is the $slug variable
            // passed to blog-post.js
            slug: node.Slug
          },
        })
      } 
      
    })
  })
}
