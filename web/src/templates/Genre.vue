<template>
  <genre-layout>
    <movie-listing :movies="$context.belongsTo.edges" />
  </genre-layout>
</template>

<script>
import MovieListing from '../components/MovieListing.vue'

export default {
  name: 'Genre',
  components: {
    MovieListing,
  },
}
</script>
