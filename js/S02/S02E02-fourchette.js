let randomNumber;
let counter = 0;
let level = 1;
let partyCounter = 0;
let victory = false;
let userNumber;
const buttonStart = document.querySelector('.start');
const boardResult = document.querySelector('.boardResult');


function init() {
    buttonStart.addEventListener('click', startJustePrix);
}

function startJustePrix() {
    initGame();
    playGame();
    endGame();
    displayScore();
}

function chooseLevel() {
    do{
        level = parseInt(prompt(`Choissisez votre niveau entre 1 et 10 (Question obligatoire !)`));
    } while (isNaN(level) || level < 1 || level > 10);
}

function initGame() {
    randomNumber = Math.round(Math.random() * (level * 10));
    counter = 1;
    chooseLevel();
    partyCounter++;
    victory = false;
}

function displayScore() {
    let rowScore = document.createElement('tr');
    let cellPartyNumber = document.createElement('td');
    cellPartyNumber.textContent = partyCounter;
    let cellScore = document.createElement('td');
    cellScore.textContent = counter;
    let cellVictory = document.createElement('td');
    cellVictory.textContent = victory;
    let cellRandomNumber = document.createElement('td');
    cellRandomNumber.textContent = randomNumber;
    let cellLevel = document.createElement('td');
    cellLevel.textContent = level;

    rowScore.appendChild(cellPartyNumber);
    rowScore.appendChild(cellLevel);
    rowScore.appendChild(cellRandomNumber);
    rowScore.appendChild(cellScore);
    rowScore.appendChild(cellVictory);
    boardResult.appendChild(rowScore);
}

function endGame() {
    if (userNumber === randomNumber) {
        alert(`OUI OUI OUI, C'est Gagné !!! Vous avez réussi en ${counter} essais`);
        console.log(`nombre d'essais : ${counter}`);
        victory = true;
    } else {
        counter--;
        alert(`C'est perdu. Vous avez fait ${counter} essais !`);
    }
}

function playGame() {
    userNumber = parseInt(prompt(`Trouvez le Juste Prix entre 0 et ${level * 10}`));

    while (userNumber !== randomNumber) {
        if (isNaN(userNumber)){
            break;
        } else if (userNumber < randomNumber) {
            userNumber = parseInt(prompt(`C'est PLUS que ${userNumber}`));
        } else if (userNumber > randomNumber) {
            userNumber = parseInt(prompt(`C'est MOINS que ${userNumber}`));
        }
        counter++;
    }
}


init();