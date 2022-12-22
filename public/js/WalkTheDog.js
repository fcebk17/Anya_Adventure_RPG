$("body").click(function(){
    $(".slogan").hide();
});
var body = document.querySelector("body");
var counter =10;
var temp = 0;
let timer;
function spaceEvent(e) {
    switch (e.keyCode) {
    case 32:
        if(temp == 0){
            timer = setTimeout(stopActivity, 5000);
            temp++;
        }   
        if(counter<55){
            counter += Math.floor(Math.random()*5);
            $('#image1').css('left',counter.toString()+"%");
            console.log(counter);
        }
        else{
            window.alert("得到點心了！");
            clearTimeout(timer);
        }
        break;
    }
}
function stopActivity(){
    window.alert("跑太慢了！你不是彭德，需要減肥重跑");
    //clearTimeout(timer);
    window.location.href = "/WalkTheDog";
}
body.addEventListener('keydown', spaceEvent, false);