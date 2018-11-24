$(window).on('load', function() {
  setTimeout(function() {
    $('body').removeClass('disable-scroll');
    $('.preloader-container').fadeOut('slow', function() {
      addAnimation('#section-1');
    });
    $('#modal-wrapper').hide();
  }, 500);
})

var sections = [];

$('.section').each(function(index, el) {
  sections.push('section-'+(index + 1));
});

$('#content').pagepiling({
  anchors: sections,
	afterLoad: function(anchorLink, index){
    addAnimation('#'+anchorLink);
    setTimeout(function() {
      if (anchorLink !== 'section-1') {
        removeAnimation('#section-1');
      }
    }, 500)
  },
  onLeave: function (index, nextIndex, direction) {
    removeAnimation('#section-'+index);
  }
});

// API KEY
// AIzaSyDnvZnMUERWi8IQJkiI9Dj3hPjAjgCopus

// function initMap(){
//   var map;
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

function cariDokter() {
  $('#modal-wrapper').show();
}

$(window).click(function(ev){
  if(ev.target.id === 'modal-wrapper') {
    $('#modal-wrapper').hide();
  }
});
