// MAP from https://hpneo.github.io/gmaps/
var map = new GMaps({

  div: '.map',	
  lat: 40.7751598, 
  lng: -73.9650649, // sure, that is where
  zoom: 13	
});

map.addMarker({		
  lat: 40.7750613, 
  lng: -73.966543,
  title: 'InteractiveAgency NYC',
  infoWindow: {	
	  content: '<p>Are you ready to journey down the rabbit hole?</p>'
	}
});