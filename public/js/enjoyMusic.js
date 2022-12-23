var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["星野源-喜劇","Mixed Nuts","yama-色彩","SOUVENIR"];
var text_string = ["該聽甚麼音樂好呢~~~"];

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
        $("#modaltitle").html("星野源 - 喜劇");
        $('#myiframe').attr('src','https://www.youtube.com/embed/nRKJBpFFsuI');
        $('#myModal').modal('show');
    });
    $("#button2").click(function(){
        console.log("mixed nuts");
        $("#modaltitle").html("Mixed Nuts");
        $('#myiframe').attr('src','https://www.youtube.com/embed/U_rWZK_8vUY')
        $('#myModal').modal('show');
    });
    $("#button3").click(function(){
        $("#modaltitle").html("yama - 色彩");
        $('#myiframe').attr('src','https://www.youtube.com/embed/4kNt62PptEQ')
        $('#myModal').modal('show');
    });
    $("#button4").click(function(){
        $("#modaltitle").html("SOUVENIR");
        $('#myiframe').attr('src','https://www.youtube.com/embed/YOIJOJsUkUg')
        $('#myModal').modal('show');
    });
});
