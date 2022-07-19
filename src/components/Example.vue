<template>
  <v-container>
    <v-row>
      <v-col class="mb-4 text-h3 text-center" cols="12">
          Examples
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
  name: "MyExample",

  data: () => ({}),
};
</script>
