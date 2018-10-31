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



    var call = (function () {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "7f8e3aa0aad113510e0c1eaafd1c17b8",
            lat: $('#curr_lat').html(),
            lon: $('#curr_lon').html(),
            units: "imperial"
        }).done(function(data) {
            var day1 = getMinMaxDayTemp(data, 1);
            $('#info_1').html(`Min: ${day1.min} Max: ${day1.max}`);
        }).done(function (data) {
            var day2 = getMinMaxDayTemp(data, 2);
            $('#info_2').html(`Min: ${day2.min} Max: ${day2.max}`);
        }).done(function (data) {
            var day3 = getMinMaxDayTemp(data, 3);
            $('#info_3').html(`Min: ${day3.min} Max: ${day3.max}`);
        });
    });

    console.log($('#curr_lat').html());

    // ------------------------------------------------------------
    // CODE FOR MAP
    // Initialize the platform object:

    var platform = new H.service.Platform({
        app_id: 'gar5OjSbItTwwU72V8q7',
        app_code: 'ph309B4Y5CtozD1_gOgpfg',
        useHTTPS: true
    });

    function addDraggableMarker(map, behavior){
        var marker = new H.map.Marker({lat:29.4404, lng:-98.5005});
        // Ensure that the marker can receive drag events
        marker.draggable = true;
        map.addObject(marker);

        console.log(marker);


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
                $('#curr_lat').html(`${marker.Ua[0]}`);
                $('#curr_lon').html(`${marker.Ua[1]}`);
                call();
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
    /**
     * Boilerplate map initialization code starts below:
     */

//Step 1: initialize communication with the platform
    var pixelRatio = window.devicePixelRatio || 1;
    var defaultLayers = platform.createDefaultLayers({
        tileSize: pixelRatio === 1 ? 256 : 512,
        ppi: pixelRatio === 1 ? undefined : 320
    });

//Step 2: initialize a map - this map is centered over Boston
    var map = new H.Map(document.getElementById('map'),
        defaultLayers.normal.map,{
            center: {lat:29.4404, lng:-98.5005},
            zoom: 12
        });

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 4: Create the default UI:
    var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

// Add the click event listener.
    addDraggableMarker(map, behavior);
});
