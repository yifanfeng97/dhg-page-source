<template>
  <v-container class="mb-6">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" xl="3">
        <v-card class="rounded-lg" elevation="4">
          <v-card-title>
            <span
              class="text-h5 font-weight-medium text-center"
            >
              <span class="font-weight-bold">DHG</span> is a deep learning
              library for both Hypergraph Neural Networks and Graph Neural
              Networks
            </span>
          </v-card-title>
          <v-card-text class="text-body-1 font-weight-regular text-center">
            <span>
              One path in <span class="font-weight-medium">DHG</span> can
              propagate messages from vertex to vertex or from vertex set to
              vertex set.
            </span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="7">
        <v-img
          :src="require('../assets/motivation.svg')"
          class="my-3"
          contain
          transition="slide-x-transition"
          max-height="300"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyMotivation",

  data: () => ({}),
};
</script>
