var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["潮境公園","外木山沙灘","忘憂谷","海洋廣場"];
var text_string = ["汪....汪汪....汪.......................(我是佛傑家的寵物，可以背著安妮亞行動，有預知未來能力。可以告訴我哪裡很好玩嗎!?最喜歡跟爸爸媽媽一起出門了!還有跟安妮亞去冒險<3)"];

$('body').css('background-image','url(/img/bondIntro.png)');
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
//頁面2(對話框)
function dialog(){
    var image=document.getElementById("dialog");
    image.setAttribute("src", "/img/dialog-pond.png");
}
//對話文字
function content(){
    //var pNode = document.getElementById("content");
    const pNode = document.getElementById("text");
    pNode.innerHTML = "<p>" + text_string[0] + "</p>";
}
//new button
//按鈕
function button(choose_button){
    var MyDiv = document.getElementById(choose_button_string[choose_button]);
    MyDiv.textContent = choose_button_value[choose_button];
    counterButton++;
}
body.addEventListener('keydown', spaceEvent, false);
