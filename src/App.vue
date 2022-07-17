<template>
  <v-app>
    <v-app-bar app color="primary" dark height="80">
      <v-img
        alt="Vuetify Logo"
        class="shrink mx-3"
        contain
        src="./assets/logo_DHG_white.png"
        transition="scale-transition"
        width="160"
      />

      <v-tabs align-with-title>
        <v-tab>News</v-tab>
        <v-tab>Tutorials</v-tab>
        <v-tab>Docs</v-tab>
        <v-tab>Github</v-tab>
        <v-tab>Join Us</v-tab>
      </v-tabs>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn icon href="https://moon-lab.tech/" target="_blank" text>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <TopDescribe />
      <BackGround />
    </v-main>

    <v-footer color="primary" dark padless>
      <v-container fluid class="pa-0">
        <v-row class="align-center" no-gutters>
          <v-col cols="12" md="10">
            <v-card-subtitle class="text-center pb-1 text-subtitle-1">
              <strong>iMoon: Intelligent Media and Cognition Lab</strong>
            </v-card-subtitle>
            <v-card-text class="text-center">
              iMoon-Lab. Copyright © 2022 -
              {{ new Date().getFullYear() }}, All rights reserved.
            </v-card-text>
          </v-col>
          <v-col cols="12" md="2" class="d-flex justify-center">
            <v-btn
              v-for="item in icons"
              :key="item.idx"
              class="mx-1"
              :href="item.link"
              icon
            >
              <v-icon size="24px">
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import BackGround from "./components/Motivation";
import TopDescribe from "./components/TopDescribe";

export default {
  name: "App",

  components: {
    BackGround,
    TopDescribe,
  },

  data: () => ({
    icons: [
      {
        idx: 0,
        icon: "mdi-home",
        link: "https://www.moon-lab.tech/",
      },
      {
        idx: 1,
        icon: "mdi-email",
        link: "mailto:evanfeng97@qq.com",
      },
      {
        idx: 2,
        icon: "mdi-source-repository",
        link: "https://github.com/yifanfeng97/dhg-page-source",
      },
    ],
  }),
};
</script>
