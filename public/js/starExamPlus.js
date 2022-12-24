var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["009","007","005","003"];
var text_string = ["我是一個天才少女，擁有讀心能力，能隨時聽到你的內心深處那股幽怨(ㄟ~~不是，但是呢!我是個實驗體，但忽然忘記是幾號ㄟ..."];

$('body').css('background-image','url(/img/starExamPlus.png)');
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
    $("#button2").click(function(){
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
    $("#button4").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/levelMap';
        });
    });
    $("#button3").click(function(){
        $(".getStar").css('display','block');
        $(".getStar").html("回答錯誤QAQ<br>點擊畫面繼續遊戲 . . .");
        $('.getStar').click(function() {
            window.location.href = '/levelMap';
        });
    });
});