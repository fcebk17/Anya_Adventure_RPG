$("body").click(function(){
    $(".slogan").hide();
});

$(document).ready(function(){
    let score=[false, false, false, false, false];
    $("#anya1").click(function() {
        score[0]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            console.log("congragulations");
            $("#myAlertModal").modal('show');
        }
    });
    
    $("#anya2").click(function() {
        score[1]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            console.log("congragulations");
            $("#myAlertModal").modal('show');
        }
    });
    
    $("#anya3").click(function() {
        score[2]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            console.log("congragulations");
            $("#myAlertModal").modal('show');
        }
    });
    
    $("#anya4").click(function() {
        score[3]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            console.log("congragulations");
            $("#myAlertModal").modal('show');
        }
    });
    
    $("#anya5").click(function() {
        score[4]=true;
        $(this).css('border', '5px solid red');
        if(score[0]==true && score[1]==true && score[2]==true && score[3]==true && score[4]==true){
            console.log("congragulations");
            $("#myAlertModal").modal('show');
        }
    });
});

