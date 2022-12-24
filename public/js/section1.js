$("body").click(function(){
    $(".getStar").hide();
});

$(document).ready(function() {
    $(".getStar").hide().fadeIn(500);
    $.ajax({
        url: '/saveUserStory',
        type: 'POST',
        data: {star3: 1}
    });
});