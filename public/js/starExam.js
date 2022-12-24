var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["間諜過家家","我的間諜家庭","間諜家家酒","間諜佛傑"];
var text_string = ["SPY×FAMILY，是由一名身分為間諜的男性，和另一位實際工作是殺手的女性，以及一個能讀心的超能力者女孩組成，三人互相隱瞞真實身分所組成的虛假家庭間的家庭喜劇。請問此作品的台灣翻譯為何？"];

$('body').css('background-image','url(/img/starExam.png)');
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
    image.setAttribute("src", "/img/dialogAnya.png");
}
//對話文字
function content(){
    //var pNode = document.getElementById("content");
    const pNode = document.getElementById("text");
    //console.log(pNode);
    //const text = document.createTextNode(text_string[0]);
    //pNode.appendChild(text);
    pNode.innerHTML = "<p>" + text_string[0] + "</p>";
}
//new button
//按鈕

function button(choose_button){
    var display = document.getElementById("display");
    display.innerHTML += "<button id = 'button" + parseInt(counterButton+1) + "' class = 'button" + parseInt(counterButton+1) +"'>" +"<span class='ansbt'>"+ choose_button_value[choose_button]+"</span></button>";
    counterButton++;
}

body.addEventListener('keydown', spaceEvent, false);

$(document).on('click', 'button', function(){
    $("#button3").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("您獲得一顆星星⭐<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/levelMap';
        });
    });
    $("#button1").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/levelMap';
        });
    });
    $("#button2").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/levelMap';
        });
    });
    $("#button4").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/levelMap';
        });
    });
});