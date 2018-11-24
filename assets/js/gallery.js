$('#gallery').jR3DCarousel({
  controls: true,
  width : 700,
	height: 500,
	animation: "slide3D",
  navigation: 'circles',
  slideClass: 'img-slide'
});

$('#gallery').magnificPopup({
  delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function(item) {
			return item.el.attr('title') + ' &middot;';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300,
		opener: function(element) {
			return element.find('img');
		}
	}
});
