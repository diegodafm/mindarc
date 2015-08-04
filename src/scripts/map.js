function MapController() {
    var _self = this;

    _self.map = null;

    _self.markers = [];

    _self.initialize = function() {
        var mapCanvas = document.getElementById('map-canvas'),
            mapOptions = {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        _self.map = new google.maps.Map(mapCanvas, mapOptions);
    };

    _self.addListeners = function() {
        google.maps.event.addListener(_self.map, 'rightclick', function(e) {
            var lat = e.latLng.lat(),
                lng = e.latLng.lng(),
                marker = new google.maps.Marker({
                    position: getLatLng(lat, lng),
                    map: _self.map,
                    title: 'Marker ' + _self.markers.length
                });

            appendMarksMenu(marker);
            google.maps.event.addListener(marker, 'click', function() {
                var infowindow = new google.maps.InfoWindow();
                infowindow.setContent(bubbleTemplate(lat, lng));
                infowindow.open(_self.map, this);
            });
        });
    };

    var bubbleTemplate = function(lat, lng) {
        var contentString = '<ul>' +
            ' <li> <label>Latitude / longitude</label> <span>' + lat + ' / ' + lng + '</span></li>' +
            ' <li> <label>Timezone based on location</label> <span></span></li>' +
            ' <li> <label>Current UTC time</label> <span></span></li>' +
            ' <li> <label>Current local time</label> <span>' + moment().format('HH:mm:ss') + '</span></li>' +
            '</ul>';
        return contentString;
    };

    var getLatLng = function(lat, lng) {
        return new google.maps.LatLng(lat, lng);
    };

    var appendMarksMenu = function(marker) {
        _self.markers.push(marker);
        var li = document.createElement('li');
        li.innerHTML = marker.getTitle();
        $('#markers').append(li);
    };
}

$(document).ready(function() {
    var mapController = new MapController();
    mapController.initialize();
    mapController.addListeners();
});
