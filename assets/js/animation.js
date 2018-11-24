function addAnimation(parent) {
  $(parent+' .animasi-scroll-opacity').show().addClass('animasi-in-opacity')
  $(parent+' .animasi-scroll-top').show().addClass('animasi-in-top')
  $(parent+' .animasi-scroll-right').show().addClass('animasi-in-right')
  $(parent+' .animasi-scroll-bottom').show().addClass('animasi-in-bottom')
  $(parent+' .animasi-scroll-left').show().addClass('animasi-in-left')
  $(parent+' .animasi-scroll-topleft').show().addClass('animasi-in-topleft')
  $(parent+' .animasi-scroll-topright').show().addClass('animasi-in-topright')
  $(parent+' .animasi-scroll-bottomleft').show().addClass('animasi-in-bottomleft')
  $(parent+' .animasi-scroll-bottomright').show().addClass('animasi-in-bottomright')
  $(parent+' .animasi-scroll-zoom').show().addClass('animasi-in-zoom')
}

function removeAnimation(parent) {
  $(parent+' .animasi-scroll-opacity').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-opacity').removeClass('animasi-in-opacity');
  });
  $(parent+' .animasi-scroll-top').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-top').removeClass('animasi-in-top')
  });
  $(parent+' .animasi-scroll-right').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-right').removeClass('animasi-in-right')
  })
  $(parent+' .animasi-scroll-bottom').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-bottom').removeClass('animasi-in-bottom')
  })
  $(parent+' .animasi-scroll-left').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-left').removeClass('animasi-in-left')
  })
  $(parent+' .animasi-scroll-topleft').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-topleft').removeClass('animasi-in-topleft')
  })
  $(parent+' .animasi-scroll-topright').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-topright').removeClass('animasi-in-topright')
  })
  $(parent+' .animasi-scroll-bottomleft').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-bottomleft').removeClass('animasi-in-bottomleft')
  })
  $(parent+' .animasi-scroll-bottomright').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-bottomright').removeClass('animasi-in-bottomright')
  })
  $(parent+' .animasi-scroll-zoom').fadeOut('slow', function() {
    $(parent+' .animasi-scroll-zoom').removeClass('animasi-in-zoom')
  })
}
