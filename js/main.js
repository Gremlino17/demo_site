$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        //direction: 'ho',
        //loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    var mySwiper2 = new Swiper('.swiper-container2', {

        //slidesPerView: 1,
        // breakpoints: {
        //     900: {
        autoHeight: true,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: true,
        },
        breakpoints: {
            900: {
                loop: true,
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 400,
                    depth: 180,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            520:{
                autoHeight: true,
                loop: true,
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 180,
                    modifier: 1,
                    slideShadows: true,
                },
            }
        }

        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
    });

    var mySwiper3 = new Swiper('.swiper-container3', {
        slidesPerView: 1,
        spaceBetween: 30,
        //loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1170: {
                slidesPerView: 3,
            },
            715: {
                slidesPerView: 2,
            }
        }
    });

    var mySwiper4 = new Swiper('.swiper-container4', {
        watchSlidesVisibility: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        nested: true,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
    });

    $('.imgbgr').each(
        function () {
            $b = ($(this).attr('src'));
            //alert($b);
            $(this).parent().css({ background: 'url(' + $b + ')' + 'center' + '/' + 'cover' });
            $(this).addClass('del');
            $('.del').css('display', 'none');
        }
    );

    $(function () {
        var newSelection = "";
        var b;
        $('.projects-portfolio-menu label').click(function () {
            //alert('.click')
            $('.projects-portfolio-menu label').removeClass('aktiv');
            $(this).addClass('aktiv');
            $('.ff-items li').removeClass('clear');
            newSelection = $(this).attr('rel');
            b = '.' + newSelection;
            // alert(b);
            $('.ff-items li').each(

                function () {

                    $(this).not('"' + b + '"').toggleClass('clear')
                    // alert(this);
                }
            )
        })
    });



    $(function () {
        var $element = $('.ideas').offset().top;
        //console.log(".ideas=" + $element);
        var counter = 0;
        var $window = $(window);
        $window.on('load scroll', function () {
            var top = $window.scrollTop();
            //console.log("scrollTop=" + top);
            var height = $window.height();
            //console.log("height=" + height);
            if (top + height >= $element && counter == 0) {
                //console.log(top + height >= $element);
                $('.header-body').css('position', 'fixed');
                $('.header-body').addClass('opacity');
                counter = 1;
            };
            if (top + height < $element && counter == 1) {
                $('.header-body').css('position', 'initial');
                $('.header-body').removeClass('opacity');
                counter = 0;
            }
        });
    });


    var count = 0;
    $(window).on('load resize', function () {
        var $size = $('.right').data('size');
        //console.log($size);
        var $realSize = $(window).width();
        //console.log($realSize);
        if ($realSize <= $size && count == 0) {
            $('div.right').append('<nav></nav>');
            $('div.right nav').addClass('menu');
            var b = $('nav.menu a').slice(4, 8).detach().prependTo('div.right nav');
            //console.log(b);
            count = 1;
        }
        if ($realSize > $size && count == 1) {
            var a = $('div.right nav').children().detach().appendTo('div.left nav');
            $('div.right nav').remove();
            //console.log(a);
            count = 0;
        }
        //console.log(count);

        $(window).each(function () {
            $(window).scroll(function () {
                $('.opacity').css('display', 'flex')
            });
        })

        var skrmain = 0;
        $(window).scroll(function () {
            var skr = $(window).scrollTop();
            //console.log('skrmain=' + skrmain);
            //console.log('skr=' + skr);
            if (skr > 100 && skr > skrmain) {
                $('.header-body').css('transform', 'translateY(-300px)')
            }
            else {
                $('.header-body').css('transform', 'none')
            }
            skrmain = skr;
            //console.log('skrmain2=' + skrmain);
        })

    });

    $('.header__burger').click(function () {
        $(this).toggleClass('click');
        $('.header__burger-menu').toggleClass('active');
        $('div.right nav').children().detach().prependTo('.header__burger-menu');
        $('div.left nav').children().detach().prependTo('.header__burger-menu');
        $(window).on('load resize', function () {
            var $realSize = $(window).width();
            if ($realSize > 480) {
                $('.header__burger-menu a').slice(4, 8).detach().prependTo('div.right nav');
                $('.header__burger-menu a').slice(0, 4).detach().prependTo('div.left nav');
            }
        })
    })

})
