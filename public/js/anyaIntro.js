var audio = document.getElementById("myAudio");
audio.volume = 1;
audio.play();  // 播放
var body = document.querySelector("body");
var temp = 0;
//window.setTimeout(jump,1500);
var text_string = ["我是安妮亞．佛傑，爸爸是精神科醫生洛伊德．佛傑，媽媽是公務員約兒．布萊爾，偷偷跟你說，她其實是一名職業殺手，別問我怎麼知道ㄉ（因為我會讀心術鴨0///0"];
function spaceEvent(e) {
    switch (e.keyCode) {
    case 32:
        if(temp == 0){
            dialog();
            temp++;
        }
        else if (temp == 1){
            content();
            temp++;
        }
        else{
            window.location.href = "/loyidIntro";
            temp++;
        }
        break;
    }
}
function jump(){
    $('body').css('background-image','url(/img/anyaIntro.jpg)');
    //console.log("jump");
}
function dialog(){
    var image=document.getElementById("dialog");
    image.setAttribute("src", "/img/dialogAnya.png");
}
function content(){
    //var pNode = document.getElementById("content");
    const pNode = document.getElementById("text");
    //const text = document.createTextNode(text_string[0]);
    pNode.innerHTML = "<p>" + text_string[0] + "</p>";
}
body.addEventListener('keydown', spaceEvent, false);