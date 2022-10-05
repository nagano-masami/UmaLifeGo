<template>
  <v-container>
    <v-row class="text-center" style="height:80vh">
      <v-col cols="12">
        <v-img v-bind:src="require('../../../public/img/t1.png')"></v-img>
        <v-img v-bind:src="require('../../../public/img/t2.png')"></v-img>
        <v-img v-bind:src="require('../../../public/img/t3.png')"></v-img>
        <v-img v-bind:src="require('../../../public/img/t4.png')"></v-img>
        <v-img v-bind:src="require('../../../public/img/t5.png')"></v-img>
        <v-img v-bind:src="require('../../../public/img/t6.png')"></v-img>
        <v-toolbar color="#BBDEFB" light>
          <v-toolbar-title>Top Page</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab>Tab 1</v-tab>
              <v-tab>Tab 2</v-tab>
              <v-tab>Tab 3</v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        <!-- v-card内をスクロールさせるためにclass="overflow-y-auto"を指定 -->
        <v-card height="100%" width="100%" class="overflow-y-auto">
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>
