// Close button
var listitmes = document.getElementsByTagName("LI");
var i;
for (i = 0; i < listitmes.length; i++) {
  var span = document.createElement("span");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  listitmes[i].appendChild(span);
}

// Close button function
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    
  }
}

// Marks item as done
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);

// Add button function
function addtolist() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      document.getElementById("input").className = document.getElementById("input").className + " error";
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}


function backton() {
  document.getElementById("input").className = document.getElementById("input").className.replace(" error", "");
}

function dropdown() {
  document.getElementById("ddown").classList.toggle("show");
}

function light() {
  
}

function dark() {
  var element = document.body;
  element.classList.toggle("dark");
}