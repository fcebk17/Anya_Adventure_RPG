var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["9","10","11","12"];
var text_string = ["爸爸問我3+8=？我手指頭凹不出來，那要回答多少呢？可惡！為什麼拔爸不用算，嗚嗚～不能用讀心術……"];

$('body').css('background-image','url(/img/livingroom.jpg)');
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
    $('body').css('background-image','url(/img/livingroom.jpg)');
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
    const text = document.createTextNode(text_string[0]);
    pNode.appendChild(text);
}
//new button
//按鈕
function button(choose_button){
    var MyDiv = document.getElementById(choose_button_string[choose_button]);
    MyDiv.textContent = choose_button_value[choose_button];
    counterButton++;
}
body.addEventListener('keydown', spaceEvent, false);
