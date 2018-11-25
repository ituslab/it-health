$('#modal-wrapper').hide();
$('#modal-detail-wrapper').hide();

$(window).on('load', function() {
  setTimeout(function() {
    $('body').removeClass('disable-scroll');
    $('.preloader-container').fadeOut('slow', function() {
      addAnimation('#section-1');
    });
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

$('#modal-close').on('click', function() {
  $('#modal-wrapper').fadeOut();
  reinitMap();
})

$('#responsive-nav-menu').on('click', function() {
  $('#menu-close').fadeIn('slow');
  $('.menu-overlay').fadeIn('slow');
});

$('#menu-close').on('click', function() {
  $(this).fadeOut('slow');
  $('.menu-overlay').fadeOut('slow');
});

$('#modal-detail-close').on('click', function() {
  $('#modal-detail-wrapper').fadeOut();
})

// Google map API KEY
// AIzaSyDnvZnMUERWi8IQJkiI9Dj3hPjAjgCopus

// Google geolocation API KEY
// AIzaSyC7TsXuBXKU53brJn5sQSlXzjk-yOx-WOA

var markers = [];
var map = null;
var whichObjectToSearch = null;


function initMap(){

  var uluru = {lat: -25.344, lng: 131.036};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });


  var autoCompleteInputEl = document.getElementById('autoCompleteInput');
  var autocomplete = new google.maps.places.Autocomplete(autoCompleteInputEl);


  autocomplete.addListener('place_changed',function(){
      var place = autocomplete.getPlace();
      var location = place.geometry.location;

      var lat = location.lat();
      var lng = location.lng();

      map.setCenter({
        lat:lat,
        lng:lng
      });
      map.setZoom(10);

      deleteAllMarkers();
      searchNearbyPlaces(location, whichObjectToSearch);
  });
}


function setAllMap(currVal){

  markers.forEach(function(m){
      m.setMap(currVal);
  });
}

function callbackPlaceDetails(place,status) {
    console.log(place,status);
}

function requestPlaceDetails(placeId){
  var request = {
    placeId: placeId,
    fields: ['name','formatted_phone_number', 'photo','opening_hours','website']
  };

  var service = new google.maps.places.PlacesService(map);
  service.getDetails(request, callbackPlaceDetails);
}


function onClickedMarker(e) {
  var currentMarkerLatLng = e.latLng;

  var cLat = currentMarkerLatLng.lat();
  var cLng = currentMarkerLatLng.lng();

  var filteredResult = arrOfPlaceDetailsReq
    .filter(function(e){
        var eLat = e.position.lat();
        var eLng = e.position.lng();

        return eLat === cLat && cLng === eLng;
    });

  var singleResult = filteredResult[0];
  console.log(singleResult);

}

var arrOfPlaceDetailsReq = [];


function addAllMarkers(arrOfLocation) {

  arrOfLocation.forEach(function(a,idx){
      var newMarkers = new google.maps.Marker({
        position: a.latlng,
        map: map,
        title: a.name
      });

      arrOfPlaceDetailsReq.push({
        placeId:a.placeId,
        name:a.name,
        position:a.latlng
      });

      newMarkers.addListener('click',onClickedMarker);
      markers.push(newMarkers);
  });
}

function deleteAllMarkers(){
    setAllMap(null);
    markers = [];
}

function searchNearbyPlaces(location, typeOfPlaces){
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location:new google.maps.LatLng(
      location.lat(),
      location.lng()
    ),
    radius:'1000',
    type:[typeOfPlaces]
  }, onGetResponse);
}

function onGetResponse(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var mappedResult = results.map(function(r){
      return {
        placeId:r.place_id,
        alamat:r.vicinity,
        latlng:new google.maps.LatLng(
          r.geometry.location.lat(),
          r.geometry.location.lng()
        ),
        name:r.name
      }
    });

    addAllMarkers(mappedResult);
  }else {
    console.log(status , results);
  }
}


function reinitMap(){
  whichObjectToSearch = null;
  $('#autoCompleteInput').val('');
  deleteAllMarkers();
  var uluru = {lat: -25.344, lng: 131.036};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}

function cariDokter() {
  $('#modal-wrapper').show();
  $('#modal-wrapper > #modal-content').addClass('animasi-in-zoomout');
  $('#modal-title').text('Cari dokter dalam radius (1000 meter)');
  whichObjectToSearch = 'doctor';
}

function cariApotik(){
  $('#modal-wrapper').show();
  $('#modal-wrapper > #modal-content').addClass('animasi-in-zoomout');
  $('#modal-title').text('Cari apotik dalam radius (1000 meter)');
  whichObjectToSearch = 'pharmacy';
}

function cariRumahSakit() {
  $('#modal-wrapper').show();
  $('#modal-wrapper > #modal-content').addClass('animasi-in-zoomout');
  $('#modal-title').text('Cari rumah sakit dalam radius (1000 meter)');
  whichObjectToSearch = 'hospital';
}

$(window).click(function(ev){
  if(ev.target.id === 'modal-wrapper') {
      $('#modal-wrapper').fadeOut();
      reinitMap();
  }
});

$(window).click(function(ev){
  if(ev.target.id === 'modal-detail-wrapper') {
      $('#modal-detail-wrapper').fadeOut();
  }
});
