var body = document.querySelector("body");
var counter = 0;
var counterButton = 0;
var choose_button_string = ["button1","button2","button3","button4"];
var choose_button_value = ["潮境公園","外木山沙灘","望幽谷","海洋廣場"];
var text_string = ["汪....汪汪....汪.......................(快告訴我哪裡很好玩(=´ᴥ`))"];

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
    var display = document.getElementById("display");

    display.innerHTML += "<button id = 'button" + parseInt(counterButton+1) + "' class = 'button" + parseInt(counterButton+1) +"'>" +"<span class='ansbt'>"+ choose_button_value[choose_button]+"</span></button>";

    counterButton++;
}
body.addEventListener('keydown', spaceEvent, false);

$(document).on('click', 'button', function(){
    $("#button1").click(function(){
        $("#modaltitle").html("潮境公園");
        $('#myiframe').attr('src','https://reurl.cc/GXL8oD');
        $('#myModal').modal('show');
    });
    $("#button2").click(function(){
        $("#modaltitle").html("外木山濱海風景區");
        $('#myiframe').attr('src','https://reurl.cc/7jLGpk')
        $('#myModal').modal('show');
    });
    $("#button3").click(function(){
        $("#modaltitle").html("望幽谷");
        $('#myiframe').attr('src','https://reurl.cc/nZ4aZn')
        $('#myModal').modal('show');
    });
    $("#button4").click(function(){
        $("#modaltitle").html("海洋廣場");
        $('#myiframe').attr('src','https://reurl.cc/OELZE9')
        $('#myModal').modal('show');
    });
});