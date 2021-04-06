//Muuttajia
var   list = document.getElementById('list'),
      form = document.getElementById('inputfield'),
      item = document.getElementById('input');
//Function lähtee rullaamaan kun form lähetetään "enteriä painataessa"
  form.addEventListener("submit",function(){
//Jos kirjoitus kenttä on tyhjä if lauseke toteutuu
    if (document.getElementById("input").value == "") {
//Alert tapahtuma
      alert("Kirjoita jotain.");
//Input id:hen lisätään error class jolloin teksti kentän alareuna muuttuu punaiseksi
      document.getElementById("input").className = document.getElementById("input").className + " error";
//Jos kirjoitus kentässä on tekstiä else lauseke toteutuu
    } else {
//Listaan lisätään teksti kentässä oleva teksti
    list.innerHTML += '<li>' + item.value + '</li>';
//Store function lisää listan local storageen
    store();
//Teksti kentän class poistetaan. Eli punainen viiva katoaa
    document.getElementById("input").className = document.getElementById("input").removeAttribute('class');
  }})

//Functio käynistyy kun listasta painetaan tekstiä
  list.addEventListener('click',function(e){
//Määritetään muuttuja
    var t = e.target;
//If lauseke toteutuu jos tekstissä on "checked" class
    if(t.classList.contains('checked')){
// Teksti poistetaan listalta
      t.parentNode.removeChild(t);
// Jos "cheked" classiä ei ole else toteutuu
    } else {
//Tekstiä joka vielä "tuore" eli ei "checked" classiä saa "checked" classin ja muutuu tehdyksi
      t.classList.add('checked');
    }
//Store function lisää listan local storageen
    store();
  })
  
//Functio joka lisää listan localstorageen
  function store() {
    localStorage.items = list.innerHTML;
  }
  
//Functio joka tarkastaa onko local storagessa tietoa
  function values() {
    var storedValues = localStorage.items;
//Jos local storage on tyhjä if lauseke toteutuu ja lisää "preset" tekstit
    if(!storedValues) {
      list.innerHTML = '<li>Yritä tehdä to do listaa</li>'+
                       '<li>Luovuta tehtävän kanssa</li>'+
                       '<li>Käy ulkona otamassa raikasta happea</li>'+
                       '<li>Yritä jatkaa to do listan tekoa</li>';
    }
//Jos local storagessa on tietoa lista hakee localstoragesta tiedot
    else {
      list.innerHTML = storedValues;
    }
  }
//Toteuttaa values function
values();