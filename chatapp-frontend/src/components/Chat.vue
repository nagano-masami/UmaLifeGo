<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" style="height:80vh">
        <v-toolbar color="#BBDEFB" light>
          <v-toolbar-title>Welcome ChatApp</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="deleteRecord">Delete Old Chat</v-btn>
        </v-toolbar>
        <!-- v-card内チャットをスクロールさせるためにclass="overflow-y-auto"を指定 -->
        <v-card height="90%" width="100%" class="overflow-y-auto">
          <!-- チャットの表示 -->
          <v-list two-line subheader>
            <v-list-item v-for="(message,index) in messages" :key="index">
              <v-list-item-avatar>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="message.user_id"></v-list-item-title>
                <v-list-item-subtitle v-text="message.message"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="message.date_time"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset v-if="messages.length > 0"></v-divider>
          </v-list>
        </v-card>
        <v-card height="10%" width="100%" color="#B2DFDB" class="pa-sm-3 pa-lg-3 pa-md-4">
          <v-text-field
            v-model="message"
            solo
            clearable
            append-outer-icon="mdi-send"
            @click:append-outer="sendMessage"
            @keyup.enter="sendMessage"
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import io from "socket.io-client";
import axios from "axios";

export default {
  name: "Chat",
  data: () => ({
    message: "",
    messages: [],
    userId: "",
    socket: "",
  }),
  methods: {
    //チャットを投稿する処理
    sendMessage() {
      this.userId = this.$store.state.userId;
      const date = new Date();
      const date_time = `${date.getFullYear().toString()}-${(
        "00" + (date.getMonth() + 1).toString()
      ).slice(-2)}-${("00" + date.getDate().toString()).slice(-2)} ${(
        "00" + date.getHours().toString()
      ).slice(-2)}:${("00" + date.getMinutes().toString()).slice(-2)}:${(
        "00" + date.getSeconds().toString()
      ).slice(-2)}`;

      // Socketを利用してサーバと通信を行う。
      this.socket.emit("SEND_MESSAGE", {
        user_id: this.userId,
        message: this.message,
        date_time: date_time,
      });
      this.message = "";
    },
    // 投稿したチャットの削除
    async deleteRecord() {
      try {
        const result = await axios.post("http://localhost:3000/delete");
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
    },
  },

  async mounted() {
    this.socket = io("localhost:3000");

    // 初期表示時にDBのレコードを取得する
    try {
      const result = await axios.post("http://localhost:3000/getHistories");
      if (result.data !== "NG") {
        // 履歴の取得に成功した場合
        this.messages = result.data;
      } else {
        // 履歴の取得に失敗した場合
        console.log("履歴の表示に失敗しました。");
      }
    } catch {
      alert("処理に失敗しました。");
    }

    // 投稿されたデータの取得
    this.socket.on("MESSAGE", (data) => {
      this.messages = data;
    });
  },
};
</script>

<style scoped>
/* CSSでv-list-itemを指定する場合、下記の指定の仕方ができる。 */
.v-list-item__content {
  text-align: left;
}
</style>
