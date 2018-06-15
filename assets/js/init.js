$(document).ready(function(){
    if(getAuthCookie() === "")
    {
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
    }
    else
    {
        setTimeout(function(){
            $('#loader').animate({
                opacity: 0,
            },400, function(){
                $('#loader').addClass('hidden');
                $('#dashboard').css("opacity","0");
                setTimeout(function(){
                    $('#dashboard').removeClass('hidden');
                    $('#dashboard').animate({
                        opacity: 1,
                    },400, function(){});
                },100)
            });
        },100);
    }
});

function setAuthCookie(token){
    document.cookie = "Authorization=" + 'bearer '+token;
}

function getAuthCookie(){
    var cn = "Authorization=";
    var idx = document.cookie.indexOf(cn)
 
    if (idx != -1) {
        var end = document.cookie.indexOf(";", idx + 1);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(idx + cn.length, end));
    } else {
        return "";
   }
 }