$('.header__burger, header__menu-link').on('click', function () {
  $('.header__burger,.header__menu, header__menu-link').toggleClass('active');

  $('body').toggleClass('lock');
});

 var mixer = mixitup('.gallery__inner', {
   load: {
     filter: '.living'
   }
 });

$(".header__menu-link").on("click", function (e) {

  e.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;

  $('body,html').animate({
    scrollTop: top
  }, 1500);
});