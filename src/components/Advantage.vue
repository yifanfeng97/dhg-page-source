<template>
  <v-container>
    <v-row>
      <v-col class="mb-4 text-h3 text-center" cols="12">
          Our Advantages
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo_DHG.svg')"
          class="my-3"
          contain
          max-height="200"
        />
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
        "idx": 1,
        "title": "Support High-Order Message Passing",
        "content": "The details"
      },
      {
        "idx": 2,
        "title": "Share Ecosystem with Pytorch",
        "content": "The details of the DHG ecosystem are shared with Pytorch. This allows for the use of Pytorch in the DHG ecosystem."
      },
      {
        "idx": 3,
        "title": "Powerful API for desiging GNNs and HGNNs",
        "content": "The details"
      },
      {
        "idx": 4,
        "title": "Structure Visualization of Graphs and Hypergraphs",
        "content": "The details"
      },
      {
        "idx": 5,
        "title": "Bridge the Gap between Graphs and Hypergraphs",
        "content": "The details"
      },
      {
        "idx": 6,
        "title": "Split the Structure and Trainable Parameters",
        "content": "The details"
      },
      {
        "idx": 7,
        "title": "Comprehensive and Flexible",
        "content": "Existing Datasets and Models. Random Graph/Hypergraph Generator"
      },
      {
        "idx": 8,
        "title": "Auto-ML Support",
        "content": "The details"
      }
    ]
  }),
};
</script>
