<template>
  <v-container>
    <v-row>
      <v-col class="text-h4 text-center" cols="12"> DHG Core Team </v-col>
    </v-row>
    <v-row justify="center" class="mb-6">
      <v-col
        cols="8"
        md="3"
        xl="2"
        v-for="item in core_members"
        :key="item.idx"
      >
        <v-card class="text-center">
          <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
          <v-card-title class="justify-center">
            <span v-if="item.page">
              <a class="text-decoration-none" :href="item.page" target="_blank"
                >{{ item.name }}
              </a>
            </span>
            <span v-else>
              {{ item.name }}
            </span>
          </v-card-title>
          <v-card-text class="d-flex flex-column">
            <span class="font-weight-medium black--text text-subtitle-1">
              {{ item.role }}
            </span>
            <span>
              {{ item.contribution }}
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h4 text-center" cols="12"> DHG Contributors </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="8"
        md="3"
        xl="2"
        v-for="item in contributors"
        :key="item.idx"
      >
        <v-card class="text-center">
          <v-img :aspect-ratio="1 / 1" :src="item.img"></v-img>
          <v-card-title class="justify-center">
            <span v-if="item.page">
              <a class="text-decoration-none" :href="item.page" target="_blank"
                >{{ item.name }}
              </a>
            </span>
            <span v-else>
              {{ item.name }}
            </span>
          </v-card-title>
          <v-card-text class="d-flex flex-column">
            <span class="font-weight-medium black--text text-subtitle-1">
              {{ item.role }}
            </span>
            <span>
              {{ item.contribution }}
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyTeam",

  data: () => ({
    core_members: [
      {
        idx: 1,
        name: "Yifan Feng",
        role: "Creator",
        contribution: "Architecture and Core Code.",
        img: require("../assets/team/core/fengyifan.jpg"),
        page: "https://fengyifan.site/",
      },
      {
        idx: 2,
        name: "Xinwei Zhang",
        role: "Core Contributor",
        contribution:
          "Data Module, Random Module, and Structure Visualization.",
        img: require("../assets/team/core/zhangxinwei.jpg"),
        page: null,
      },
      {
        idx: 3,
        name: "Yue Gao",
        role: "Advisor",
        contribution: null,
        img: require("../assets/team/core/gaoyue.jpg"),
        page: "https://moon-lab.tech/",
      },
    ],
    contributors: [
      {
        idx: 1,
        name: "Qingmei Tang",
        role: "Contributor",
        contribution:
          "Feature Visualization in Euclidean Space and Hyperbolic Space.",
        img: require("../assets/team/contributor/tangqingmei.jpg"),
        page: null,
      },
    ],
  }),
};
</script>
