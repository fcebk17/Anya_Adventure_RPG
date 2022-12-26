var audio = document.getElementById("myAudio");
var audio2 = document.getElementById("twoAudio");
audio.volume = 0.35;
audio.currentTime = 160;  // 跳到最後五秒
audio.play();  // 播放
audio2.pause();
var intervalId = setInterval(Play,7000);
function Play(){
    audio.pause();
    audio.play(); 
    audio.currentTime = 160;  // 跳到最後五秒
}

$.ajax({
    url: '/saveUserStory',
    type: 'POST',
    data: {star3: 1}
});

$("body").click(function(){
    $(".getStar").hide();
    clearInterval(intervalId);
    audio.pause();
    audio2.volume = 1;
    audio2.currentTime = 23;  // 跳到最後五秒
    audio2.play();  // 播放
});

$(document).ready(function() {
    $(".getStar").hide().fadeIn(500);
});