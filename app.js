let express = require('express');   // 載入express模組
let engine = require('ejs-locals'); // 載入ejs-locals 模組

let app = express();                // 使用express

app.engine('ejs', engine);          
app.set('views', './views');        // 將目的地 folder 設為 views
app.set('view engine', 'ejs');

app.use(express.static('public'));                        // build virtual path
app.use('/js', express.static(__dirname + '/js'));        // build absolute path
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/music', express.static(__dirname + '/music'));


app.get('/', function (req, res) {                      // build router for pages
    res.render('index', {'title': 'Anya大冒險RPG'});    // return index.ejs and title
});

app.get('/loader', function (req, res) {
    res.render('loader', {'title': 'Anya大冒險RPG - 載入中'});
});

app.get('/recapVideo', function (req, res) {
    res.render('recapVideo', {'title': 'Anya大冒險RPG - 前情提要'});
});

app.get('/anyaIntro', function (req, res){
    res.render('anyaIntro', {'title': 'Anya大冒險RPG - 自我介紹'});
});
app.get('/level1', function (req, res){
    res.render('level1', {'title': 'Anya大冒險RPG - 關卡一'});
});

app.listen(3000); // 設定 port 3000
// 要用 axios.get