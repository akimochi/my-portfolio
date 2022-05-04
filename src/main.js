import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueScrollTo from "vue-scrollto";
//import VueParticles from "vue-particles";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueScrollTo, {
    duration: 1000,
    easing: "ease",
    offset: -120,
  })
  .mount("#app");

//const app = createApp(App);
// app.component("star-rating", StarRating);
// app.use(ElementPlus);
// app.mount("#app");
