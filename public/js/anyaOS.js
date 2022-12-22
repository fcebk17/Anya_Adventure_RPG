var body = document.querySelector("body");
var temp = 0;
var text_string = ["哼！才不可能讓媽媽那麼容易找到，我可是星光安妮亞～～～"];
$('body').css('background-image','url(/img/anyaOS.jpg)');
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
            window.location.href = "/findAnyaGame";
            temp++;
        }
        break;
    }
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