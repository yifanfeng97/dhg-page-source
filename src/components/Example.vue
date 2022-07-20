<template>
  <v-container>
    <v-row>
      <v-col class="text-h3 mt-6 text-center" cols="12">
          Examples
      </v-col>
    </v-row>
    <v-row>
        <v-col class="mb-6" cols="12" md="6" v-for="item in examples" :key="item.idx">
          <v-col cols="12" class="text-center">
            <div class="text-h4 font-weight-regular" style="word-break: Keep-all">
              {{ item.title }}
            </div>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-img :src="item.src"  contain  />
          </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyExample",

  data: () => ({
    examples: [
      {
        "idx": 1,
        "src": require("../assets/examples/GCNConv.svg"),
        "title": "GCNConv on Graphs",
      },
      {
        "idx": 2,
        "src": require("../assets/examples/HGNNConv.svg"),
        "title": "HGNNConv on Hypergraphs",
      },
      {
        "idx": 3,
        "src": require("../assets/examples/GATConv.svg"),
        "title": "GATConv on Graphs",
      },
      {
        "idx": 4,
        "src": require("../assets/examples/HGNNPConv.svg"),
        "title": "HGNNPConv on Hypergraphs",
      }
    ]
  }),
};
</script>
