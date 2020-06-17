<template>
  <genre-layout>
    <movie-listing :movies="$page.allSanityMovie.edges" />
  </genre-layout>
</template>

<script>
import MovieListing from '../components/MovieListing.vue'

export default {
  components: { MovieListing },
  metaInfo: {
    title: 'All Movies',
  },
}
</script>

<page-query>
query AllSanityMovieListing {
  allSanityMovie {
    edges {
      node {
        id
        title
        slug {
          current
        }
        poster {
          asset {
            url
          }
        }
      }
    }
  }
}
</page-query>
