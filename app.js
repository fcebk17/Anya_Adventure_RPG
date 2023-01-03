const express = require('express');   // 載入express模組
const engine = require('ejs-locals'); // 載入ejs-locals 模組
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();                // 使用express

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://fcebk17:admin@cluster0.ljwk5az.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let user_data;

app.engine('ejs', engine);          
app.set('views', './views');        // 將目的地 folder 設為 views
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));                        // build virtual path
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/music'));

app.get('/', function (req, res) {                      // build router for pages
    res.render('index', {'title': 'Anya大冒險RPG'});    // return index.ejs and title
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        let user_id = Date.now();
        let data = { user_id: user_id};
        user_data = data;
        console.log(user_data);
        fs.writeFileSync('userStory.json', JSON.stringify(data)); // switch to no sync function
        
        let myobj = { user_id: user_id, star1: 0, star2: 0, star3: 0, star4: 0, star5: 0, star6: 0, star7: 0, star8: 0}
        dbo.collection("user_story").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
});

app.post('/saveUserStory', function (req, res) {
    let dt;
    if ( user_data === undefined || user_data === null  )
        dt = JSON.parse(fs.readFileSync('userStory.json'));
    else dt = user_data;
    const query = dt.user_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        const myquery = { user_id: query };
        const data = req.body;
        const newvalues = { $set: data };
        dbo.collection("user_story").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
});

app.get('/getUserStory', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        let dt;
        if (err) throw err;
        if ( user_data === undefined || user_data === null )
            dt = JSON.parse(fs.readFileSync('userStory.json'));
        else dt = user_data;
        const userId = dt.user_id;
        const dbo = db.db('mydb');
        const query = { user_id: userId };
        dbo.collection("user_story").find(query).toArray(function (err, result) {
          if (err) throw err;
          res.send(result);
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
    res.render('loyidAward', {'title': 'Anya大冒險RPG - 安妮亞回答問題 - 把拔給獎勵'});
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

app.get('/enjoyMusic', function (req, res){
    res.render('enjoyMusic', {'title': 'Anya大冒險RPG - 聽音樂放鬆'});
});

app.get('/yorAward', function (req, res){
    res.render('yorAward', {'title': 'Anya大冒險RPG - 安妮亞回答問題 - 馬麻給獎勵'});
});

app.get('/playWhere', function (req, res){
    res.render('playWhere', {'title': 'Anya大冒險RPG - 彭德去哪玩鴨'});
});

app.get('/section1', function (req, res){
    res.render('section1', {'title': 'Anya大冒險RPG - 段落一'});
});

app.get('/section2', function (req, res){
    res.render('section2', {'title': 'Anya大冒險RPG - 段落二'});
});

app.get('/section3', function (req, res){
    res.render('section3', {'title': 'Anya大冒險RPG - 段落二'});
});

app.get('/levelMap', function (req, res){
    res.render('levelMap', {'title': 'Anya大冒險RPG - 關卡地圖'});
});
app.get('/starExam', function (req, res){
    res.render('starExam', {'title': 'Anya大冒險RPG - 星力考驗'});
});
app.get('/starExamPlus', function (req, res){
    res.render('starExamPlus', {'title': 'Anya大冒險RPG - 星力考驗(Plus+)'});
});
app.get('/finalPage', function (req, res){
    res.render('finalPage', {'title': 'Anya大冒險RPG - 結局'});
});
app.get('/finalVideo', function (req, res){
    res.render('finalVideo', {'title': 'Anya大冒險RPG - 結局影片'});
});
app.listen(3000); // 設定 port 3000
// 要用 axios.get