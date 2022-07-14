import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import es from "vuetify/lib/locale/es";
import colors from "vuetify/lib/util/colors";

import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#007BFF",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FF9800",
        navbar: colors.grey.lighten4,
        titleColor: "#000000",
        headerColor: "#191A19",
      },
    },
    icons:{
      iconfont: 'mdiSvg',
    },
  },
  lang: {
    locales: { es },
    current: "es",
  },
});
