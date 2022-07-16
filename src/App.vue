<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="./assets/logo.jpg"
        transition="scale-transition"
        width="40"
      />

      
      <!-- <v-app-bar-title>Deep HyperGraph</v-app-bar-title> -->

      <v-spacer></v-spacer>

      <v-tabs align-with-title>
        <v-tab>News</v-tab>
        <v-tab>Tutorials</v-tab>
        <v-tab>Docs</v-tab>
        <v-tab>Github</v-tab>
      </v-tabs>

      <!-- <v-spacer></v-spacer> -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn
        icon
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld style="height: 2000px" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
