$(document).ready(function () {
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $(function($){
        $("#phone, #phone2, #phone3").mask("+38(999)-999-99-99");
    });
    $('.collapse-btn').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    draggable: true
                }
            }
        ]
    });
    $('.collapse-btn .slick-arrow').click(function () {
        $('.hidden-games-text').removeClass('show-text');
    });
    $('.figure-block').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".activity-block").mCustomScrollbar({
        setLeft: "0",
        axis:"x"
    });
    $(".more-js").click(function () {
        let className = $(this).parent().parent().find(".hidden-games-text");
        if( className.hasClass('show-text')){
            className.removeClass('show-text');
        }
        else {
            className.addClass('show-text');
        }
        return false;
    });
    $(".roadmap-js").click(function () {
        $(".roadmap-js").removeClass('active');
        $(this).addClass('active');
    });
});
function windowSize(){
    if ($(window).width() <= '991'){
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 115 && $('.navbar').hasClass("default") ){
                $('.navbar').fadeOut('fast',function(){
                    $(this).removeClass("default")
                        .addClass("fixed")
                        .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 115 && $('.navbar').hasClass("fixed")) {
                $('.navbar').fadeOut('fast',function(){
                    $(this).removeClass("fixed")
                        .addClass("default")
                        .fadeIn('fast');
                });
            }
        });
        $(document).mouseup(function (e) {
            var div = $(".help-for-search");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.navbar-collapse').removeClass('show');
                $('.navbar-toggler').addClass('collapsed')
            }
        });
    } else {
        return false;
    }
}
$(window).on('load resize',windowSize);