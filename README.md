# README
<br>

## :globe_with_meridians:アプリURL
http://localhost:8080/ <br>
http://localhost:3000/

<br>

## :four_leaf_clover: 機能一覧
|  実装内容  |  追加説明  |
| ---- | ---- |
|  ログイン<br>  |  IDとパスワードによるログイン機能があること<br>  |
|  チャット<br>  |  ユーザーが投稿、投稿の削除が可能なこと  |
|  データ管理<br>  |  対象データの入力、編集、削除が可能なこと<br>  |
|  チャート表示<br>  |  対象データをチャート表示できること<br>  |
|  <br>  |  <br>  |

<br>

## EWireFrame
https://www.figma.com/files/project/61442384/Team-project?fuid=1129214728039177988

<br>

## ER図
CP_TOOL_WEB\backend\ERdiagram.drawio

<br>

## 追加を予定している機能
|  実装内容  |  追加説明  |
| ---- | ---- |
|  ユーザ改廃<br>  |  ユーザーの照会、登録、更新、削除が可能なこと<br>  |
|  権限管理<br>  |  一般ユーザーと管理者ユーザーなど権限の付与ができること<br>  |
|  検索<br>  |  過去のデータを検索できること<br>  |
|  表示選択<br>  |  表示内容の選択（データの絞り込み）が選べること<br>  |

<br>

## :computer:使用技術

WSL2<br>
Ubuntu 20.04.1 LTS<br>
Node.js 16.14.2<br>
npm 8.11.0<br>
@vue/cli 5.0.4<br>
vuex 2.x (3.xはvuetifyに対応していないため)<br>
MySQL Ver 8.0.28-0ubuntu0.20.04.3 for Linux on x86_64 ((Ubuntu))<br>

## :Library:技術詳細

Vue.js<br>
    VueCLI…Vue.js向けのアプリケーション開発環境セットアップなどの機能を提供するCLIツール<br>
    vuetify…Vueのアプリケーションのデザインを容易に整えてくれるライブラリ<br>
    vuex…vue全体で利用できるデータストアを管理できるライブラリ<br>
    vuex-persistedstate…vuexの値をローカルストレージに保存するプラグイン<br>
    socket.io-client…socket.ioでサーバへ接続するためのクライアント用ライブラリ<br>
Node.js<br>
    express…Node.jsで使用するWebアプリのフレームワーク<br>
    socket.io…Webのリアルタイム通信を可能にするライブラリ<br>
    mysql…MySQLをNode.jsから扱えるライブラリ<br>

環境構築参考<br>

Node.js を Linux 用 Windows サブシステム (WSL2) にインストールする<br>
https://docs.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-wsl

Vue.js+Node.jsを利用したチャットアプリの作成<br>
https://qiita.com/tky_st/items/03faba81129e4877c3ea#%E6%AC%A1%E3%81%ABmysql%E3%81%AE%E5%88%9D%E6%9C%9F%E8%A8%AD%E5%AE%9A%E3%82%92%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%99
<br>
vue  https://github.com/TakayaTanuki/chatapp-frontend
node https://github.com/TakayaTanuki/chatapp-backend

