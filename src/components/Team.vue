<template>
  <v-container>
    <v-row class="mt-6">
      <v-col class="text-h4 text-center font-weight-bold" cols="12">
        Advisors
      </v-col>
    </v-row>
    <v-row justify="center" class="my-6">
      <v-col cols="10" md="3" xl="2" v-for="item in advisors" :key="item.idx">
        <v-hover v-slot="{ hover }" open-delay="100">
          <v-card
            class="text-center"
            :href="item.page == '' ? undefined : item.page"
            :target="item.page == '' ? undefined : '_blank'"
            :elevation="hover ? 12 : 4"
            hover
          >
            <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
            <v-card-title
              class="justify-center text-decoration-none black--text"
            >
              {{ item.name }}
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h4 text-center font-weight-bold" cols="12">
        Core Team
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-6">
      <v-col cols="10" md="3" xl="2" v-for="item in members" :key="item.idx">
        <v-hover v-slot="{ hover }" open-delay="100">
          <v-card
            class="text-center"
            :href="item.page == '' ? undefined : item.page"
            :target="item.page == '' ? undefined : '_blank'"
            :elevation="hover ? 12 : 4"
            hover
          >
            <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
            <v-card-title
              class="justify-center pb-1 text-decoration-none black--text"
            >
              {{ item.name }}
            </v-card-title>
            <v-card-text class="d-flex flex-column">
              <span class="text-subtitle-1">
                {{ item.role }}
              </span>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5 text-center font-weight-bold" cols="12">
        Contributors
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="4"
        md="2"
        xl="1"
        v-for="item in contributors"
        :key="item.idx"
      >
        <v-hover v-slot="{ hover }" open-delay="100">
          <v-card
            class="text-center"
            :href="item.page == '' ? undefined : item.page"
            :target="item.page == '' ? undefined : '_blank'"
            :elevation="hover ? 12 : 4"
            hover
          >
            <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
            <v-card-title class="justify-center body-1 font-weight-medium">
              {{ item.first_name }}<br />{{ item.second_name }}
            </v-card-title>
          </v-card>
        </v-hover>
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
        page: "",
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
        img: require("../assets/team/core/yanjielong2.jpg"),
        page: "https://github.com/JasonYanjl",
      },
      {
        idx: 4,
        name: "Xiangmin Han",
        role: "Core Contributor",
        contribution: "",
        img: require("../assets/team/core/hanxiangmin.jpg"),
        page: "https://scholar.google.com/citations?user=Y96h0t0AAAAJ&hl=en",
      },
    ],
    contributors: [
      {
        idx: 1,
        first_name: "Shuyi",
        second_name: "Ji",
        role: "Contributor",
        contribution: "Test",
        img: require("../assets/team/contributor/jishuyi2.jpg"),
        page: "",
      },
      {
        idx: 2,
        first_name: "Qingmei",
        second_name: "Tang",
        role: "Contributor",
        contribution: "Documents",
        img: require("../assets/team/contributor/tangqingmei2.jpg"),
        page: "",
      },
    ],
  }),
};
</script>
