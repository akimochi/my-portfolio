<template>
  <div id="work">
    <span id="work_title" class="head_title">WORKS</span>
    <h2 class="sub_title">Work Experience</h2>
    <section>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          v-for="work_experience in work_experience"
          :key="work_experience"
          align="left"
          class="skill_title"
        >
          <v-card max-width="1200" class="card">
            <div class="row">
              <div class="col-md-3">
                <div class="card-body">
                  <div class="card-experience">
                    <p>{{ work_experience.experience }}</p>
                    <h5>{{ work_experience.experience_name }}</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <div class="card-content">
                    <h5>{{ work_experience.project_name }}</h5>
                    <p>{{ work_experience.project_detail }}</p>
                    <table>
                      <tr>
                        <th>使用技術：</th>
                        <td>{{ work_experience.skill }}</td>
                      </tr>
                      <tr>
                        <th>担当工程：</th>
                        <td>{{ work_experience.charge }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <h2 class="sub_title">Personal Development</h2>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          v-for="personal_development in personal_development"
          :key="personal_development"
          align="center"
        >
          <v-card max-width="400" class="card">
            <a :href="personal_development.url" target="_brank">
              <img :src="personal_development.imgPath" />
            </a>
          </v-card>

          <div style="text-align: left">{{ personal_development.content }}</div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  name: "work",
  data: function () {
    return {
      work_experience: [
        {
          experience: "2019/2 - 現在",
          experience_name: "自社開発",
          project_name: "音楽系Webサービス開発",
          project_detail:
            "音楽配信業務を社内で管理するシステム改修と外部向けのWebサービスの新規開発に携わる。音楽配信業務のシステム改修については、社内にいるユーザーからの要望に対し、Backlogで課題管理して作業を進めていた。",
          skill:
            "WSL(Ubuntu)、CentOS、MySQL、PHP、Laravel、FuelPHP、PhpSpreadsheet、Bootstrap、Vue.js、jQuery、Bash、Laravel、FuelPHP、AWS、Terraform、jenkins",
          charge: "要件定義、設計、プログラミング、テスト、リリース",
        },
        {
          experience: "2013/8 - 2019/1",
          experience_name: "受託開発",
          project_name: "Webシステムの受託開発",
          project_detail:
            "損害保険会社が運営している外部向けの自動車試算サイトと火災試算サイトに開発に携わり、顧客の窓口として作業を行なった。その他にも物流会社で使用する社内システムや中小企業向けの生産管理システムの開発にも携わる。",
          skill: "MySQL、Oracle、PHP、CakePHP、PHPExcel、jQuery、HTML5、CSS3、Java、Spring、TERASOLUNA、MyBatis",
          charge: "要件定義、設計、プログラミング、テスト、リリース",
        },
        {
          experience: "2009/1 - 2013/7",
          experience_name: "SES",
          project_name: "Webシステムの客先常駐開発",
          project_detail:
            "客先常駐で、主に企業が使用するWebシステムの開発に携わる。主にJavaを使用しての開発だったが、PL/SQLを使用する開発にも携わった。",
          skill:
            "PostgreSQL、MySQL、Oracle、DB2、SQLServer、Java、intra-mart、Spring、Struts、iBATIS、JavaScript、jQuery、PL/SQL、HULFT",
          charge: "設計、プログラミング、テスト",
        },
      ],
      personal_development: [
        {
          url: "https://akimochiblog.com/",
          imgPath: require("../assets/wordpress-icon.svg"),
          content: "WordPressを使用した開発ブログ",
        },
        {
          url: "https://github.com/akimochi",
          imgPath: require("../assets/github-octocat.svg"),
          content: "このポートフォリオを含んだ個人で開発したプログラムをgithubにpush",
        },
      ],
    };
  },
};
</script>

<style scoped>
#work {
  background-color: #fff;
  width: 100%;
  padding: 100px 150px;
  box-sizing: border-box;
  line-height: 1.6;
}
.head_title {
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #1a1928;
}
section {
  margin-bottom: 40px;
}
.sub_title {
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
}
.card {
  border: 0;
  border-radius: 0.1875rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
}
.card .card-body {
  height: 100%;
  min-height: 150px;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.card-experience {
  padding-top: 35px;
}
.card-content {
  text-align: left;
}
.card p,
.card h5 {
  margin-bottom: 10px;
  line-height: 1.6;
}
.card h5 {
  font-size: 22px;
  font-weight: bold;
}
.card table th {
  vertical-align: top;
  font-weight: normal;
  min-width: 80px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-md-3,
.col-md-9 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}
.col-md-3 {
  flex: 0 0 25%;
  max-width: 25%;
  background-color: rgb(202, 198, 191);
}
.col-md-9 {
  flex: 0 0 75%;
  max-width: 75%;
}
@media screen and (max-width: 767px) {
  #work {
    padding: 20px 10px;
    box-sizing: border-box;
    line-height: 1.6;
  }
  section {
    margin-bottom: 20px;
  }
  .title {
    text-align: center;
    margin-bottom: 0px;
  }
  .sub_title {
    text-align: center;
    margin-bottom: 10px;
  }
  .card h5 {
    font-size: 20px;
    text-align: center;
  }
  .card .card-body {
    height: 100%;
    min-height: 1px;
    flex: none;
    padding: 5px 10px;
  }
  .card-experience {
    padding-top: 0px;
  }
  .card-experience p {
    margin-bottom: 0px;
  }
  .experience-title {
    margin-left: 10px;
  }
  .card img {
    width: 100%;
  }
}
</style>
