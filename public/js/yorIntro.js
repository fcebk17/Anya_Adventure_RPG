var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["找安妮亞在哪","遛狗","聽音樂放鬆","給女兒獎勵"];
var text_string = ["我是伯林特市政府的女性公務員約兒•佛傑，其實真正的職業是殺手，代號〈睡美人〉，但也是安妮亞的媽媽，話說安妮亞去哪兒了!?不過剛工作完確實有點累...該做什麼呢?"];
var href = ["/anyaOS", "/WalkTheDog", "/enjoyMusic", "/yorAward"];

$('body').css('background-image','url(/img/youIntro.png)');
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
//頁面(對話框)
function dialog(){
    var image=document.getElementById("dialog");
    image.setAttribute("src", "/img/dialog-yor.png");
}
//對話文字
function content(){
    //var pNode = document.getElementById("content");
    const pNode = document.getElementById("text");
    //const text = document.createTextNode(text_string[0]);
    //pNode.appendChild(text);
    pNode.innerHTML = "<p>" + text_string[0] + "</p>";
}
//new button
//按鈕
function button(choose_button){
    var display = document.getElementById("display");

    display.innerHTML += "<a href = '"+ href[counterButton] +"'><button id = 'button" + parseInt(counterButton+1) + "' class = 'button" + parseInt(counterButton+1) +"'>" +"<span class='ansbt'>"+ choose_button_value[choose_button]+"</span></button></a>";
    counterButton++;
}
body.addEventListener('keydown', spaceEvent, false);
