var audio = document.getElementById("myAudio");
audio.volume = 1;
audio.play();  // 播放
var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["9","10","11","12"];
var text_string = ["爸爸問我8+21/7=?哇…怎麼還有除法@@，那要回答多少呢？可惡！為什麼拔爸不用算，嗚嗚～不能用讀心術……"];

$('body').css('background-image','url(/img/hardMath.png)');
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
            $.ajax({
                url: '/saveUserStory',
                type: 'POST',
                data: {star2: 1}
            });
            window.location.href = '/haveMeal';
        });
    });
    $("#button1").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/haveMeal';
        });
    });
    $("#button2").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/haveMeal';
        });
    });
    $("#button4").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/haveMeal';
        });
    });
});