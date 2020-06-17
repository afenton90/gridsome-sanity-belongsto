// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const createMoviePages = require('./scripts/create-pages/movies')

module.exports = function(api) {
  api.loadSource(({ getCollection, store }) => {
    /* Get all the Sanity Movies and Sanity Genres and link them together
     * with belongsTo using their existing references in Sanity.io */
    const sanityMovies = getCollection('SanityMovie')
    const sanityGenres = getCollection('SanityGenre')

    sanityMovies.data().forEach((movie) => {
      const movieNode = sanityMovies.getNodeById(movie.id)
      sanityMovies.updateNode({
        ...movieNode,
        genre_refs:
          movie.genres &&
          movie.genres.map((g) => {
            // Create references between the types in Gridsome to use belongsTo
            const genreNode = sanityGenres.getNodeById(g._ref)

            let ref
            if (genreNode) ref = store.createReference(genreNode)

            return ref
          }),
      })
    })
  })

  api.createPages(async ({ createPage, graphql }) => {
    await createMoviePages({ createPage, graphql })
  })
}
