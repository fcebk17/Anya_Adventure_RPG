var audio = document.getElementById("myAudio");
audio.volume = 0.1;
audio.currentTime = 19;  // 跳到最後五秒
audio.play();  // 播放
$("body").click(function(){
    $(".slogan").hide();
});

$(document).ready(function(){
    let score=[false, false, false, false, false];
    $("#anya1").click(function() {
        score[0]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            $.ajax({
                url: '/saveUserStory',
                type: 'POST',
                data: {star4: 1}
            });
            $("#myAlertModal").modal('show');
            $(".getStar").hide().fadeIn(500).fadeOut(2500);
        }
    });
    
    $("#anya2").click(function() {
        score[1]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            $.ajax({
                url: '/saveUserStory',
                type: 'POST',
                data: {star4: 1}
            });
            $("#myAlertModal").modal('show');
            $(".getStar").hide().fadeIn(500).fadeOut(2500);
        }
    });
    
    $("#anya3").click(function() {
        score[2]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            $.ajax({
                url: '/saveUserStory',
                type: 'POST',
                data: {star4: 1}
            });
            $("#myAlertModal").modal('show');
            $(".getStar").hide().fadeIn(500).fadeOut(2500);
        }
    });
    
    $("#anya4").click(function() {
        score[3]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            $.ajax({
                url: '/saveUserStory',
                type: 'POST',
                data: {star4: 1}
            });
            $("#myAlertModal").modal('show');
            $(".getStar").hide().fadeIn(500).fadeOut(2500);
        }
    });
    
    $("#anya5").click(function() {
        score[4]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            $.ajax({
                url: '/saveUserStory',
                type: 'POST',
                data: {star4: 1}
            });
            $("#myAlertModal").modal('show');
            $(".getStar").hide().fadeIn(500).fadeOut(2500);
        }
    });
});

