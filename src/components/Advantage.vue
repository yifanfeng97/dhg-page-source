<template>
  <v-container>
    <v-row>
      <v-col class="mb-4 text-h3 text-center" cols="12"> DHG's Advantages </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="3" v-for="item in advs" :key="item.idx">
        <v-card class="text-center">
          <v-card-text>
            <span class="mb-5 text-h5 black--text" style="word-break: Keep-all">
              {{ item.title }}
            </span>
          </v-card-text>
          <v-card-text>
            <p class="text-body-1">
              {{ item.content }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyAdvantage",

  data: () => ({
    advs: [
      {
        idx: 1,
        title: "Support High-Order Message Passing on Structure",
        content: "DHG supports pair-wise message passing on the graph structure and beyond-pair-wise message passing on the hypergraph structure.",
      },
      {
        idx: 2,
        title: "Shared Ecosystem with Pytorch Framework",
        content: "DHG is built based on Pytorch, and any Pytorch-based model can be integrated into DHG. If you are familiar with Pytorch, you can easily use DHG.",
      },
      {
        idx: 3,
        title: "Powerful API for Designing GNNs and HGNNs",
        content: "Multiple Laplacian Matrices are easily to build your spectral-based model. Message passing functions are easily to build spatial-based model.",
      },
      {
        idx: 4,
        title: "Structure Visualization of Graphs and Hypergraphs",
        content: "DHG provides a powerful visualization tool for graphs and hypergraphs. You can easily visualize the structure of your graphs and hypergraphs.",
      },
      {
        idx: 5,
        title: "Bridge the Gap between Graphs and Hypergraphs",
        content: "DHG provides functions to build hypergraphs from graphs and build graphs from hypergraphs. Maybe promoting the graphs to hypergraphs can exploit those potential high-order connections and improve the performance of your model.",
      },
      {
        idx: 6,
        title: "Attach spectral/spatial-based operation to structure",
        content: "In DHG, those Laplacian matrices and message passing functions are attached to the graph/hypergraph structure. As soon as you build a structure with DHG, those functions will be ready to be used in the process of building your model.",
      },
      {
        idx: 7,
        title: "Comprehensive, Flexible, and Convenience",
        content: "DHG provides random graph/hypergraph generation, provides various state-of-the-art graph/hypergraph convolutional layers and models, provides various public graph/hypergraph datasets, and provides various evaluation metrics.",
      },
      {
        idx: 8,
        title: "Support Tuning Structure and Model with Auto-ML",
        content: "The optuna library endows DHG with the Auto-ML ability. DHG supports automatically searching the best hyper-parameters for the construction of graph/hypergraph structure and the best hyper-parameters for your model and training.",
      },
    ],
  }),
};
</script>
