<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-6 text-h4 text-center font-weight-bold">
        Structure Visualization
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        class="mb-6"
        cols="10"
        sm="6"
        lg="3"
        v-for="item in examples"
        :key="item.idx"
      >
        <v-col cols="12" class="text-center">
          <div class="text-h5 font-weight-medium" style="word-break: Keep-all">
            {{ item.title }}
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-hover v-slot="{ hover }" open-delay="100">
            <v-card
              class="rounded-lg"
              :elevation="hover ? 12 : 4"
              :href="item.page == '' ? undefined : item.page"
              :target="item.page == '' ? undefined : '_blank'"
            >
              <v-img
                :src="item.src"
                contain
                width="400"
                transition="scroll-y-reverse-transition"
              />
            </v-card>
          </v-hover>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyVisualization",

  data: () => ({
    examples: [
      {
        idx: 1,
        src: require("../assets/vis/graph.png"),
        title: "Graph",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/vis_structure.html#visualization-of-graph",
      },
      {
        idx: 2,
        src: require("../assets/vis/hypergraph.png"),
        title: "Hypergrpah",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/vis_structure.html#visualization-of-hypergraph",
      },
      {
        idx: 3,
        src: require("../assets/vis/digraph.png"),
        title: "Directed Graph",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/vis_structure.html#visualization-of-directed-graph",
      },
      {
        idx: 4,
        src: require("../assets/vis/bigraph.png"),
        title: "Bipartite Graph",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/vis_structure.html#visualization-of-bipartite-graph",
      },
    ],
  }),
};
</script>
