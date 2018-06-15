$(document).ready(function(){
    setTimeout(function(){
        $('#loader').animate({
            opacity: 0,
        },400, function(){
            $('#loader').addClass('hidden');
            $('#login-page').css("opacity","0");
            setTimeout(function(){
                $('#login-page').removeClass('hidden');
                $('#login-page').animate({
                    opacity: 1,
                },400, function(){});
            },100)
        });
    },1000);
});