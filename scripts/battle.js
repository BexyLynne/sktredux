var myImage = document.getElementById('myShip');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beamer.jpg') {
      myImage.setAttribute ('src','images/shuttle.gif');
    } else {
      myImage.setAttribute ('src','images/beamer.jpg');
    }
  }

var otherImage = document.getElementById('theirShip')
  otherImage.onclick = function() {
      var mySrc = otherImage.getAttribute('src');
      if(mySrc === 'images/beamer.jpg') {
        otherImage.setAttribute ('src','images/katana.jpg');
      } else {
        otherImage.setAttribute ('src','images/beamer.jpg');
      }
    }


    var myButton = document.querySelector('button');
    var myHeading = document.querySelector('h1');

    function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = ('Mozilla is cool, ' + myName);
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
