const scissor = document.getElementById("SCISSOR");
const paper = document.getElementById("PAPER");
const rock = document.getElementById("ROCK");
const pcHealth = document.getElementById("pc-health");
const playerHealth = document.getElementById("player-health");
let curComputerHealth = 100;
let curPlayerHealth = 100;

const DAMAGE = 25;

let event = -1;
let computerMove = -1;

function resetGame(){
    curComputerHealth = 100;
    curPlayerHealth = 100;
    pcHealth.value = 100;
    playerHealth.value = 100;
}

function scissorPlay(){
    event = 0;
    play(event);
}
function paperPlay(){
    event = 1;
    play(event);
}
function rockPlay(){
    event = 2;
    play(event);
}

function printWinner(winner){
    console.log(winner);
    alert(winner+" WON!!");
    if( winner == "PLAYER"){
        curComputerHealth -= DAMAGE;
        pcHealth.value -= DAMAGE;
    } else {
        curPlayerHealth -= DAMAGE;
        playerHealth.value -= DAMAGE;
    }

    if( curPlayerHealth <= 0 ){
        alert(`${winner} wins!!`);
        resetGame();
    } else if ( curComputerHealth <= 0 ){
        alert(`${winner} wins!!`);
        resetGame();
    }
}

function play(event){
    computerMove = parseInt(Math.random()*3);
    console.log(computerMove);
    if(computerMove == event){
        console.log("Draw");
	alert("DRAW!");
    } else if( computerMove+event == 2){
        if( computerMove > event){
            printWinner("COMPUTER");
        }else{
            printWinner("PLAYER");
        }
    } else if( computerMove+1 == event || computerMove-1 == event ){
        if( computerMove < event ){
            printWinner("COMPUTER");
        } else {
            printWinner("PLAYER");
        }
    }
}

scissor.addEventListener( 'click', scissorPlay );
paper.addEventListener('click', paperPlay );
rock.addEventListener('click', rockPlay );