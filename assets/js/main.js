$(window).on('load', function() {
  setTimeout(function() {
    $('.preloader-container').fadeOut('slow');
    $('body').removeClass('disable-scroll');
  }, 500);
})
