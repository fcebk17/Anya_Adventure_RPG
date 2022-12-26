var audio = document.getElementById("myAudio");
audio.volume = 0.35;
audio.currentTime = 61;  // 跳到最後五秒
audio.play();  // 播放
setTimeout(win,7000);
function win(){
    text = document.getElementById("text");
    text.innerHTML = "<h1 class = 'animate__animated animate__fadeInDownBig'>     成為星光安妮亞 </h1>"
    setTimeout(vedio,7500);
}
function vedio(){

    window.location.href = "/finalvideo";
}

