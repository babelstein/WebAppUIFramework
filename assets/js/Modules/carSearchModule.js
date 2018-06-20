(function(){

    $(".cars-search-cars form").on('keyup input', 'input#input-example-1', debounce(function (e) {
        var $input = $(this),
            currValue = $input.val();

        if(currValue.trim() != '')
        {
            $.ajax({
                url: '',
                type: 'POST',
                beforeSend: function(){
                    $input.parent().find('i.form-icon').removeClass('hidden');
                    $($('.form-group')[1]).addClass('hidden');
                    $('.engine-list').addClass('hidden');
                    $('.model-list').addClass('hidden');
                },
                success: function(data){
                    var $list = $('.model-list ul')
                    $list.empty('li');
    
                    for(let car of data.cars){
                        $list.append('<li><a class="c-hand js-model" data-brand='+car.brandId+' data-model='+car.modelId+'>'+car.carName+' ['+car.dateFrom.substring(0,7)+ ' - '+car.dateTo.substring(0,7)+ ']</a></li>')
                    }
                    $list.parent().removeClass('hidden');
                    $input.parent().find('i.form-icon').addClass('hidden');
                },
                error: function(jqXHR, textStatus, errorThrown){
                }
            });
        }
    }, 500));

    $(document).on('click', '.js-model', function(){
        var modelId = $(this).data('model');
        var modelName = $(this).html();
        $('#input-example-1').val(modelName);

        $.ajax({
            url: '',
            type: 'POST',
            beforeSend: function(){
                $('.engine-list').addClass('hidden');
            },
            success: function(data){
                var $list = $('.engine-list ul')
                $list.empty('li');

                for(let engine of data.engines){
                    $list.append('<li><a class="c-hand js-engine" data-engine='+ engine.id +'>'+ engine.name +' [KM - '+ engine.powerKm +' KW - '+ engine.powerKw +']</a></li>')
                }
                $('.model-list').addClass('hidden');
                $list.parent().removeClass('hidden');
            },
            error: function(jqXHR, textStatus, errorThrown){
            }
        });
    });

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
})();