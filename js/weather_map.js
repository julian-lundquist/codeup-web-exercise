$(document).ready(function() {
    "use strict";


    // APPID: 7f8e3aa0aad113510e0c1eaafd1c17b8

    // location id for SA: 4726206

    // weather api url: http://api.openweathermap.org/data/2.5/forecast

    /**
     * author Justin Reich
     * getMinMaxDayTemp returns the minimum and maximum temp for a given day based on the response of a query to the OpenWeatherMap 5-Day Hourly Forecast API
     * @param data - the response object from the OpenWeatherMap 5-Day Hourly Forecast API
     * @param day - a number (1-5) representing which day in the next five days to get the min and max temp for;l
     * @returns {{min: T, max: T}}
     */
    const getMinMaxDayTemp = (data, day) => {
        const temps = data.list.slice(day * 8 - 8, day * 8)
            .reduce((prev, curr) => {
            prev.push(curr.main.temp);
        return prev;
    }, []).sort();
        return {min: temps.shift(), max: temps.pop()};
    };

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "7f8e3aa0aad113510e0c1eaafd1c17b8",
        id: 4726206,
        units: "imperial"
    }).done(function(data) {

        var result = getMinMaxDayTemp(data, 1);
        console.log(result.min);
    });

    // ------------------------------------------------------------
    // CODE FOR MAP
    // Initialize the platform object:
    var platform = new H.service.Platform({
        'app_id': 'gar5OjSbItTwwU72V8q7',
        'app_code': 'ph309B4Y5CtozD1_gOgpfg'
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.normal.map,
        {
            zoom: 10,
            center: { lng: 13.4, lat: 52.51 }
        });
    // function moveMapToBerlin(map){
    //     map.setCenter({lat:52.5159, lng:13.3777});
    //     map.setZoom(14);
    // }
    // moveMapToBerlin();
    function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        // add custom data to the marker
        marker.setData(html);
        group.addObject(marker);
    }

    addMarkerToGroup(group, {lng: newLng.value, lat: newLat.value});


    function addDraggableMarker(map, behavior){

        var marker = new H.map.Marker({lat:42.35805, lng:-71.0636});
        // Ensure that the marker can receive drag events
        marker.draggable = true;
        map.addObject(marker);

        // disable the default draggability of the underlying map
        // when starting to drag a marker object:
        map.addEventListener('dragstart', function(ev) {
            var target = ev.target;
            if (target instanceof H.map.Marker) {
                behavior.disable();
            }
        }, false);


        // re-enable the default draggability of the underlying map
        // when dragging has completed
        map.addEventListener('dragend', function(ev) {
            var target = ev.target;
            if (target instanceof mapsjs.map.Marker) {
                behavior.enable();
            }
        }, false);

        // Listen to the drag event and move the position of the marker
        // as necessary
        map.addEventListener('drag', function(ev) {
            var target = ev.target,
                pointer = ev.currentPointer;
            if (target instanceof mapsjs.map.Marker) {
                target.setPosition(map.screenToGeo(pointer.viewportX, pointer.viewportY));
            }
        }, false);
    }


    // alternative way of writing GET request
    // $.get({
    //     url: "http://api.openweathermap.org/data/2.5/forecast",
    //     data: {
    //         APPID: "7f8e3aa0aad113510e0c1eaafd1c17b8",
    //         q: "San Antonio, US"
    //     }
    // }).done(function(data) {
    //     console.log(data);
    // });

});

marker.map();