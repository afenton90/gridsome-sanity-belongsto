<template>
  <v-app>
    <v-main>
      <v-card class="overflow-hidden">
        <v-app-bar
          prominent
          color="primary"
          shrink-on-scroll
          scroll-target="#scrolling-techniques-2"
        >
          <v-toolbar-title>Genres</v-toolbar-title>
          <template v-slot:extension>
            <v-tabs align-with-title color="white">
              <v-tab v-for="genre in tabItems" :key="genre.id" tag="g-link" exact :to="genre.slug">
                {{ genre.title }}
              </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="95vh">
          <v-container>
            <slot />
          </v-container>
        </v-sheet>
      </v-card>
    </v-main>
    <v-footer>
      <v-container class="text-center caption primary--text">
        <span>
          &copy; {{ new Date().getFullYear() }} Gridsome + Sanity.io Movie app by Neat Fox Digital
        </span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'GenreLayout',
  computed: {
    tabItems() {
      return [
        {
          id: 'all-genres',
          title: 'All',
          slug: '/',
        },
        ...this.$static.allSanityGenre.edges.map(({ node: genre }) => ({
          ...genre,
          slug: `/genre/${genre.slug.current}`,
        })),
      ]
    },
  },
}
</script>

<static-query>
query AllSanityGenres {
  allSanityGenre {
    edges {
      node {
        id
        title
        slug {
          current
        }
      }
    }
  }
}
</static-query>
