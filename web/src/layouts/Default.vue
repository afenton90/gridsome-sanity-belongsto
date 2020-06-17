<template>
  <v-app>
    <v-main>
      <slot />
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
