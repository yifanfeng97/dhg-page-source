<template>
  <v-app-bar app color="primary" dark height="80">
    <v-img
      alt="Vuetify Logo"
      class="shrink mx-3"
      contain
      src="@/assets/logo_white.svg"
      transition="scale-transition"
      width="45"
    />

    <v-toolbar-title class="text-h4 font-weight-medium grow">
      <router-link to="/" class="white--text text-decoration-none"
        >Deep HyperGraph
      </router-link>
    </v-toolbar-title>

    <v-tabs align-with-title v-model="active_tab">
      <v-tab
        v-for="tab in tabs"
        :key="tab.idx"
        :to="tab.to == '' ? undefined : tab.to"
        :href="tab.link == '' ? false : tab.link"
        class="text-subtitle-1 font-weight-bold"
        :target="tab.link == '' ? undefined : '_blank'"
        >{{ tab.name }}</v-tab
      >
    </v-tabs>

    <v-spacer></v-spacer>

    <v-btn href="https://moon-lab.tech/" target="_blank" text>
      To Lab
      <v-icon dark right>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "MyHeader",
  data: () => ({
    active_tab: 0,
    tabs: [
      {
        idx: 0,
        name: "Home",
        to: "/",
        link: "",
      },
      {
        idx: 1,
        name: "People",
        to: "/people",
        link: "",
      },
      {
        idx: 2,
        name: "News",
        to: "/news",
        link: "",
      },
      {
        idx: 3,
        name: "Docs",
        to: "",
        link: "https://deephypergraph.com/docs/",
      },
      {
        idx: 4,
        name: "中文文档",
        to: "",
        link: "https://deephypergraph.readthedocs.io/en/latest/zh/overview.html",
      },
      {
        idx: 5,
        name: "Discussions",
        to: "",
        link: "https://github.com/iMoonLab/DeepHypergraph/discussions",
      },
      {
        idx: 6,
        name: "Github",
        to: "",
        link: "https://github.com/iMoonLab/DeepHypergraph/",
      },
    ],
  }),
};
</script>
