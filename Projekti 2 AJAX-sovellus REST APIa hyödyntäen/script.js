fetch('https://api.covid19api.com/summary') //Tämä Ajax pyyntö ja sen tuottavat tiedot jotka olen asettanut näkyviin, ladataaan sivulle sen aukaistaessa. Nämä tulokset ovat otettu koodilla 58 joka vastaa Suomea
    .then(Response => Response.json())  //Vastaus Json muodossa
    .then(data => { //Vastauksen data käsitellään seuraavasti
    console.log(data); //Data näytetään consolissa

    let cname = document.getElementsByClassName('countryname'); //"countryname" Class haetaan muutosta varten
    cname[0].innerHTML = data.Countries[58].Country; //"countryname" Class muutetaan datalta löytyvän maan nimen kanssa. Tässä tapauksessa "Finland"

    var num1 = data.Countries[58].TotalConfirmed; //Aktiivisten tapausten laskuun tarvittavat muutujien määrittäminen.
    var num2 = data.Countries[58].TotalRecovered;
    var num3 = data.Countries[58].TotalDeaths;
    var active = num1 - num2 - num3; //Aktiivisten tapausten laskun teen vahvistetut yhteensä - parantuneet yhteensä - kuolleet yhteensä

    let el = document.getElementsByClassName('container'); //"container" Class haetaan käyttöä varten
    el[0].innerHTML = "Active Cases: <br>" + active; //Ensimmäiseen containeriin tulee aktiiviset tapaukset yhteensä minkä laskin aikaisemmin
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[58].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[58].TotalRecovered 
    + "<br> Total Deaths: <br>" + data.Countries[58].TotalDeaths; // Tässä containerissa näytän erikseen vahvistetut tapaukset, parantuneet ja kuolleet yhteensä
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[58].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[58].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[58].NewDeaths; // Viimeisessä containerissa näytän erikseen tapaukset, parantuneet ja kuolleet jotka ovat uusia

});

function fin() { // Tämä funktio on sama kuin aikaisempi joka näytetään sivun ladatessa. Tämä funktio menee läpi kun dropdown menuusta clickataan "Finland"
    fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[58].Country;

    var num1 = data.Countries[58].TotalConfirmed;
    var num2 = data.Countries[58].TotalRecovered;
    var num3 = data.Countries[58].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[58].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[58].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[58].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[58].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[58].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[58].NewDeaths;

});
}

function uk() { // Funktio toimii juuri samallailla kuin aikaisemmat mutta tässä käytetään koodia 180 joka vastaa Englantia. Funktio käydään läpi kun dropdown menuusta clickataan "UK"
    fetch('https://api.covid19api.com/summary') 
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[180].Country;

    var num1 = data.Countries[180].TotalConfirmed;
    var num2 = data.Countries[180].TotalRecovered;
    var num3 = data.Countries[180].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[180].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[180].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[180].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[180].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[180].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[180].NewDeaths;

});
}

function swiss() { // Funktio toimii juuri samallailla kuin aikaisemmat mutta tässä käytetään koodia 166 joka vastaa Sveitsiä. Funktio käydään läpi kun dropdown menuusta clickataan "Switzerland"
    fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[166].Country;

    var num1 = data.Countries[166].TotalConfirmed;
    var num2 = data.Countries[166].TotalRecovered;
    var num3 = data.Countries[166].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[166].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[166].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[166].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[166].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[166].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[166].NewDeaths;
});
}

function jp() { // Funktio toimii juuri samallailla kuin aikaisemmat mutta tässä käytetään koodia 84 joka vastaa Japania. Funktio käydään läpi kun dropdown menuusta clickataan "Japan"
    fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[84].Country;

    var num1 = data.Countries[84].TotalConfirmed;
    var num2 = data.Countries[84].TotalRecovered;
    var num3 = data.Countries[84].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[84].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[84].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[84].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[84].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[84].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[84].NewDeaths;

});
}

const el = document.getElementById("fin"); // Haetaan id "fin" ja määritetään muuttujaksi. Id vastaa dropdown menuussa olevaa "Finland" nappia
el.addEventListener("click", fin, true); // Nappin lisätään kuuntejia joka aktivoi funktion fin nappia painattaessa

const el1 = document.getElementById("uk"); // Haetaan id "uk" ja määritetään muuttujaksi. Id vastaa dropdown menuussa olevaa "UK" nappia
el1.addEventListener("click", uk, true); // Nappin lisätään kuuntejia joka aktivoi funktion uk nappia painattaessa

const el2 = document.getElementById("swiss"); // Haetaan id "swiss" ja määritetään muuttujaksi. Id vastaa dropdown menuussa olevaa "Switzerland" nappia
el2.addEventListener("click", swiss, true); // Nappin lisätään kuuntejia joka aktivoi funktion swiss nappia painattaessa

const el3 = document.getElementById("jp"); // Haetaan id "jp" ja määritetään muuttujaksi. Id vastaa dropdown menuussa olevaa "Japan" nappia
el3.addEventListener("click", jp, true); // Nappin lisätään kuuntejia joka aktivoi funktion jp nappia painattaessa