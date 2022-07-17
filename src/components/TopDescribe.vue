<template>
  <v-container>
    <v-row class="text-center my-6">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo_DHG.svg')"
          class="my-3"
          contain
          max-height="200"
        />
      </v-col>
      <v-col cols="12">
        <span class="text-h4"> Propagate Messages Like Neurons </span>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="my-6">
      <v-col cols="12" md="5">
        <v-card>
          <v-card-title>
            <span
              class="mb-3 text-h4 font-weight-medium"
              style="word-break: Keep-all"
            >
              DHG is the ultimate library for both Graph Neural Networks and
              Hypergraph Neural Networks
            </span>
          </v-card-title>
          <v-card-text>
            <p class="text-h5 font-weight-regular">
              Build Graph Learning and Hypergraph Learning with ease.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-img
          :src="require('../assets/logo_DHG.svg')"
          class="my-3"
          contain
          transition="slide-x-transition"
          max-height="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TopDescribe",

  data: () => ({}),
};
</script>
