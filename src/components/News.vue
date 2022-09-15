<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="11" xl="8">
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="item in items.slice().reverse()"
            :key="item.idx"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <span
              slot="opposite"
              :class="`headline font-weight-bold ${item.color}--text`"
              >{{ item.time }}</span
            >
            <v-card :color="item.color" dark>
              <v-card-title class="text-h6">
                <span v-if="$vuetify.breakpoint.smAndDown"
                >{{ item.time }}👉</span
                >
                {{ item.title }}
              </v-card-title>
              <v-card-text class="white text--primary pt-5 text-body-1">
                <p>
                  {{ item.content }}
                </p>
                <v-btn
                  :color="item.color"
                  :href="item.more"
                  target="_blank"
                  outlined
                >
                  More Details
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyNews",
  data: () => ({
    items: [
      {
        idx: 0,
        color: "purple",
        icon: "mdi-star",
        time: "2022-08-25",
        title: "v0.9.1 Release!",
        content:
          "DHG's first version v0.9.1 is available now. It supports a wide variety of structures like low-order structures \
          (graph, directed graph, bipartite graph, etc.), high-order structures (hypergraph, etc.). \
          Many state-of-the-art models are implemented and can be easily used for research. \
          In addition, DHG can help you automatically tune the hyper-parameters of your models in training and easily outperforms the state-of-the-art models.",
        more: "https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.1",
      },
      {
        idx: 2,
        color: "teal",
        icon: "mdi-book-variant",
        time: "2022-09-02",
        title: "v0.9.1 Documents Done!",
        content: "The documents of v0.9.1 are available now.",
        more: "https://deephypergraph.readthedocs.io/en/0.9.1/",
      },
      {
        idx: 3,
        color: "indigo",
        icon: "mdi-airballoon",
        time: "2022-09-09",
        title: "Rushing v0.9.2!",
        content:
          "We are rushing to release v0.9.2. It will be available soon. More datasets, more SOTA methods, and various structure visualizations will be released in this version.",
        more: "https://deephypergraph.readthedocs.io/en/latest/",
      },
    ],
  }),
};
</script>
