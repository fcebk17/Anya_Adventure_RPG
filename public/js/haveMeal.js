var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["培根蛋炒飯","牛肉麵","蛋包飯","義大利麵"];
var text_string = ["算數學到肚子好餓鴨！終於可以休息了～爸爸今天不煮飯問我要吃什麼，那我們要去吃什麼呢（好興奮⌓‿⌓)"];

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
    //console.log("start");
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
