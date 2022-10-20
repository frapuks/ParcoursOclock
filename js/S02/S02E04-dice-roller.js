const buttonStartRollDice = document.querySelector('.startRollDice');
const inputQuantity = document.querySelector('.quantity');
const app = document.getElementById('app');
const dealerDiv = document.createElement('div');
dealerDiv.className = 'board';
dealerDiv.id = 'dealer';
app.appendChild(dealerDiv);

const player2 = {
    board : document.getElementById('player'),
    dices : [],
    result : 0,
}

const dealer = {
    board : document.getElementById('dealer'),
    dices : [],
    result : 0,
}


function init() {
    buttonStartRollDice.addEventListener('click', playRollDice);
}

function playRollDice() {
    reset(player2);
    reset(dealer);

    let diceQuantity = inputQuantity.value;
    
    for (let i = 0; i < diceQuantity; i++) {
        createDice(player2);
        createDice(dealer);
    }
    displayScore(player2);
    displayScore(dealer);
    displayVictory();
}



function reset(player) {
    player.board.innerHTML = "";
    player.dices = [];
    player.result = 0;
}


function createDice(player){
    const dice = document.createElement('div');
    dice.className = "dice";
    player.board.appendChild(dice);
    rollDice(dice, player);
}

function rollDice(dice, player) {
    const randomNumber = Math.ceil(Math.random() * 6);
    player.dices.push(randomNumber);
    
    let backgroundPosition = (randomNumber - 1) * -100;
    
    dice.style.backgroundPosition = `${backgroundPosition}px`;
}

function displayScore(player) {
    for (const dice of player.dices) {
        player.result += dice;
    }
    const cellScore = document.createElement('div');
    cellScore.textContent = `${player.result}`;
    player.board.appendChild(cellScore);
}

function displayVictory() {
    const cellVictoryPlayer = document.createElement('div');
    const cellVictoryDealer = document.createElement('div');
    if (player2.result > dealer.result) {
        cellVictoryPlayer.textContent = "VICTOIRE";
        cellVictoryDealer.textContent = "Defaite !";
    } else if (player2.result < dealer.result) {
        cellVictoryPlayer.textContent = "Defaite !";
        cellVictoryDealer.textContent = "VICTOIRE";
    } else {
        cellVictoryPlayer.textContent = "égalité ...";
        cellVictoryDealer.textContent = "égalité ...";
    }
    player2.board.appendChild(cellVictoryPlayer);
    dealer.board.appendChild(cellVictoryDealer);
}

init();