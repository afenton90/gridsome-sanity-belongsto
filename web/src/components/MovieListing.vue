<template>
  <v-row dense>
    <v-col v-for="{ node: movie } in movies" :key="movie.id" md="4">
      <v-card tag="g-link" :to="`/movie/${movie.slug.current}`">
        <v-img
          :src="movie.poster.asset.url"
          class="align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="400px"
        >
          <v-card-title v-text="movie.title" />
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MovieListing',
  props: {
    movies: {
      type: Array,
      default: null,
    },
  },
}
</script>
