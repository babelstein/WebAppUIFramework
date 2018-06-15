(function(){
    $('.login-form button').click(function(e){
        e.preventDefault();
        var headers = {
            username: $('.login-form input#login')[0].value,
            password: $('.login-form input#password')[0].value
        };
        $.ajax({
            type: 'POST',
            url: '',
            headers: headers, 
            beforeSend: function(){
                $('.login-form button').addClass('loading');
            },
            success: function(data){
                setAuthCookie(data)
                $('.login-form button').text('Success!');
                $('.login-form button').removeClass('btn-error').addClass('btn-success').removeClass('loading');
                setTimeout(() => {
                    $('#dashboard').css("opacity","0");
                    $('#login-page').animate({
                        opacity: 0,
                    },400, function(){
                        $('#login-page').addClass('hidden');
                        $('#dashboard').removeClass('hidden');
                        $('#dashboard').animate({
                            opacity: 1,
                        },400, function(){})
                    });
                }, 500);
            },
            error: function(data){
                $('.login-form button').text('Error. Please try again...');
                $('.login-form button').removeClass('loading');
            }
        });
    });
})();