<template>
    <v-col cols="6">
        <v-card
        v-for="card in cards"
        :key="card.id"
        elevation="5"
        outlined
        color="#FFFDE7"
        >
            <v-card-title style="color: var(--main-color)">{{ card.title }}</v-card-title>

            <v-toolbar color="#FFFDE7" elevation="0">
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
            <v-toolbar color="#FFFDE7" elevation="0">
                <v-spacer></v-spacer>
                <v-btn dark style="background-color: var(--main-color)">
                    編集
                    <v-icon>mdi-application-edit</v-icon>
                </v-btn>
                <v-btn dark style="background-color: var(--main-color)">
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
