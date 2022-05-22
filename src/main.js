import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueScrollTo from "vue-scrollto";
//import VueParticles from "vue-particles";

//Font awesome関連
import { library } from "@fortawesome/fontawesome-svg-core";
//ここで使いたいアイコンをインポート
import { faPen, faBirthdayCake, faSchool, faMailBulk, faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
//Vue3で使用するためにインストール
//npm install --save @fortawesome/vue-fontawesome@prerelease
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

loadFonts();

library.add(faPen, faBirthdayCake, faSchool, faMailBulk, faCoffee, faUser);

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueScrollTo, {
    duration: 1000,
    easing: "ease",
    offset: -120,
  })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

//const app = createApp(App);
// app.component("star-rating", StarRating);
// app.use(ElementPlus);
// app.mount("#app");
