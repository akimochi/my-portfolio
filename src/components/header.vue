<template>
  <header>
    <h1><a href="/">Top</a></h1>
    <div><a href="/about">about</a></div>
    <!--  <router-link to="/about" v-scroll-to="'#about'">About</router-link>
    <router-link to="/skills" v-scroll-to="'#skills'">Skills</router-link>
    <router-link to="/history" v-scroll-to="'#history'">History</router-link>
    <router-link to="/works" v-scroll-to="'#works'">Works</router-link> -->
    <!-- <a></a>

      <about></about>
      <skills></skills>
      <history></history>
      <works></works>
    </v-app> -->
  </header>
</template>

<script>
export default {
  name: "site-header",
};
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.689);
  color: #fff;
  height: 50px;
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: 1fr;
}

header > * {
  grid-row: 1;
  grid-column: 2;
}

h1 {
  justify-self: start;
  align-self: center;
  font-size: 20px;
  font-weight: normal;
}

h1 > a {
  color: #fff;
  text-decoration: none;
}

#form {
  justify-self: end;
  align-self: center;
  display: none;
}

@media (min-width: 768px) {
  header {
    grid-template-columns: 1fr 700px 1fr;
  }

  #form {
    display: block;
  }
}

@media (min-width: 1024px) {
  header {
    grid-template-columns: 1fr 980px 1fr;
  }
}
</style>