<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Deep HyperGraph
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other DHG developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>
      <v-col cols="12">
        <v-img
          :src="require('../assets/motivation.svg')"
          class="my-3"
          contain
          max-height="400"
        />
      </v-col>
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo_DHG.svg')"
          class="my-3"
          contain
          max-height="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BackGround",

  data: () => ({}),
};
</script>
