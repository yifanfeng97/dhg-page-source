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
      {
        idx: 4,
        color: "purple",
        icon: "mdi-star",
        time: "2022-09-25",
        title: "v0.9.2 Release!",
        content:
          "We release the v0.9.2 version now! We have added 21 datasets, 6 SOTA methods, and structure and feature visualizations.\
          New datasets (BlogCatalog, Flickr, Github, Facebook, TencentBiGraph, CoraBiGraph, PubmedBiGraph,\
            CiteseerBiGraph, CoauthorshipCora, CoauthorshipDBLP, CocitationCora, CocitationCiteseer, CocitationPubmed, YelpRestaurant, WalmartTrips, HouseCommittees, News20);\
          New SOTA methods (BGNN_Adv, BGNN_MLP, UniGCN, UniGAT, UniSAGE, UniGIN); Graph, directed graph, bipartite graph, and hypergraph structure visualization;\
            Features visualizations; Random drop edges and more.",
        more: "https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.2",
      },
      {
        idx: 5,
        color: "purple",
        icon: "mdi-star",
        time: "2022-12-28",
        title: "v0.9.3 Release!",
        content:
          "We release the v0.9.3 version now! In v0.9.3, we add a hypergraph dataset, fix some known bugs, and add some hypergraph operation.\
          New datasets (DBLP-8k contributed by @mgao97);\
          Fix some known bugs (fix hypergraph D_v bugs ( h[v, e] -> w[e]*h[v, e] ), fix bug (ndcg and recall nan), etc.);\
          New features (vertex weights of hypergraph, etc.)",
        more: "https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.3",
      },
      {
        idx: 6,
        color: "purple",
        icon: "mdi-star",
        time: "2024-01-31",
        title: "v0.9.4 Release!",
        content:
          "We release the v0.9.4 version now! In v0.9.4, we add 6 hypergraph datasets and fix some known bugs. \
          New datasets (DBLP-4k, IMDB4k, Recipe100k, Recipe200k, Yelp3k, Tencent2k);\
          Fix some known bugs (fix last layer bn bugs, fix device error of graph,di_graph,bi_graph,hypergraph laplacian computing, etc.);\
          New features (add custom hypergraph generator, etc.)",
        more: "https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.4",
      },
    ],
  }),
};
</script>
