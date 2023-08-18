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
        <v-btn @click="toggleTheme" :icon="isDarkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
  </v-layout>
</template>


<script>
import {useTheme } from 'vuetify'


export default {
  name: "NavBar",
  setup() {
    const theme = useTheme()    
    return {
      theme,
      toggleTheme: () => {
        // this.isDarkMode = !this.isDarkMode;
        // console.log(isDarkMode)
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    }
  },
  data: () => ({
    isDarkMode: false
  }),

  // mounted() {
  //   const theme = localStorage.getItem("dark_theme");
  //   if (theme) {
  //     if (theme === "true") {
  //       this.$vuetify.theme.dark = true;
  //     } else {
  //       this.$vuetify.theme.dark = false;
  //     }
  //   } else if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     this.$vuetify.theme.dark = true;
  //     localStorage.setItem(
  //       "dark_theme",
  //       this.$vuetify.theme.dark.toString()
  //     );
  //   }
  // },
  methods: {
    // handleDarkMode() {
    //   // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    //   this.isDarkMode = !this.isDarkMode;

    //   const theme = useTheme()
    //   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

    //   // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    //   // localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    // }
  }
}
</script>