var audio = document.getElementById("myAudio");
audio.volume = 0.35;
audio.currentTime = 25;  // 跳到最後五秒
audio.play();  // 播放

var counter = 0;
$(document).ready(function(){
    $("#text").click(function(){
        window.location.href = "/loader";
        console.log("counter=1");
    });
    $(".game_intro").click(function(){
        $('#myModal').modal('show');
    });
});

$.ajax({
    url: '/saveUserStory',
    type: 'POST',
    data: {star1: 0, star2: 0, star3: 0, star4: 0, star5: 0, star6: 0, star7: 0, star8: 0}
});