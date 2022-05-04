<template>
  <div>
    <header>
      <h1 class="title">Web Engineer Portfolio</h1>
      <nav>
        <router-link class="nav-button" to="/" v-scroll-to="'#top'">TOP</router-link>
        <router-link class="nav-button" to="/about" v-scroll-to="'#about_title'">ABOUT</router-link>
        <router-link class="nav-button" to="/skill" v-scroll-to="'#skill_title'">SKILLS</router-link>
        <router-link class="nav-button" to="/work" v-scroll-to="'#work_title'">WORKS</router-link>
      </nav>
    </header>
    <!-- ルーティング時の表示領域を準備
    <router-view /> -->

    <top></top>
    <about></about>
    <skill></skill>
    <work></work>
  </div>
</template>

<script>
//import headerComponent from "./components/header";
import top from "./views/top.vue";
import about from "./views/about.vue";
import skill from "./views/skill.vue";
import work from "./views/work.vue";

export default {
  name: "App",
  components: {
    //headerComponent,
    top,
    about,
    skill,
    work,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0px;
  background-color: #ffffff;
}

@media (min-width: 768px) {
  header {
    grid-template-columns: 1fr 700px 1fr;
  }
}

@media (min-width: 1024px) {
  header {
    grid-template-columns: 1fr 980px 1fr;
  }
}

.title {
  width: 50%;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
}

nav {
  width: 50%;
  height: 60px;
  margin-top: 10px;
}

.nav-button {
  font-weight: bold;
  color: #1b1b1f;
  line-height: 50px;
  text-decoration: none;
  margin-left: 30px;
  margin-right: 30px;
}

/* nav a:hover {
  background-color: rgba(0, 0, 0, 0.5);
} */

@media (max-width: 670px) {
  nav {
    height: 90px;
  }
  nav a {
    width: 50%;
    line-height: 30px;
  }
}
</style>
