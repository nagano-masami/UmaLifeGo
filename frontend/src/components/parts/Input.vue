<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">
        Mark Card
      </h1>
    </v-card-title>
    <v-toolbar elevation="0">
      
      <v-combobox
        :items="places"
        editable
        label="場名"
        hide-details
        class="pa-0"
        overflow
      ></v-combobox>
    
      <v-combobox
        :items="race_no"
        editable
        label="レース番号"
        hide-details
        class="pa-0"
        overflow
      ></v-combobox>

      <v-col cols="12" sm="6" md="4">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
          overflow
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="日付"
              prepend-icon="mdi-calendar"
              hide-details
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
       </v-col>
      
    </v-toolbar>
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
          <v-icon>mdi-update</v-icon>
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
  import DefaultCard from "../globals/DefaultCard.vue";
  import ChipGroup from "../globals/ChipGroup.vue";
  export default {
    name: "Input",
    data () {
      return {
        places: [
          '中山','東京','京都','阪神','福島','新潟','中京','小倉','札幌','函館'
        ],
        race_no: [1,2,3,4,5,6,7,8,9,10,11,12],
        tab: null,
        sizes: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'],
        show1: true,
        show2: true,
      }
    },
    components: {
      DefaultCard,
      ChipGroup
    }
  }
</script>