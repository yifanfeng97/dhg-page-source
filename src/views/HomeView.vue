<template>
  <div>
    <video
      loop
      muted
      autoplay
      playsinline
      width="100%"
      :src="video_src"
      :poster="video_poster"
    >
      <p>Your browser does not support the video tag.</p>
    </video>
    <v-container>
      <MyMotivation />
      <MyAdvantage />
      <MyExample />
    </v-container>
  </div>
</template>

<script>
import MyMotivation from "@/components/Motivation";
import MyAdvantage from "@/components/Advantage";
import MyExample from "@/components/Example";

export default {
  name: "HomeView",

  components: {
    MyMotivation,
    MyAdvantage,
    MyExample,
  },

  computed: {
    video_src() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return require("@/assets/neuron_actions_4s_v1_text.mp4");
        case "sm":
          return require("@/assets/neuron_actions_4s_v1_text.mp4");
        case "md":
          return require("@/assets/neuron_actions_4s_v1_wide_text.mp4");
        case "lg":
          return require("@/assets/neuron_actions_4s_v1_wide_text.mp4");
        case "xl":
          return require("@/assets/neuron_actions_4s_v1_wide_text.mp4");
        default:
          return require("@/assets/neuron_actions_4s_v1_wide_text.mp4");
      }
    },
    video_poster() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return require("@/assets/neuron_actions_4s_v1_text_poster.jpg");
        case "sm":
          return require("@/assets/neuron_actions_4s_v1_text_poster.jpg");
        case "md":
          return require("@/assets/neuron_actions_4s_v1_wide_text_poster.jpg");
        case "lg":
          return require("@/assets/neuron_actions_4s_v1_wide_text_poster.jpg");
        case "xl":
          return require("@/assets/neuron_actions_4s_v1_wide_text_poster.jpg");
        default:
          return require("@/assets/neuron_actions_4s_v1_wide_text_poster.jpg");
      }
    },
  },
};
</script>
