// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from 'vuetify/lib/util/colors'
// Vuetify
import { createVuetify } from "vuetify";

export default new createVuetify({
  theme: {
    // defaultTheme: 'dark',
    themes: {
      light: {
        primary: colors.green.accent3,
        secondary: colors.deepOrange.lighten1
      },
      dark: {
        primary: '#90CAF9',
        secondary: '#E91E63'
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
