<template>
  <div id="about">
    <span id="about_title" class="head_title">ABOUT ME</span>
    <v-container class="about_container">
      <v-row justify="center">
        <v-col align="center">
          <v-card max-width="700" class="about_detail">
            <v-card-text>
              <h2>NAME</h2>
              <br />{{ aboutMe.name }} <br /><br />
              <h2>BIRTH DAY</h2>
              <br />{{ aboutMe.birth }} <br /><br />
              <h2>EMAIL</h2>
              <!-- <br /><a href="mailto:aboutMe.email">{{ aboutMe.email }}</a><br /><br /> -->
              <br />{{ aboutMe.email }}<br /><br />
              <h2>UNIVERSITY</h2>
              <br />{{ aboutMe.univ }} <br /><br />
              <h2>CERTIFICATION</h2>
              <br />{{ aboutMe.certification }} <br /><br />
              <h2>SELF-INTRODUCTION</h2>
              <br />
              <div style="text-align: left">{{ aboutMe.self_introduction }}</div>
              <br /><br />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      aboutMe: {
        name: "Akihiro Mochimaru",
        univ: "神奈川大学経済学部",
        birth: "1981年1月6日",
        certification: "ORACLE MASTER Silver、SJC-P、SJC-WC",
        email: "akimochi18@gmail.com",
        self_introduction:
          "携帯電話のテスターを経験したことにより、システム開発に興味を持ち、27歳の時に約半年間、Javaを使用したシステム開発を学び、JavaとOracleの資格を取得。その後、SES系のシステム開発会社に入社し、JavaやPHPを使用したWebアプリケーション開発を経験。現在は、音楽系のWebサービスを展開している会社に入社し、社内の音楽配信業務を管理しているシステムの開発を行っている。",
      },
    };
  },
};
</script>

<style scoped>
#about {
  margin-top: 60px;
  width: 100%;
  height: auto;
}

.head_title {
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #1a1928;
}

.about_detail {
  background-color: #e0d4ccd7;
}

.about_container {
  margin-top: 10px;
}
</style>
