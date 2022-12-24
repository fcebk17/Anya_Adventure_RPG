$(document).ready(function(){
    $.ajax({
        url: '/getUserStory',
        type: 'GET',
        success: function(data) {
            let star1 = data[0].star1;
            let star2 = data[0].star2;
            let star3 = data[0].star3;
            let star4 = data[0].star4;
            let star5 = data[0].star5;
            let star6 = data[0].star6;
            let star7 = data[0].star7;
            let star8 = data[0].star8;
            if (star1==0){
                $('#star1').css('filter', 'brightness(20%)');
            }
            if (star2==0){
                $('#star2').css('filter', 'brightness(20%)');
            }
            if (star3==0){
                $('#star3').css('filter', 'brightness(20%)');
            }
            if (star4==0){
                $('#star4').css('filter', 'brightness(20%)');
            }
            if (star5==0){
                $('#star5').css('filter', 'brightness(20%)');
            }
            if (star6==0){
                $('#star6').css('filter', 'brightness(20%)');
            }
            if (star7==0){
                $('#star7').css('filter', 'brightness(20%)');
            }
            if (star8==0){
                $('#star8').css('filter', 'brightness(20%)');
            }
            if(star1==1 && star2==1 && star3==1 && star4==1 && star5==1 && star6==1 && star7==1 && star8==1){
                console.log("success");
                $("#modaltitle").html("得到8顆星星了鴨，哇庫哇庫(′゜ω。‵)⭐");
                $("#modalbody").html("來看看得到甚麼獎勵拔!");
                $("#finallink").attr('href', '/finalPage');
                $("#finalbt").text("成為星光安妮亞⭐");
            }
            $(".level").click(function(){
                $('#myModal').modal('show');
            });
        }
    });
})


