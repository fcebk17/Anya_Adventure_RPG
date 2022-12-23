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
            $("#myAlertModal").modal('show');
            $(".getStar").hide().fadeIn(500).fadeOut(2500);
            clearTimeout(timer);
            break;
        }
        break;
    }
}

function stopActivity(){
    $("#modaltitle").html('You are a loser. ⌓‿⌓')
    $("#linktxt").attr('href', '/WalkTheDog');
    $("#buttontxt").html("再來一次QAQ");
    $("#modal-txt").html("跑太慢了！你不是彭德，需要減肥重跑");
    $("#myAlertModal").modal('show');
}
body.addEventListener('keydown', spaceEvent, false);