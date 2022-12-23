var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["糖果","胡蘿蔔汁","看電視","花生"];
var text_string = ["馬麻給我一些東西作為讀書的獎勵，好像很不錯….要選擇什麼東西呢？有點猶豫耶……"];

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