<template>
    <v-col cols="6">
        <v-card
        v-for="card in cards"
        :key="card.id"
        elevation="5"
        outlined
        >
            <v-card-title 
            v-text="card.title"
            ></v-card-title>

            <v-toolbar elevation="0">
                <v-text-field
                    :label="card.label1"
                    :value="card.value1"
                    readonly
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-text-field
                    :label="card.label2"
                    :value="card.value2"
                    readonly
                ></v-text-field>
            </v-toolbar>
            <v-toolbar elevation="0">
                <v-spacer></v-spacer>
                <v-btn>
                    編集
                    <v-icon>mdi-application-edit</v-icon>
                </v-btn>
                <v-btn>
                    削除
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
    </v-col>
</template>

<script>
export default {
  name: "HistoryCard",
  data: () => {
    return {
        cards: [
            {
                id:1,
                title: 'フォーメーション',
                label1: '投資額',value1: 123456,
                label2: '収支',value2: 654321,
            },
            {
                id:2,
                title: 'ボックス',
                label1: '投資額',value1: 123456,
                label2: '収支',value2: 654321,
            },
            {
                id:3,
                title: 'フォーメーション',
                label1: '投資額',value1: 123456,
                label2: '収支',value2: 654321,
            },
        ]
    }},
}
</script>
