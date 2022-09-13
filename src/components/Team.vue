<template>
  <v-container>
    <v-row class="mt-6">
      <v-col class="text-h4 text-center font-weight-bold" cols="12">
        Advisors
      </v-col>
    </v-row>
    <v-row justify="center" class="my-6">
      <v-col cols="8" md="3" xl="2" v-for="item in advisors" :key="item.idx">
        <v-card class="text-center">
          <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
          <v-card-title class="justify-center">
            <span v-if="item.page">
              <a
                class="text-decoration-none black--text"
                :href="item.page"
                target="_blank"
                >{{ item.name }}
              </a>
            </span>
            <span v-else>
              {{ item.name }}
            </span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h4 text-center font-weight-bold" cols="12">
        Core Team
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-6">
      <v-col cols="8" md="3" xl="2" v-for="item in members" :key="item.idx">
        <v-card class="text-center">
          <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
          <v-card-title class="justify-center pb-1">
            <span v-if="item.page">
              <a
                class="text-decoration-none black--text"
                :href="item.page"
                target="_blank"
                >{{ item.name }}
              </a>
            </span>
            <span v-else>
              {{ item.name }}
            </span>
          </v-card-title>
          <v-card-text class="d-flex flex-column">
            <span class="text-subtitle-1">
              {{ item.role }}
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5 text-center font-weight-bold" cols="12">
        Contributors
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="5"
        md="2"
        xl="1"
        v-for="item in contributors"
        :key="item.idx"
      >
        <v-card class="text-center">
          <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
          <v-card-title
            class="justify-center body-1 font-weight-medium"
            style="word-break: Keep-all"
          >
            <span v-if="item.page">
              <a class="text-decoration-none" :href="item.page" target="_blank"
                >{{ item.first_name }}<br />{{ item.second_name }}
              </a>
            </span>
            <span v-else>
              {{ item.first_name }}<br />{{ item.second_name }}
            </span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyTeam",

  data: () => ({
    advisors: [
      {
        idx: 1,
        name: "Qionghai Dai",
        img: require("../assets/team/advisor/daiqionghai.jpg"),
        page: "https://ysg.ckcest.cn/html/details/8058/index.html",
      },
      {
        idx: 2,
        name: "Yue Gao",
        img: require("../assets/team/advisor/gaoyue.jpg"),
        page: "https://gaoyue.org/",
      },
    ],
    members: [
      {
        idx: 1,
        name: "Yifan Feng",
        role: "Core Leader",
        contribution: "Architecture and Core Code.",
        img: require("../assets/team/core/fengyifan.jpg"),
        page: "https://fengyifan.site/",
      },
      {
        idx: 2,
        name: "Xinwei Zhang",
        role: "Core Contributor",
        contribution: "Random Module, and Structure Visualization.",
        img: require("../assets/team/core/zhangxinwei1.jpg"),
        page: "https://github.com/zhangxwww",
      },
      {
        idx: 3,
        name: "Jielong Yan",
        role: "Core Contributor",
        contribution: "Chinese Documents",
        img: require("../assets/team/core/yanjielong1.jpg"),
        page: "https://github.com/JasonYanjl",
      },
      {
        idx: 4,
        name: "Shuyi Ji",
        role: "Core Contributor",
        contribution: null,
        img: require("../assets/team/core/jishuyi.jpg"),
        page: null,
      },
    ],
    contributors: [
      {
        idx: 1,
        first_name: "Qingmei",
        second_name: "Tang",
        role: "Contributor",
        contribution: "Documents",
        img: require("../assets/team/contributor/tangqingmei2.jpg"),
        page: null,
      },
    ],
  }),
};
</script>
