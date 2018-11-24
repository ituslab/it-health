$(window).on('load', function() {
  setTimeout(function() {
    $('body').removeClass('disable-scroll');
    $('.preloader-container').fadeOut('slow');
  }, 500);
})

$('#content').pagepiling({
  anchors: ['section-1', 'section-2', 'section-3', 'section-4'],
	afterLoad: function(anchorLink, index){
    addAnimation('#'+anchorLink);
  },
  onLeave: function (index, nextIndex, direction) {
    removeAnimation('#section-'+index);
  }
});
