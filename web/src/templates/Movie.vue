<template>
  <layout>
    <v-container>
      <v-row>
        <v-col md="5">
          <g-image :src="posterImage" />
        </v-col>
        <v-col>
          <h1 class="text-h1">{{ $context.title }}</h1>
          <block-content
            :blocks="$context._rawOverview"
            renderContainerOnSingleChild
            className="text-body-1 font-weight-light"
          />
          <div>
            <h2>Score</h2>
            <p class="primary--text text-h3 font-weight-bold">{{ score }}</p>
          </div>
          <p class="text-body-2">
            Genre: <span class="font-weight-bold">{{ genres }}</span>
          </p>
          <p class="text-body-2">
            Release Date: <span class="font-weight-bold">{{ released }}</span>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </layout>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import { toGImage } from '../utils/to-g-image'

export default {
  name: 'Movie',
  components: {
    BlockContent,
  },
  computed: {
    posterImage: ({ $context }) =>
      toGImage({
        ...$context.poster,
        srcset: [
          `${$context.poster.asset.url}?w=220&fit=crop&auto=format 220w`,
          `${$context.poster.asset.url}?w=300&fit=crop&auto=format 300w`,
          `${$context.poster.asset.url}?w=350&fit=crop&auto=format 350w`,
        ],
      }),
    genres: ({ $context }) => $context.genres.map((g) => g.title).join(','),
    score: ({ $context }) => parseInt($context.popularity, 10),
    released: ({ $context }) => new Date($context.releaseDate).toLocaleDateString(),
  },
}
</script>
