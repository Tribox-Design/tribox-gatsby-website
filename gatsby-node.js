const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const workPost = graphql(
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
      console.log(post.node.fields)
      createPage({
        path: `works${post.node.fields.slug}`,
        component: path.resolve(`./src/components/templates/Work.js`),
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    return null
  })

  const fontPost = graphql(
    `
      {
        allMdx(
          filter: {frontmatter: {isPublishedFont: {eq: true}}}
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

    // Create font posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      console.log(post.node.fields)
      createPage({
        path: `fonts${post.node.fields.slug}`,
        component: path.resolve(`./src/components/templates/Font.js`),
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    return null
  })

  const blogPost = graphql(
    `
      {
        allMdx(
          filter: {frontmatter: {isPublishedBlog: {eq: true}}}
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

    // Create blog post pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      createPage({
        path: `articles${post.node.fields.slug}`,
        component: path.resolve(`./src/components/templates/Blog.js`),
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    return null
  })

  const portfolioPost = graphql(
    `
      {
        allMdx(
          filter: {frontmatter: {isPublishedPortfolio: {eq: true}}}
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

    // Create portfolio posts pages.
    const posts = result.data.allMdx.edges
    posts.forEach((post, index) => {
      createPage({
        path: `portfolio${post.node.fields.slug}`,
        component: path.resolve(`./src/components/templates/Portfolio.js`),
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    return null
  })

  return Promise.all([workPost, fontPost, blogPost, portfolioPost])
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Frontmatter {
      category: String!
    }
    type Frontmatter {
      link: String!
    }
    type Frontmatter {
      isPublishedFont: Boolean!
    }
    type Frontmatter {
      isPublishedPortfolio: Boolean!
    }
    type Frontmatter {
      isPublishedBlog: Boolean!
    }
    type Frontmatter {
      isPublishedNews: Boolean!
    }
    type Frontmatter {
      isPublishedWork: Boolean!
    }
  `
  createTypes(typeDefs)
}