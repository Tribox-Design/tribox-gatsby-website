const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const workPost = path.resolve(`./src/components/templates/Work.js`)
  return graphql(
    `
      {
        allMdx(
          filter: {frontmatter: {isPublishedWork: {eq: true}}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create work posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      createPage({
        path: `works${post.node.fields.slug}`,
        component: workPost,
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
