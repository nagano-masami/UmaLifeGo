<template>
    <v-col cols="6">
        <v-card
        v-for="raceInfo in historyCard"
        :key="raceInfo.betting_ticket_id"
        elevation="5"
        outlined
        color="#FFFDE7"
        >
            <v-card-title style="color: var(--main-color)">{{ raceInfo.ticket_class_j_name }}</v-card-title>

            <v-toolbar color="#FFFDE7" elevation="0">
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
            <v-toolbar color="#FFFDE7" elevation="0">
                <v-spacer></v-spacer>
                <v-btn dark style="background-color: var(--main-color)" @click="edit(raceInfo)">
                    編集
                    <v-icon>mdi-application-edit</v-icon>
                </v-btn>
                <v-btn dark style="background-color: var(--main-color)" @click="deletion(raceInfo)">
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
    props: ['historyCard','defaultBar'],
    methods: {

        edit(raceInfo) {

            this.$store.commit('setBettingTicketId', raceInfo.betting_ticket_id);
            this.$emit('editClickAction');
            this.$router.push('/input');
        },

        async deletion(raceInfo) {
            
            const param = {
              betting_ticket_id: raceInfo.betting_ticket_id,
              id:this.$store.state.id
            };

        try {
            const result = await axios.post("http://localhost:3000/deleteRaceInfo",param);
            if (result.data === "OK") {
                // 削除に成功した場合履歴の初期化
                
                this.$emit('update-history-card');
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
