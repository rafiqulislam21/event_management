<template>
  <div id="nav">
    <router-link to="/"><v-btn>Home</v-btn></router-link> |
    <router-link to="/about"><v-btn>About</v-btn></router-link> |
    <router-link to="/bookmarks"><v-btn>Bookmarks</v-btn></router-link>
  </div>
  <!-- <div id="nav">
    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Event Management</v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/bookmarks">Bookmarks</router-link>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div> -->
</template>

<script>

export default {
  name: 'NavBar',

  data: () => ({

  }),
}
</script>
