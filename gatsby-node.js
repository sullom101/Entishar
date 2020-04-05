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
            country
          }
        }
      }
    }
  `).then(result => {
    result.data.allInternalCountries.edges.forEach(({ node }) => {
      function slugify(text) {
        return text
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")
      }
      if (
        typeof node.country === "string" &&
        node.country !== "" &&
        node.country !== null
      ) {
        console.log(node)
        const slug = slugify(node.country)
        createPage({
          path: `/country/${slug}`,
          component: path.resolve(`./src/templates/country.js`),
          context: {
            // This is the $slug variable
            // passed to blog-post.js
            slug: node.country,
          },
        })
      }
    })
  })
}
