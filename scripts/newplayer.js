var charactername = document.getElementById('charactername');
var myHeading = document.querySelector('h1');
var shipname = document.getElementById('shipname');
var shipHeading = document.querySelector('h2');



///////////////////////////////////////////   Character Name
function setCharName() {
var myName = prompt('Please enter your character name.');
localStorage.setItem('myName', myName);
myHeading.textContent = ('Captain, ' + myName);
}


if(!localStorage.getItem('myName')) {
setCharName();
} else {
var storedName = localStorage.getItem('myName');
myHeading.textContent = ('Captain, ' + storedName);
}

while (localStorage.getItem('myName')=='null'){
  var myName = prompt('Please enter your character name.');
  localStorage.setItem('myName', myName);
  shipHeading.textContent = ('Aboard the ' + myName);

  while (localStorage.getItem('myName')==''){
    var myName = prompt('Please enter your character name.');
    localStorage.setItem('myName', myName);
    myHeading.textContent = ('Captain, ' + myName);
    }

}



charactername.onclick = function() {
setCharName();
}

/////////////////////////////////////////////////// Ship Name



if(!localStorage.getItem('shipName')) {
setShipName();
} else {
var storedName = localStorage.getItem('shipName');
shipHeading.textContent = ('Aboard the ' + storedName);
}

function setShipName() {
var myName = prompt('Please enter your ship name.');
localStorage.setItem('shipName', myName);
shipHeading.textContent = ('Aboard the ' + myName);

}

while (localStorage.getItem('shipName')=='null'){
  var myName = prompt('Please enter your ship name.');
  localStorage.setItem('shipName', myName);
  shipHeading.textContent = ('Aboard the ' + myName);

  while (localStorage.getItem('shipName')==''){
    var myName = prompt('Please enter your ship name.');
    localStorage.setItem('shipName', myName);
    shipHeading.textContent = ('Aboard the ' + myName);
    }

}




shipname.onclick = function() {
  setShipName();

}
