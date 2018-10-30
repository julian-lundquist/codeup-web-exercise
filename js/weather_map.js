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