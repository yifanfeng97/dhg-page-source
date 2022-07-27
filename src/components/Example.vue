<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-6 text-h4 text-center font-weight-bold">
        Examples
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        class="mb-6"
        cols="12"
        sm="10"
        lg="6"
        xl="5"
        v-for="item in examples"
        :key="item.idx"
      >
        <v-col cols="12" class="text-center">
          <div class="text-h5 font-weight-medium" style="word-break: Keep-all">
            {{ item.title }}
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-img
            :src="item.src"
            contain
            width="600"
            transition="scroll-y-reverse-transition"
          />
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
        idx: 1,
        src: require("../assets/examples/GCNConv.png"),
        title: "The Convolution Layer of GCN",
      },
      {
        idx: 2,
        src: require("../assets/examples/HGNNConv.png"),
        title: "The Convolution Layer of HGNN",
      },
      {
        idx: 3,
        src: require("../assets/examples/GATConv.png"),
        title: "The Convolution Layer of GAT",
      },
      {
        idx: 4,
        src: require("../assets/examples/HGNNPConv.png"),
        title: "The Convolution Layer of HGNN+",
      },
    ],
  }),
};
</script>
