const path = require('path')

module.exports = async ({ createPage, graphql }) => {
  const { data } = await graphql(`
    query AllSanityMovies {
      allSanityMovie {
        edges {
          node {
            id
            title
            slug {
              current
            }
            releaseDate
            genres {
              title
              slug {
                current
              }
            }
            popularity
            poster {
              asset {
                url
                metadata {
                  lqip
                }
              }
            }
            _rawOverview
          }
        }
      }
    }
  `)

  data.allSanityMovie.edges.forEach(({ node: movie }) => {
    createPage({
      path: `/movie/${movie.slug.current}`,
      component: path.resolve(__dirname, '../../src/templates/Movie.vue'),
      context: movie,
    })
  })
}
