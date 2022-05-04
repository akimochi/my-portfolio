<template>
  <div id="top">
    <div id="main">
      <h1>Webエンジニアのポートフォリオへようこそ</h1>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: "top",
};
</script>

<style scoped>
#top {
  height: 690px;
  position: relative;
  background-image: url("../assets/bgimage.jpg");
  background-size: cover;
}

#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

#main h1 {
  color: #ffffff !important;
  text-shadow: 5px 5px 0px #000000;
  font-family: "Dosis", sans-serif;
}
</style>
