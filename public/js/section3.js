var audio = document.getElementById("myAudio");
audio.volume = 0.35;
setTimeout(Stop,1500);
function Stop(){
    audio.pause();  // 播放
}
