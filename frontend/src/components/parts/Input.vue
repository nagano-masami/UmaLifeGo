<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">
        Mark Card
      </h1>
    </v-card-title>

    <default-bar />
    
    <v-toolbar elevation="0">
      <v-spacer></v-spacer>
      <v-text-field
        label="投資額"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        value="123456789"
        readonly
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-text-field
        label="収支"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2"
        value="123456789"
        readonly
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn-toggle color="primary" group>
        <v-btn>
          保存
          <v-icon>mdi-content-save-check</v-icon>
        </v-btn>
        <v-btn>
          削除
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>

    <v-tabs
      v-model="tab"
      color="#238842"
      grow
    >
      <v-tab> ボックス </v-tab>
      <v-tab> フォーメーション </v-tab>
      <v-tab> 通常 </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item>
        <default-card />
        <chip-group />
      </v-tab-item>

      <v-tab-item>
        <default-card />
        <v-card-text>1着目・1頭目</v-card-text>
        <chip-group />
        <v-card-text>2着目・2頭目</v-card-text>
        <chip-group />
        <v-card-text>3着目・3頭目</v-card-text>
        <chip-group />
      </v-tab-item>

      <v-tab-item>
        <default-card />
        <v-card-text>1着目・1頭目</v-card-text>
        <chip-group />
        <v-card-text>2着目・2頭目</v-card-text>
        <chip-group />
        <v-card-text>3着目・3頭目</v-card-text>
        <chip-group />
      </v-tab-item>
    </v-tabs-items>
  </v-card>

</template>

<script>
  import DefaultBar from "../globals/DefaultBar.vue";
  import DefaultCard from "../globals/DefaultCard.vue";
  import ChipGroup from "../globals/ChipGroup.vue";
  export default {
    name: "Input",
    data () {
      return {
        tab: null,
        sizes: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'],
        show1: true,
        show2: true,
      }
    },
    components: {
      DefaultCard,
      ChipGroup,
      DefaultBar
    }
  }
</script>