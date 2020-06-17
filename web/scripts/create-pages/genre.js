const path = require('path')

module.exports = async ({ createPage, graphql }) => {
  const { data } = await graphql(`
    query AllSanityGenres {
      allSanityGenre {
        edges {
          node {
            id
            title
            slug {
              current
            }
            belongsTo {
              edges {
                node {
                  ... on SanityMovie {
                    id
                    title
                    slug {
                      current
                    }
                    poster {
                      asset {
                        url
                        metadata {
                          lqip
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  data.allSanityGenre.edges.forEach(({ node: genre }) => {
    createPage({
      path: `/genre/${genre.slug.current}`,
      component: path.resolve(__dirname, '../../src/templates/Genre.vue'),
      context: genre,
    })
  })
}
