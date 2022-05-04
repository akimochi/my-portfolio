<template>
  <div id="skill">
    <span id="skill_title" class="head_title">SKILLS</span>

    <v-container class="mt-10">
      <h2 class="skill_item">開発言語</h2>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          v-for="programming in programming"
          :key="programming.name"
          align="center"
          class="skill_title"
        >
          <v-card max-width="400">
            <img :src="programming.imgPath" />
            <br />
            {{ programming.name }}

            <v-progress-linear v-model="programming.value" color="blue-grey" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />

            <!-- <v-card-text class="text-left mt-auto">{{
              programming.content
            }}</v-card-text> -->
          </v-card>
        </v-col>
      </v-row>

      <h2 class="skill_item">DB</h2>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          v-for="db in db"
          :key="db.name"
          align="center"
          class="skill_title"
        >
          <v-card max-width="400">
            <img :src="db.imgPath" />
            <br />
            {{ db.name }}

            <v-progress-linear v-model="db.value" color="blue-grey" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />

            <!-- <v-card-text class="text-left mt-auto">{{
              programming.content
            }}</v-card-text> -->
          </v-card>
        </v-col>
      </v-row>

      <h2 class="skill_item">その他</h2>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          v-for="etc in etc"
          :key="etc.name"
          align="center"
          class="skill_title"
        >
          <v-card max-width="400">
            <img :src="etc.imgPath" />
            <br />
            {{ etc.name }}

            <v-progress-linear v-model="etc.value" color="blue-grey" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />

            <!-- <v-card-text class="text-left mt-auto">{{
              programming.content
            }}</v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "skill",
  data: function () {
    return {
      programming: [
        {
          name: "HTML",
          value: 95,
          imgPath: require("../assets/html-5.svg"),
          // content: "Webアプリ開発で用いています。",
        },
        {
          name: "CSS",
          value: 85,
          imgPath: require("../assets/css-3.svg"),
        },
        {
          name: "JavaScript",
          value: 90,
          imgPath: require("../assets/javascript.svg"),
        },
        {
          name: "jquery",
          value: 95,
          imgPath: require("../assets/jquery.svg"),
        },
        {
          name: "Vue.js",
          value: 50,
          imgPath: require("../assets/vue.svg"),
        },
        {
          name: "Java",
          value: 70,
          imgPath: require("../assets/java.svg"),
        },
        {
          name: "Ruby",
          value: 35,
          imgPath: require("../assets/ruby.svg"),
        },
      ],
      db: [
        {
          name: "MySQL",
          value: 90,
          imgPath: require("../assets/mysql.svg"),
        },
        {
          name: "Oracle",
          value: 80,
          imgPath: require("../assets/oracle.svg"),
        },
        {
          name: "PostgreSQL",
          value: 60,
          imgPath: require("../assets/postgresql.svg"),
        },
      ],
      etc: [
        {
          name: "Linux",
          value: 80,
          imgPath: require("../assets/linux-tux.svg"),
        },
        {
          name: "docker",
          value: 50,
          imgPath: require("../assets/docker.svg"),
        },
        {
          name: "aws",
          value: 50,
          imgPath: require("../assets/aws.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 120px;
  height: 120px;
  margin-top: 5px;
}
#skill {
  margin-top: 50px;
}
.head_title {
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #1a1928;
}
h2 {
  margin-top: 10px;
  margin-bottom: 20px;
}
.skill_item {
  font-size: 30px;
  font-weight: bold;
}
.skill_title {
  font-size: 20px;
  font-weight: bold;
}
</style>
