<template>
  <div>
    <video loop muted autoplay playsinline width="100%" :src="video_src">
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
  },
};
</script>
