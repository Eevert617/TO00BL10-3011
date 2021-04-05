var   list = document.getElementById('list'),
      form = document.getElementById('inputfield'),
      item = document.getElementById('input');

  form.addEventListener("submit",function(e){
    if (document.getElementById("input").value == "") {
      alert("Kirjoita jotain.");
      document.getElementById("input").className = document.getElementById("input").className + " error";
    } else {
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
    document.getElementById("input").className = document.getElementById("input").removeAttribute('class');
  }})
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  })
  
  function store() {
    localStorage.items = list.innerHTML;
  }
  
  function values() {
    var storedValues = localStorage.items;
    if(!storedValues) {
      list.innerHTML = '<li>Yritä tehdä to do listaa</li>'+
                       '<li>Luovuta tehtävän kanssa</li>'+
                       '<li>Käy ulkona otamassa raikasta happea</li>'+
                       '<li>Yritä jatkaa to do listan tekoa</li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
values();