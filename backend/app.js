//ミドルウェア郡の読み込み
//エラーオブジェクトの作成
var createError = require('http-errors');
//expressモジュールを読み込む
var express = require('express');
//ファイルやディエrクトリのパス
var path = require('path');
//ヘッダー情報からクッキーを拾う
var cookieParser = require('cookie-parser');
//HTTPリクエストのログを出力
var logger = require('morgan');

var indexRouter = require('./routes/index');
var deleteRouter = require('./routes/delete');
var loginRouter = require('./routes/login'); //追加
var getHistoriesRouter = require('./routes/getHistories'); //追加
var loadRaceInfoRouter = require('./routes/getRaceInfo'); //追加
var getInitInfoRouter = require('./routes/getInitInfo'); //追加
var deleteRaceInfoRouter = require('./routes/deleteRaceInfo'); //追加
//expressモジュールをインスタンス化
//appという変数名にするのが慣例
var app = express();

// view engine setup
//このexpressインスタンス全体の設定
//描画ファイルを格納するディレクトリパスの設定
app.set('views', path.join(__dirname, 'views'));
//viewsフォルダのテンプレートファイルを使用する際に、拡張子を省略して記述できる
app.set('view engine', 'ejs');

//追加
//CORSの有効化
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
 });

//app.useで使用するミドルウェアのマウント（設定）
//Pathの指定がない場合、全てのリクエストに対して実行される
app.use(logger('dev'));
//JSONを扱うミドルウェア、Express v4.16.0~
app.use(express.json());
//URL解析、クエリパラメータなどを扱う、Express v4.16.0~
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//クライアントにアクセスさせたい静的ファイルが格納されているフォルダ
//_dirname:プロジェクト全体のファイルのリンク
app.use(express.static(path.join(__dirname, 'public')));

//追加
app.use('/', indexRouter);
app.use('/delete', deleteRouter);
app.use('/login', loginRouter);
app.use('/getHistories', getHistoriesRouter);
app.use('/getInitInfo', getInitInfoRouter);
app.use('/getRaceInfo', loadRaceInfoRouter);
app.use('/getRaceInfo', deleteRaceInfoRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 404が発生した場合、nextで次のエラーハンドル処理を呼び出してる？つまりカスタムエラーハンドル処理(64行目)
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // error.ejsで使うローカル変数を定義してる。
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
+
  // render the error page
  res.status(err.status || 500);
  // error.ejsに処理を移す
  res.render('error');
});

module.exports = app;
