<template>
    <v-card
        color="basil"
        flat
    >
        <v-card-text>ここから選択してください。</v-card-text>
        <v-toolbar elevation="0" background-color="transparent" color="basil">
        <v-combobox
            :items="formula"
            editable
            label="式別"
            hide-details
            class="pa-0"
            overflow
        ></v-combobox>
        <v-combobox
            :items="amount"
            editable
            label="1点あたりの金額"
            hide-details
            class="pa-0"
            overflow
        ></v-combobox>
        <v-combobox
            :items="unit"
            editable
            label="単位"
            hide-details
            class="pa-0"
            overflow
        ></v-combobox>
        </v-toolbar>
        <v-chip-group
        active-class="green darken-4--text text--accent-4"
        multiple
        >
            <v-chip
                v-for="size in sizes"
                :key="size"
                :value="size"
            >
                {{ size }}
            </v-chip>
        </v-chip-group>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      formula: ['枠連','馬連','馬単','ワイド','3連複','3連単'],
      unit: ['万円','千円','百円'],
      amount: [30,20,10,5,4,3,2,1],
      sizes: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18']
    }
  },
}
</script>

