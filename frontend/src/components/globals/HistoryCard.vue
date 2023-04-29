<template>
    <v-col cols="6">
        <v-card
        v-for="raceInfo in historyCard"
        :key="raceInfo.betting_ticket_id"
        elevation="5"
        outlined
        >
            <v-card-title 
            v-text="raceInfo.ticket_selection_j_name"
            ></v-card-title>

            <v-toolbar elevation="0">
                <v-text-field
                    :label="card.label1"
                    :value="raceInfo.purchase_total_amount"
                    readonly
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-text-field
                    :label="card.label2"
                    :value="raceInfo.refund_amount"
                    readonly
                ></v-text-field>
            </v-toolbar>
            <v-toolbar elevation="0">
                <v-spacer></v-spacer>
                <v-btn @click="edit(raceInfo)">
                    編集
                    <v-icon>mdi-application-edit</v-icon>
                </v-btn>
                <v-btn @click="deletion(raceInfo)">
                    削除
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
    </v-col>
</template>

<script>
import axios from "axios";
export default {
  name: "HistoryCard",
  data: () => {
    return {
        card: [
            {
                
                label1: '投資額',
                label2: '収支',
            }
        ]
        }
    },
    props: ['historyCard'],
    methods: {
        updatedData() {
            this.$emit('update-history-card');
        },

        edit(raceInfo) {
            raceInfo.id;

        },

        async deletion(raceInfo) {

        try {
            const result = await axios.post("http://localhost:3000/deleteRaceInfo",raceInfo.betting_ticket_id);
            if (result.data === "OK") {
            // 削除に成功した場合履歴の初期化
            this.messages = [];
            } else {
            // 削除に失敗した場合
            console.log("削除に失敗しました。");
            }
        } catch {
            alert("処理に失敗しました。");
        }
        }

    }
}
</script>
