navigator.geolocation.getCurrentPosition(obtienePosicion)

function obtienePosicion(pos){
    latitud = pos.coords.latitude;
    longitud = pos.coords.longitude;

    // Enlace con la plataforma
    var platform = new H.service.Platform({
        'apikey': 'qXRGU0rxiP8oSexPb6ktO4U0GRUHJIwVER2MK_5-mDQ'
    });

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
        zoom: 15,
        center: { lat: latitud, lng: longitud }
        });

        map.addLayer(defaultLayers.vector.normal.trafficincidents);

    
    // ICONO POSICIÓN ACTUAL
    // Define a variable holding SVG mark-up that defines an icon image:
    var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: latitud, lng: longitud},
    marker = new H.map.Marker(coords, {icon: icon});

    // Add the marker to the map and center the map at the location of the marker:
    map.addObject(marker);
    map.setCenter(coords);

    // LOCALIZACION
    service.reverseGeocode({
        at: latitud+","+longitud
      }, (result) => {
        result.items.forEach((item) => {
          // Assumption: ui is instantiated
          // Create an InfoBubble at the returned location with
          // the address as its contents:
          ui.addBubble(new H.ui.InfoBubble(item.position, {
            content: item.address.label
          }));
        });
      }, alert);


    // CALCULAR RUTA
    // Create the parameters for the routing request:
    // var routingParameters = {
    //     'routingMode': 'fast',
    //     'transportMode': 'car',
    //     // The start point of the route:
    //     'origin': latitud+","+longitud,
    //     // The end point of the route:
    //     'destination': '36.7201600,-4.4203400',
    //     // Include the route shape in the response
    //     'return': 'polyline'
    // };
    
    // // Define a callback function to process the routing response:
    // var onResult = function(result) {
    //     // ensure that at least one route was found
    //     if (result.routes.length) {
    //     result.routes[0].sections.forEach((section) => {
    //         // Create a linestring to use as a point source for the route line
    //         let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
    
    //         // Create a polyline to display the route:
    //         let routeLine = new H.map.Polyline(linestring, {
    //             style: { strokeColor: 'blue', lineWidth: 3 }
    //         });
    
    //         // Create a marker for the start point:
    //         let startMarker = new H.map.Marker(section.departure.place.location);
    
    //         // Create a marker for the end point:
    //         let endMarker = new H.map.Marker(section.arrival.place.location);
    
    //         // Add the route polyline and the two markers to the map:
    //         map.addObjects([routeLine, startMarker, endMarker]);
    
    //         // Set the map's viewport to make the whole route visible:
    //         map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
    //     });
    //     }
    // };
    
    // // Get an instance of the routing service version 8:
    // var router = platform.getRoutingService(null, 8);
    
    // // Call calculateRoute() with the routing parameters,
    // // the callback and an error callback function (called if a
    // // communication error occurs):
    // router.calculateRoute(routingParameters, onResult,
    //     function(error) {
    //     alert(error.message);
    //     });
}