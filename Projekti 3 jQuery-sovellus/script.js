$("body").fadeIn(1000);

fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())  
    .then(data => {
    console.log(data);

    var x = data.Countries[58].TotalConfirmed;
    var y = data.Countries[58].TotalRecovered;
    var z = data.Countries[58].TotalDeaths;
    var total = x - y - z;

    $(".countryname").eq(0).html(data.Countries[58].Country);
    $(".info").eq(0).html("Active Cases: <br>" + total);
    $(".info").eq(1).html("Total Confirmed: <br>" + data.Countries[58].TotalConfirmed + "<br><br>Total Recovered: <br>" + data.Countries[58].TotalRecovered 
    + "<br><br> Total Deaths: <br>" + data.Countries[58].TotalDeaths);
    $(".info").eq(2).html("New Confirmed: <br>" + data.Countries[58].NewConfirmed + "<br><br> New Revocered: <br>" + data.Countries[58].NewRecovered +
    "<br><br> New Deaths: <br>" + data.Countries[58].NewDeaths);

});



function fin() {
    $(".countryname, .info").stop().animate({opacity: 0}, 500, function() {
        fetch('https://api.covid19api.com/summary')
            .then(Response => Response.json())  
            .then(data => {;
    
            var x = data.Countries[58].TotalConfirmed;
            var y = data.Countries[58].TotalRecovered;
            var z = data.Countries[58].TotalDeaths;
            var total = x - y - z;
    
            $(".countryname").eq(0).html(data.Countries[58].Country);
            $(".info").eq(0).html("Active Cases: <br>" + total);
            $(".info").eq(1).html("Total Confirmed: <br>" + data.Countries[58].TotalConfirmed + "<br><br> Total Recovered: <br>" + data.Countries[58].TotalRecovered 
            + "<br><br> Total Deaths: <br>" + data.Countries[58].TotalDeaths);
            $(".info").eq(2).html("New Confirmed: <br>" + data.Countries[58].NewConfirmed + "<br><br> New Revocered: <br>" + data.Countries[58].NewRecovered +
            "<br><br> New Deaths: <br>" + data.Countries[58].NewDeaths);
            $(".countryname, .info").stop().animate({opacity: 1}, 500);
    });
    })}

function uk() {
    $(".countryname, .info").stop().animate({opacity: 0}, 500, function() {
        fetch('https://api.covid19api.com/summary')
            .then(Response => Response.json())  
            .then(data => {;

            var x = data.Countries[180].TotalConfirmed;
            var y = data.Countries[180].TotalRecovered;
            var z = data.Countries[180].TotalDeaths;
            var total = x - y - z;

            $(".countryname").eq(0).html(data.Countries[180].Country);
            $(".info").eq(0).html("Active Cases: <br>" + total);
            $(".info").eq(1).html("Total Confirmed: <br>" + data.Countries[180].TotalConfirmed + "<br><br> Total Recovered: <br>" + data.Countries[180].TotalRecovered 
            + "<br><br> Total Deaths: <br>" + data.Countries[180].TotalDeaths);
            $(".info").eq(2).html("New Confirmed: <br>" + data.Countries[180].NewConfirmed + "<br><br> New Revocered: <br>" + data.Countries[180].NewRecovered +
            "<br><br> New Deaths: <br>" + data.Countries[180].NewDeaths);
            $(".countryname, .info").stop().animate({opacity: 1}, 500);

});
})}

function swiss() {
    $(".countryname, .info").stop().animate({opacity: 0}, 500, function() {
        fetch('https://api.covid19api.com/summary')
            .then(Response => Response.json())  
            .then(data => {;

            var x = data.Countries[166].TotalConfirmed;
            var y = data.Countries[166].TotalRecovered;
            var z = data.Countries[166].TotalDeaths;
            var total = x - y - z;

            $(".countryname").eq(0).html(data.Countries[166].Country);
            $(".info").eq(0).html("Active Cases: <br>" + total);
            $(".info").eq(1).html("Total Confirmed: <br>" + data.Countries[166].TotalConfirmed + "<br><br> Total Recovered: <br>" + data.Countries[166].TotalRecovered 
            + "<br><br> Total Deaths: <br>" + data.Countries[166].TotalDeaths);
            $(".info").eq(2).html("New Confirmed: <br>" + data.Countries[166].NewConfirmed + "<br><br> New Revocered: <br>" + data.Countries[166].NewRecovered +
            "<br><br> New Deaths: <br>" + data.Countries[166].NewDeaths);
            $(".countryname, .info").stop().animate({opacity: 1}, 500);
});
})}

function jp() {
    $(".countryname, .info").stop().animate({opacity: 0}, 500, function() {
        fetch('https://api.covid19api.com/summary')
            .then(Response => Response.json())  
            .then(data => {;

            var x = data.Countries[84].TotalConfirmed;
            var y = data.Countries[84].TotalRecovered;
            var z = data.Countries[84].TotalDeaths;
            var total = x - y - z;

            $(".countryname").eq(0).html(data.Countries[84].Country);
            $(".info").eq(0).html("Active Cases: <br>" + total);
            $(".info").eq(1).html("Total Confirmed: <br>" + data.Countries[84].TotalConfirmed + "<br><br> Total Recovered: <br>" + data.Countries[84].TotalRecovered 
            + "<br><br> Total Deaths: <br>" + data.Countries[84].TotalDeaths);
            $(".info").eq(2).html("New Confirmed: <br>" + data.Countries[84].NewConfirmed + "<br><br> New Revocered: <br>" + data.Countries[84].NewRecovered +
            "<br><br> New Deaths: <br>" + data.Countries[84].NewDeaths);
            $(".countryname, .info").stop().animate({opacity: 1}, 500);
});
})}

function india() {
    $(".countryname, .info").stop().animate({opacity: 0}, 500, function() {
        fetch('https://api.covid19api.com/summary')
            .then(Response => Response.json())  
            .then(data => {;

            var x = data.Countries[76].TotalConfirmed;
            var y = data.Countries[76].TotalRecovered;
            var z = data.Countries[76].TotalDeaths;
            var total = x - y - z;

            $(".countryname").eq(0).html(data.Countries[76].Country);
            $(".info").eq(0).html("Active Cases: <br>" + total);
            $(".info").eq(1).html("Total Confirmed: <br>" + data.Countries[76].TotalConfirmed + "<br><br> Total Recovered: <br>" + data.Countries[76].TotalRecovered 
            + "<br><br> Total Deaths: <br>" + data.Countries[76].TotalDeaths);
            $(".info").eq(2).html("New Confirmed: <br>" + data.Countries[76].NewConfirmed + "<br><br> New Revocered: <br>" + data.Countries[76].NewRecovered +
            "<br><br> New Deaths: <br>" + data.Countries[76].NewDeaths);
            $(".countryname, .info").stop().animate({opacity: 1}, 500);
});
})}


$("#fin").on("click", fin);

$("#india").on("click", india);

$("#jp").on("click", jp);

$("#swiss").on("click", swiss);

$("#uk").on("click", uk);