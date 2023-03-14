
var computer = document.getElementById("computer");
var player = document.getElementById("player");
var stats = document.getElementById("stats");
var playerStats = document.getElementById("playerStats");
var computerStats = document.getElementById("computerStats");
var drawStats = document.getElementById("drawStats");
var currentStatus = document.getElementById('currentStatus')
var currentGame = document.getElementById('currentGame');
var playerGame = 0;
var computerGame = 0;
var draw = 0;


function startGame() {
    document.getElementById("start").classList.toggle('deactive');
    computer.classList.replace('deactive','computer');
    player.classList.replace('deactive','player');
    stats.classList.replace('deactive','stats');
    currentStatus.classList.replace('deactive','currentStatus');
    

}


function game(choice){


    //random output for computer 
    var number = Math.floor(Math.random()*3+1);
    computer.classList.remove('hand','rock','scissor');
    if (number == 1){
        computer.classList.add('hand');
    } else if (number == 2) {
        computer.classList.add('rock');
    }   else {
        computer.classList.add('scissor');
    }
    console.log(number);
    // here we check who won the game for each selection
    if ( choice == 'hand'){
        if ( number == 2 ){
            playerGame++;
            currentGame.innerHTML = "Player has WON !!!";
        } else if ( number == 3 ) {
            computerGame++;
            currentGame.innerHTML = "Computer has WON !!!";
        } else {
            draw++;
            currentGame.innerHTML = "It's a DRAW !!!";
        }
    }  else if ( choice == 'rock') {
        if ( number == 3 ){
            playerGame++;
            currentGame.innerHTML = "Player has WON !!!";
        } else if ( number == 1 ) {
            computerGame++;
            currentGame.innerHTML = "Computer has WON !!!";
        } else {
            draw++;
            currentGame.innerHTML = "It's a DRAW !!!";
        }
    } else {
        if ( number == 1 ){
            playerGame++;
            currentGame.innerHTML = "Player has WON !!!";
        } else if ( number == 2 ) {
            computerGame++;
            currentGame.innerHTML = "Computer has WON !!!";
        } else {
            draw++;
            currentGame.innerHTML = "It's a DRAW !!!";
        }
    }
    playerStats.innerHTML = playerGame;
    computerStats.innerHTML = computerGame;
    drawStats.innerHTML = draw;


}