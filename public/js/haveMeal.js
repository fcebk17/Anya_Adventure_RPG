var audio = document.getElementById("myAudio");
audio.currentTime = 51;  // 跳到最後五秒
audio.volume = 0.5;
audio.play();  // 播放
var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["生魚片","牛肉麵","芒果冰","水餃"];
var text_string = ["算數學到肚子好餓鴨！終於可以休息了～爸爸今天不煮飯問我要吃什麼，那我們要去吃什麼呢（好興奮⌓‿⌓)"];

$('body').css('background-image','url(/img/haveMeal.jpg)');
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
    $("#button1").click(function(){
        $("#modaltitle").html("舶食日式丼飯、串燒");
        $('#myiframe').attr('src','https://reurl.cc/06lGrA');
        $('#myModal').modal('show');
    });
    $("#button2").click(function(){
        $("#modaltitle").html("勝 麻辣 - 勝面基隆店");
        $('#myiframe').attr('src','https://reurl.cc/VRQgdY')
        $('#myModal').modal('show');
    });
    $("#button3").click(function(){
        $("#modaltitle").html("活力站蒟蒻屋");
        $('#myiframe').attr('src','https://reurl.cc/EXLyE0')
        $('#myModal').modal('show');
    });
    $("#button4").click(function(){
        $("#modaltitle").html("春興水餃店");
        $('#myiframe').attr('src','https://reurl.cc/vm429o')
        $('#myModal').modal('show');
    });
});