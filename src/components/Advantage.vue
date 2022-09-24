<template>
  <v-container>
    <v-row>
      <v-col class="mt-4 text-h4 text-center font-weight-bold" cols="12">
        DHG's Advantages
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="3" v-for="item in advs" :key="item.idx">
        <v-hover v-slot="{ hover }" open-delay="100">
          <v-card
            hover
            class="text-center rounded-lg"
            :elevation="hover ? 12 : 4"
            :href="item.page == '' ? undefined : item.page"
            :target="item.page == '' ? undefined : '_blank'"
          >
            <v-card-title>
              <span class="text-h5 black--text font-weight-medium">
                {{ item.title }}
              </span>
            </v-card-title>
            <v-card-text>
              <p class="text-body-1">
                {{ item.content }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
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
        page: "https://deephypergraph.readthedocs.io/en/latest/start/high_order/hypergraph.html",
        content:
          "DHG supports pair-wise message passing on the graph structure and beyond-pair-wise message passing on the hypergraph structure.",
      },
      {
        idx: 2,
        title: "Shared Ecosystem with Pytorch Framework",
        page: "http://pytorch.org/",
        content:
          "DHG is built upon Pytorch, and any Pytorch-based models can be integrated into DHG. If you are familiar with Pytorch, you can easily use DHG.",
      },
      {
        idx: 3,
        title: "Powerful API for Designing GNNs and HGNNs",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/model.html",
        content:
          "DHG provides various Laplacian matrices and message passing functions to help build your spectral/spatial-based models, respectively.",
      },
      {
        idx: 4,
        title: "Visualization of Graphs and Hypergraphs",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/vis_structure.html",
        content:
          "DHG provides a powerful visualization tool for graphs and hypergraphs. You can easily visualize the structure of your graphs and hypergraphs.",
      },
      {
        idx: 5,
        title: "Bridge the Gap between Graphs and Hypergraphs",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/structure.html",
        content:
          "DHG provides functions to build hypergraphs from graphs and build graphs from hypergraphs. Maybe promoting the graphs to hypergraphs can exploit those potential high-order connections and improve the performance of your model.",
      },
      {
        idx: 6,
        title: "Attach Spectral/Spatial-Based Operations to Structure",
        page: "https://deephypergraph.readthedocs.io/en/latest/start/low_order/index.html",
        content:
          "In DHG, those Laplacian matrices and message passing functions are attached to the graph/hypergraph structure. As soon as you build a structure with DHG, those functions will be ready to be used in the process of building your model.",
      },
      {
        idx: 7,
        title: "Comprehensive, Flexible, and Convenience",
        page: "https://deephypergraph.readthedocs.io/en/latest/api/models.html",
        content:
          "DHG provides random graph/hypergraph generators, various state-of-the-art graph/hypergraph convolutional layers and models, various public graph/hypergraph datasets, and various evaluation metrics.",
      },
      {
        idx: 8,
        title: "Support Tuning Structure and Model with Auto-ML",
        page: "https://deephypergraph.readthedocs.io/en/latest/tutorial/auto_ml.html",
        content:
          "The Optuna library endows DHG with the Auto-ML ability. DHG supports automatically searching the optimal configurations for the construction of graph/hypergraph structure and the optimal hyper-parameters for your model and training.",
      },
    ],
  }),
};
</script>
