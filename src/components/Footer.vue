<template>
  <v-footer color="primary" dark padless>
    <v-container fluid>
      <v-row class="align-center" no-gutters>
        <v-col cols="12" class="py-1">
          <div class="text-center pb-2 text-h6">
            <strong>Deep HyperGraph</strong>
          </div>
          <div class="text-center">
            iMoon-Lab. Copyright © 2022 -
            {{ new Date().getFullYear() }}, All rights reserved.
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center py-1">
          <v-btn
            class="mx-3"
            v-for="item in icons"
            :key="item.idx"
            :href="item.link"
            icon
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "MyFooter",

  data: () => ({
    icons: [
      {
        idx: 0,
        icon: "mdi-home",
        link: "https://www.moon-lab.tech/",
      },
      {
        idx: 1,
        icon: "mdi-email",
        link: "mailto:evanfeng97@qq.com",
      },
      {
        idx: 2,
        icon: "mdi-source-repository",
        link: "https://github.com/yifanfeng97/dhg-page-source",
      },
    ],
  }),
};
</script>
