var audio = document.getElementById("myAudio");
audio.volume = 0.35;
audio.currentTime = 25;  // 跳到最後五秒
audio.play();  // 播放

var counter = 0;
$(document).ready(function(){
    $("html").click(function(){
        window.location.href = "/loader";
        console.log("counter=1");
    });
});