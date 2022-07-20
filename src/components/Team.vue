<template>
  <v-container>
    <v-row>
      <v-col class="mb-4 text-h3 text-center" cols="12">
        The Core DHG Team
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="3" v-for="item in members" :key="item.idx">
        <v-card class="text-center">
          <v-img height="400" :aspect-ratio="1/1" :src="item.img" contain></v-img>
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
            <span class="font-weight-regular black--text text-body-1">
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
    members: [
      {
        idx: 0,
        name: "Yifan Feng",
        role: "Creator",
        contribution: "Architecture and core code.",
        img: require("../assets/team/fengyifan.jpg"),
        page: "https://fengyifan.site/",
      },
      {
        idx: 1,
        name: "Xinwei Zhang",
        role: "Core Contributor",
        contribution:
          "Contributor of data module, random structure generator, and structure visualization.",
        img: require("../assets/team/fengyifan.jpg"),
        page: null,
      },
      {
        idx: 2,
        name: "Qingmei Tang",
        role: "Contributor",
        contribution:
          "Contributor of feature visualization in Euclidean Space and Hyperbolic Space.",
        img: require("../assets/team/fengyifan.jpg"),
        page: null,
      },
      {
        idx: 3,
        name: "Yue Gao",
        role: "Advisor",
        contribution: null,
        img: require("../assets/team/gaoyue.jpg"),
        page: "https://moon-lab.tech/",
      },
    ],
  }),
};
</script>
