$( document ).ready(function() {

    // Функция для прокрутка от/до в header-e
    function RangeGreen() {
        var price = $(".price"),
            priceRes = $(".result-range"),
            range = $('input[type="range"]');

        range.on("change mousemove", function() {
            $(this).parents(".parrent-price").find(".result-range").val("от " + $(this).val() + " до 11000");
        });

        range.on("change mousemove", function() {
            var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

            $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #8ECE22), '
                + 'color-stop(' + val + ', #4A525D)'
                + ')'
            );
        });
    }

    RangeGreen();

    // Функция удалить маршрут в мультипоездках
    function removeRoute() {

        $('.new-routes .remove-last-route').on('click', function () {
            $(this).parents('.original-routes').remove();
        })
    }

    // Функция добавить маршрут в мультипоездках
    var addNewRouteFunc = function() {
        $(".add-route").on('click', function () {
            var cloneRoute = $(".original-routes").clone();
            $(".new-routes").html(cloneRoute);
            removeRoute();
        });

    };

    addNewRouteFunc();

    // Функция открыть модаль для выбора вагона
    $('.select-btn').on('click', function() {
        $(this).parents('.card-custom').find('.select-route-block').show();
    });

    // Функция закрыть модаль для выбора вагона
    $('.close-modal').on('click', function() {
        $(this).parents('.select-route-block').hide();
    });

    // функция для выбора место в вагоне
    $('.place-item button').on('click', function () {
        if (!$(this).hasClass('busy')) {
            $(this).toggleClass('select');
        }
        $(this).parents('.carousel-item').find('.all-select-count').html( $('.select').length );
    });

});