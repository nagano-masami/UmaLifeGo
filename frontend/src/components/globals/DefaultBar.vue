<template>
    <v-toolbar elevation="0">

      <v-col cols="12" sm="6" md="4">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="defaultBar.selectDate"
          transition="scale-transition"
          offset-y
          min-width="auto"
          overflow
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="defaultBar.selectDate"
              label="日付"
              prepend-icon="mdi-calendar"
              hide-details
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="defaultBar.selectDate"
            @input="updatedData"
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
              @click="$refs.menu.save(defaultBar.selectDate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
       </v-col>
      
      <v-combobox
        :items="places"
        v-model="defaultBar.selectPlace"
        @input="updatedData"
        editable
        label="場名"
        hide-details
        class="pa-0"
        overflow
      ></v-combobox>
    
      <v-combobox
        :items="race_no"
        v-model="defaultBar.selectRace_no"
        @input="updatedData"
        editable
        label="レース番号"
        hide-details
        class="pa-0"
        overflow
      ></v-combobox>
      
    </v-toolbar>
</template>

<script>
export default {
  props: ['defaultBar'],
    methods: {
    updatedData() {
            this.$emit('update-default-bar', this.defaultBar)
        },
  },
    data () {
        return {
            places: [
            '中山','東京','京都','阪神','福島','新潟','中京','小倉','札幌','函館'
            ],
            race_no: [1,2,3,4,5,6,7,8,9,10,11,12],
            menu:false
        }
    }
}
</script>