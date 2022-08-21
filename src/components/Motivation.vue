<template>
  <v-container class="mb-6">
    <!--<v-row class="text-center">
      <v-col cols="12">
        <video
          loop
          muted
          autoplay
          playsinline
          class="my-3"
          width="100%"
          :src="video_src"
        >
          <p>Your browser does not support the video tag.</p>
        </video>
      </v-col>
    </v-row>-->
    <v-row align="center" justify="center">
      <v-col cols="10" lg="4" xl="3">
        <v-card class="rounded-lg" elevation="4">
          <v-card-title>
            <span
              class="text-h5 font-weight-medium text-center"
              style="word-break: Keep-all"
            >
              <span class="font-weight-bold">DHG</span> is a deep learning
              library for both Graph Neural Networks and Hypergraph Neural
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
          max-height="280"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyMotivation",

  // computed: {
  //   video_src() {
  //     switch (this.$vuetify.breakpoint.name) {
  //       case "xs":
  //         return require("../assets/neuron_actions_4s_v1_text.mp4");
  //       case "sm":
  //         return require("../assets/neuron_actions_4s_v1_text.mp4");
  //       case "md":
  //         return require("../assets/neuron_actions_4s_v1_wide_text.mp4");
  //       case "lg":
  //         return require("../assets/neuron_actions_4s_v1_wide_text.mp4");
  //       case "xl":
  //         return require("../assets/neuron_actions_4s_v1_wide_text.mp4");
  //       default:
  //         return require("../assets/neuron_actions_4s_v1_wide_text.mp4");
  //     }
  //   },
  // },

  data: () => ({}),
};
</script>
