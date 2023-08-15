<!-- <template>
  <div id="nav">
    <router-link to="/"><v-btn>Home</v-btn></router-link> |
    <router-link to="/about"><v-btn>About</v-btn></router-link> |
    <router-link to="/bookmarks"><v-btn>Bookmarks</v-btn></router-link>
  </div> -->

<template>
  <v-layout>
    <v-app-bar color="light" density="compact">
      <!-- <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template> -->

      <v-app-bar-title>Photos</v-app-bar-title>

      <template v-slot:append>
        <router-link to="/"><v-btn>Home</v-btn></router-link> |
        <router-link to="/about"><v-btn>About</v-btn></router-link> |

        <router-link to="/bookmarks">
          <v-btn class="text-none" stacked>
            <v-badge :content="$store.state.bookmarked" color="error">
              <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
          </v-btn>  
        </router-link>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
  </v-layout>
</template>