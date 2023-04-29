<template>
    <v-card
        flat
    >
        <v-card-text>ここから選択してください。</v-card-text>
        <v-toolbar elevation="0">
        <v-combobox
            :items="formula"
            editable
            label="式別"
            hide-details
            class="pa-0"
            overflow
            v-model="defaultCard.selectFormula"
            @input="updatedData"
        ></v-combobox>
        <v-combobox
            :items="amount"
            editable
            label="1点あたりの金額"
            hide-details
            class="pa-0"
            overflow
            v-model="defaultCard.selectAmount"
            @input="updatedData"
        ></v-combobox>
        <v-combobox
            :items="unit"
            editable
            label="単位"
            hide-details
            class="pa-0"
            overflow
            v-model="defaultCard.selectUnit"
            @input="updatedData"
            item-value="digit"
            
        ></v-combobox>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    props: ['defaultCard'],
    methods: {
        updatedData() {
            this.$emit('update-default-card', this.defaultCard)
        },
    },
    data () {
        return {
            formula: ['枠連','馬連','馬単','ワイド','3連複','3連単'],
            unit: [
                { text: '万円' , digit: 10000 },
                { text: '千円', digit: 1000 },
                { text: '百円', digit: 100 }
            ],
            amount: [30, 20, 10, 5, 4, 3, 2, 1],
            
        }
    }
}
</script>

