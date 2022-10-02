/*--Бургер--*/
$(document).ready(function () {
    $('.header__head-burger').click(function (event) {
        $('.header__head-burger,.header__head-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});




/*--Карусель (Главная страница)--*/
$(function () {
    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ['<img src="img/arrow-1.png">', '<img src="img/arrow-2.png">'],
    // startPosition: 1,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
});


/*--Вкладки---*/
$(function () {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function (e) {
        e.preventDefault();
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    })});





/*--Карусель (Пятая страница)--*/
$(function () {
    $('.owl-review').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ['<img src="img/arrow-1.png">', '<img src="img/arrow-2.png">'],
    // startPosition: 1,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
});