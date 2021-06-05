exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // CREATE PAGINATED PAGES FOR POSTS

  const postPerPage = 8

  const numPages = Math.ceil(result.data.allMdx.edges.length / postPerPage)

  // Create an array of undefined values of length = numPages
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // CREATE SINGLE BLOG POSTS
  result.data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: `${slug.toLowerCase()}/`,
      component: require.resolve(`./src/templates/blogPost.js`),
      context: { id },
    })
  })
}
