<template>
  <div>
    <v-app-bar app color="primary" dark height="80">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-img
        v-if="!$vuetify.breakpoint.mobile"
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

      <v-tabs v-if="!$vuetify.breakpoint.mobile" align-with-title>
        <v-tab
          v-for="tab in tabs"
          :key="tab.idx"
          :to="tab.to == '' ? undefined : tab.to"
          :href="tab.link == '' ? undefined : tab.link"
          class="text-subtitle-1 font-weight-bold"
          :target="tab.link == '' ? undefined : '_blank'"
          >{{ tab.name }}</v-tab
        >
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        href="https://moon-lab.tech/"
        target="_blank"
        text
      >
        To Lab
        <v-icon dark right>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn v-else href="https://moon-lab.tech/" target="_blank" icon>
        <v-icon dark>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="tab in tabs"
            :key="tab.idx"
            :to="tab.to == '' ? undefined : tab.to"
            :href="tab.link == '' ? undefined : tab.link"
            class="text-subtitle-1 font-weight-bold"
            :target="tab.link == '' ? undefined : '_blank'"
          >
            <v-list-item-icon>
              <v-icon>{{ tab.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-h6">{{
              tab.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data: () => ({
    drawer: false,
    tabs: [
      {
        idx: 0,
        name: "Home",
        icon: "mdi-home",
        to: "/",
        link: "",
      },
      {
        idx: 1,
        name: "People",
        icon: "mdi-account-group",
        to: "/people",
        link: "",
      },
      {
        idx: 2,
        name: "News",
        icon: "mdi-newspaper",
        to: "/news",
        link: "",
      },
      {
        idx: 3,
        name: "Docs",
        icon: "mdi-file-document",
        to: "",
        link: "https://deephypergraph.com/docs/",
      },
      {
        idx: 4,
        name: "中文文档",
        icon: "mdi-file-document",
        to: "",
        link: "https://deephypergraph.readthedocs.io/en/latest/zh/overview.html",
      },
      {
        idx: 5,
        name: "Discussions",
        icon: "mdi-forum",
        to: "",
        link: "https://github.com/iMoonLab/DeepHypergraph/discussions",
      },
      {
        idx: 6,
        name: "Github",
        icon: "mdi-github",
        to: "",
        link: "https://github.com/iMoonLab/DeepHypergraph/",
      },
    ],
  }),
};
</script>
