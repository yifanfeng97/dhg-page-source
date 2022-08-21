<template>
  <v-app>
    <v-app-bar app color="primary" dark height="80">
      <v-img
        alt="Vuetify Logo"
        class="shrink mx-3"
        contain
        src="./assets/logo_white.svg"
        transition="scale-transition"
        width="45"
      />

      <v-toolbar-title class="text-h4 font-weight-medium grow">
        Deep HyperGraph
      </v-toolbar-title>

      <v-tabs align-with-title>
        <v-tab class="text-subtitle-1 font-weight-bold">News</v-tab>
        <v-tab class="text-subtitle-1 font-weight-bold">Tutorials</v-tab>
        <v-tab class="text-subtitle-1 font-weight-bold">Docs</v-tab>
        <v-tab class="text-subtitle-1 font-weight-bold">Github</v-tab>
        <v-tab class="text-subtitle-1 font-weight-bold">Join Us</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn
        class="mx-2"
        icon
        href="https://moon-lab.tech/"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <!-- <template v-slot:extension>
        <v-tabs align-with-title class="d-flex justify-center">
          <v-tab>News</v-tab>
          <v-tab>Tutorials</v-tab>
          <v-tab>Docs</v-tab>
          <v-tab>Github</v-tab>
          <v-tab>Join Us</v-tab>
        </v-tabs>
      </template> -->
    </v-app-bar>

    <v-main>
      <video loop muted autoplay playsinline width="100%" :src="video_src">
        <p>Your browser does not support the video tag.</p>
      </video>
      <MyMotivation />
      <MyAdvantage />
      <MyExample />
      <MyTeam />
      <v-responsive height=200>
      </v-responsive>
    </v-main>

    <v-footer color="primary" dark padless>
      <v-container fluid>
        <v-row class="align-center" no-gutters>
          <v-col cols="12" class="py-1">
            <div class="text-center pb-2 text-h6">
              <strong>Deep HyperGraph</strong>
            </div>
            <div class="text-center">
              iMoon-Lab. Copyright © 2022 -
              {{ new Date().getFullYear() }}, All rights reserved.
            </div>
          </v-col>
          <v-col cols="12" class="d-flex justify-center py-1">
            <v-btn
              class="mx-3"
              v-for="item in icons"
              :key="item.idx"
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
import MyMotivation from "./components/Motivation";
import MyAdvantage from "./components/Advantage";
import MyExample from "./components/Example";
import MyTeam from "./components/Team";

export default {
  name: "App",

  components: {
    MyMotivation,
    MyAdvantage,
    MyExample,
    MyTeam,
  },

  computed: {
    video_src() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return require("./assets/neuron_actions_4s_v1_text.mp4");
        case "sm":
          return require("./assets/neuron_actions_4s_v1_text.mp4");
        case "md":
          return require("./assets/neuron_actions_4s_v1_wide_text.mp4");
        case "lg":
          return require("./assets/neuron_actions_4s_v1_wide_text.mp4");
        case "xl":
          return require("./assets/neuron_actions_4s_v1_wide_text.mp4");
        default:
          return require("./assets/neuron_actions_4s_v1_wide_text.mp4");
      }
    },
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
