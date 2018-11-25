var animations = {
  'animasi-scroll-opacity': 'animasi-in-opacity',
  'animasi-scroll-top': 'animasi-in-top',
  'animasi-scroll-right': 'animasi-in-right',
  'animasi-scroll-bottom': 'animasi-in-bottom',
  'animasi-scroll-left': 'animasi-in-left',
  'animasi-scroll-topleft': 'animasi-in-topleft',
  'animasi-scroll-topright': 'animasi-in-topright',
  'animasi-scroll-bottomleft': 'animasi-in-bottomleft',
  'animasi-scroll-bottomright': 'animasi-in-bottomright',
  'animasi-scroll-zoomin': 'animasi-in-zoomin',
  'animasi-scroll-zoomout': 'animasi-in-zoomout'
}

function addAnimation(parent) {
  for (var animation in animations) {
    $(parent+' .'+animation).show().addClass(animations[animation]);
  }
}

function removeAnimation(parent) {
  for (var animation in animations) {
    $(parent+' .'+animation).fadeOut('slow', function() {
      $(parent+' .'+animation).removeClass(animations[animation]);
    });
  }
}
