<template>
  <v-app>
    <MyHeader />
    <v-main>
      <router-view />
      <v-responsive height="150"> </v-responsive>
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>
