var myCash = document.getElementById('money');


function getMoney() {
var myMoney = 0;
localStorage.setItem('wallet', myMoney);

}




if(!localStorage.getItem('wallet')) {
  getMoney();
} else {
  var storedName = localStorage.getItem('wallet');

  }


function revive(){
var playerNew = true;
localStorage.setItem('newPlayer', playerNew);

var playerAliveTrue = true;
localStorage.setItem('playerAlive', playerAliveTrue);
}

if (localStorage.getItem('playerAlive') == 'false'){

  revive();
}


if(localStorage.getItem('playerAlive') == 'true'){
var currentMoney = localStorage.getItem('wallet');
  myCash.textContent = ('Money, ' + currentMoney);

}



if(localStorage.getItem('newPlayer') == 'true'){
var startingmoney = 0;
localStorage.setItem('wallet', startingmoney);
var playerNew = false;
localStorage.setItem('newPlayer', playerNew);


  }


  if(localStorage.getItem('wallet') == 0){
  var startMoney = 1500
  localStorage.setItem('wallet', startMoney)
  }

myCash.textContent = ("Credits = " + localStorage.getItem('wallet'));
