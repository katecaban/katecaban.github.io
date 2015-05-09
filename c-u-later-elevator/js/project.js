var map;
var newYork = new google.maps.LatLng(40.7500, -73.9200);
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {
var featureOpts = [
	{
    stylers: [
        { hue: '#669999' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#66A3BD' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 12,
    center: newYork,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
  	map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}
google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function(){
	$("#hamburger").click(function(){
		$("#innernav").slideToggle(500);
		// $("innernav").css($"#outernav")
	});
});

$(window).resize(function(){
	if($(window).width() > 630) {
		$("#innernav").show();
	} else {
		$("#innernav").hide();
	}
});
