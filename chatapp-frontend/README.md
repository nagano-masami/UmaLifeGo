# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Directory structure
Parts & Pages & Globals<br>
ルール：Vuexとのやり取りはPages or Globalsのみが行う<br>
Globals:グローバルに使うコンポーネント郡。ヘッダーやフッター etc..<br>
Pages:ページを構成する役割。HOMEやUSER etc..<br>
Parts:再利用可能なコンポーネント郡。Vuexは使わず基本はpropsからデータを貰い、それを元に処理する<br>
store:Vuexが入る。namespaceを使用し、ドメインごと分ける。一つのファイルが肥大化するのを防ぐ。<br>

.<br>
├── App.vue<br>
├── assets<br>
├── components<br>
│　   ├── globals<br>
│　   │　   ├── Footer.vue<br>
│　   │　   └── Header.vue<br>
│　   ├── pages<br>
│　   │　   ├── EditGist.vue<br>
│　   │　   ├── Gist.vue<br>
│　   │　   ├── Home.vue<br>
│　   │　   └── User.vue<br>
│　   └── parts<br>
│　　　       ├── Comments.vue<br>
│　　　       ├── Editor.vue<br>
│　　　       ├── GistCard.vue<br>
│　　　       ├── IconButton.vue<br>
│　　　       ├── Loading.vue<br>
│　　　       └── UserCard.vue<br>
├── main.js<br>
├── router<br>
│　   └── index.js<br>
└── store<br>
　    ├── index.js<br>
　    ├── modules<br>
　    │　   ├── gists<br>
　    │　   │　   ├── actions.js<br>
　    │　   │　   ├── getters.js<br>
　    │　   │　   ├── index.js<br>
　    │　   │　   ├── mutations.js<br>
　    │　   │　   └── state.js<br>
　    │　   └── users<br>
　    │　　       ├── actions.js<br>
　    │　　       ├── getters.js<br>
　    │　　       ├── index.js<br>
　    │　　       ├── mutations.js<br>
　    │　　       └── state.js<br>
　    └── utils.js<br>