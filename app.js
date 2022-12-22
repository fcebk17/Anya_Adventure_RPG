const express = require('express');   // 載入express模組
const engine = require('ejs-locals'); // 載入ejs-locals 模組

const app = express();                // 使用express

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://fcebk17:admin@cluster0.ljwk5az.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

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
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        let user_id = Date.now();
    
        let myobj = { user_id: user_id, star1: false, star2: false, star3: false, star4: false, star5: false, star6: false, star7: false, star8: false,  }
        dbo.collection("user_story").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
});

app.get('/loader', function (req, res) {
    res.render('loader', {'title': 'Anya大冒險RPG - 載入中'});
});

app.get('/recapVideo', function (req, res) {
    res.render('recapVideo', {'title': 'Anya大冒險RPG - 前情提要'});
});

app.get('/anyaIntro', function (req, res){
    res.render('anyaIntro', {'title': 'Anya大冒險RPG - 安妮亞自我介紹'});
});
app.get('/loyidIntro', function (req, res){
    res.render('loyidIntro', {'title': 'Anya大冒險RPG - 洛伊德自我介紹'});
});

app.get('/easyMath', function (req, res){
    res.render('easyMath', {'title': 'Anya大冒險RPG - 安妮亞回答問題 - 算數學(easy)'});
});
app.get('/hardMath', function (req, res){
    res.render('hardMath', {'title': 'Anya大冒險RPG - 安妮亞回答問題 - 算數學(hard)'});
});
app.get('/haveMeal', function (req, res){
    res.render('haveMeal', {'title': 'Anya大冒險RPG - 安妮亞回答問題 - 吃飯'});
});
app.get('/loyidAward', function (req, res){
    res.render('loyidAward', {'title': 'Anya大冒險RPG - 安妮亞回答問題 - 給獎勵'});
});

app.get('/findAnyaGame', function (req, res){
    res.render('findAnyaGame', {'title': 'Anya大冒險RPG - 找安妮亞小遊戲'});
});
app.get('/yorIntro', function (req, res){
    res.render('yorIntro', {'title': 'Anya大冒險RPG - 約兒自我介紹'});
});
app.get('/anyaOS', function (req, res){
    res.render('anyaOS', {'title': 'Anya大冒險RPG - 安妮亞OS'});
});
app.get('/bondIntro', function (req, res){
    res.render('bondIntro', {'title': 'Anya大冒險RPG - 彭德自我介紹'});
});
app.get('/WalkTheDog', function (req, res){
    res.render('WalkTheDog', {'title': 'Anya大冒險RPG - 遛狗'});
});
app.listen(3000); // 設定 port 3000
// 要用 axios.get