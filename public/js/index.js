var audio = document.getElementById("myAudio");
audio.currentTime = 120;  // 跳到最後五秒
audio.play();  // 播放
var counter = 0;
$(document).ready(function(){
    $("html").click(function(){
        window.location.href = "/loader";
        console.log("counter=1");
    });
});