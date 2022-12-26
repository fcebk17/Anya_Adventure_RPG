var audio = document.getElementById("myAudio");
audio.volume = 0.2;
audio.currentTime = 180;  // 跳到最後五秒
audio.play();  // 播放
var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["玩扮家家酒","洋芋片","找爸比喝汽水","跟馬麻去逛逛"];
var text_string = ["馬麻說我有好好去上學，可以給我一些好吃或好玩的東西，還是要玩扮家家酒呢？欸咦！？爸比去哪裡了，好想他鴨QWQ"];

$('body').css('background-image','url(/img/yoraWard.jpg)');
function spaceEvent(e) {
    switch (e.keyCode) {
    case 32:
        if (counter == 0){
            dialog();
            counter++;
        } 
        //content 2
        else if(counter == 1){
            content();
            counter++;
        }
        //button 3/4/5/6
        else if(counter > 1 && counter <=5){
            button(counterButton);
            counter++;
        }
        break;
    }
}
//頁面1
function start(){
    $('body').css('background-image','url(/img/yoraWard.jpg)');
    console.log("start");
}

//頁面2(對話框)
function dialog(){
    var image=document.getElementById("dialog");
    image.setAttribute("src", "/img/dialogAnya.png");
}
//對話文字
function content(){
    //var pNode = document.getElementById("content");
    const pNode = document.getElementById("text");
    //console.log(pNode);
    //const text = document.createTextNode(text_string[0]);
    //pNode.appendChild(text);
    pNode.innerHTML = "<p data-text = '" + text_string[0] + "'>" + text_string[0] + "</p>"
}
//new button
//按鈕
function button(choose_button){
    var display = document.getElementById("display");
    display.innerHTML += "<a href = '/section2'><button id = 'button" + parseInt(counterButton+1) + "' class = 'button" + parseInt(counterButton+1) +"'>" +"<span class='ansbt'>"+ choose_button_value[choose_button]+"</span></button></a>";
    counterButton++;
}
body.addEventListener('keydown', spaceEvent, false);