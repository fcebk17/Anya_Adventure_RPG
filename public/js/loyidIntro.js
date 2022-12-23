var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["考她一題數學(簡單)","準備吃晚餐，詢問安妮亞想吃的東西","考她一題數學(困難)","給她一些東西作為獎勵"];
var text_string = ["我是洛伊德．佛傑，代號名為〈黃昏〉的間諜，唉…突然就被要求組建家庭，多了一個女兒，現在的任務不是殺人，而是陪女兒讀書…好像有點不習慣，話說組織要求她要在學校湊齊8顆星星，看來得讓她變成用功讀書的好孩子……那要她？"];
var href = ["/easyMath", "/haveMeal", "/hardMath", "/loyidAward"];

//偵測空白鍵次數，導入主題跟按鈕
$('body').css('background-image','url(/img/loyidIntro.png)');
function spaceEvent(e) {
    switch (e.keyCode) {
    case 32:
        //forger talk 1
        if (counter == 0){
            dialog();
            counter++;
        } 
        //content 2
        else if(counter <= 1){
            //console.log("content 2");
            content(counter);
            counter++;
        }
        //button 3/4/5/6
        else if(counter > 1 && counter <=5){
            button(counterButton);
            //console.log(counter);
            counter++;        
        }
        break;
    }
}
//頁面1
function start(){
    $('body').css('background-image','url(/img/livingroom.jpg)');
    console.log("start");
}

//頁面2(對話框)
function dialog(){
    var image=document.getElementById("dialog");
    image.setAttribute("src", "/img/dialog.png");
}
function content(counter){
    //var pNode = document.getElementById("content");
    const pNode = document.getElementById("text");
    /*
    if(counter ==1)
        pNode.innerHTML = "<p data-text = '" + text_string[0] + "'>" + text_string[0] + "</p>";
    else if(counter == 2)
        pNode.innerHTML += "<p data-text = '" + text_string[1] + "'>" + text_string[1] + "</p>";
    else if(counter == 3)
        pNode.innerHTML += "<p data-text = '" + text_string[2] + "'>" + text_string[2] + "</p>";
    else
        pNode.innerHTML += "<p data-text = '" + text_string[3] + "'>" + text_string[3] + "</p>";
    */

    pNode.innerHTML = "<p>" + text_string[0] + "</p>";
    }   

//new button
//按鈕
function button(choose_button){
    console.log("counter",counterButton);
    var display = document.getElementById("display");

    display.innerHTML += "<a href = '"+ href[counterButton] +"'><button id = 'button" + parseInt(counterButton+1) + "' class = 'button" + parseInt(counterButton+1) +"'>" +"<span class='ansbt'>"+ choose_button_value[choose_button]+"</span></button></a>";
    counterButton++;
}

body.addEventListener('keydown', spaceEvent, false);
