<template>
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
</template>

<script>
export default {
    data () {
        return {
            places: [
            '中山','東京','京都','阪神','福島','新潟','中京','小倉','札幌','函館'
            ],
            race_no: [1,2,3,4,5,6,7,8,9,10,11,12],
        }
    }
}
</script>