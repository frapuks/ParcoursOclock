const JustePrix = {
    level : 1,
    randomNumber : "",
    counter : 0,
    partyCounter : 0,
    victory : false,
    userNumber : "",
    boardResultJustePrix : document.querySelector('.boardResultJustePrix'),

    startJustePrix : function() {
        JustePrix.initGame();
        JustePrix.playGame();
        JustePrix.endGame();
        JustePrix.displayScore();
    },

    initGame : function() {
        JustePrix.chooseLevel();
        JustePrix.randomNumber = Math.round(Math.random() * (JustePrix.level * 10));
        JustePrix.counter = 1;
        JustePrix.partyCounter++;
        JustePrix.victory = false;
    },

    chooseLevel : function() {
        do{
            JustePrix.level = parseInt(prompt(`Choissisez votre niveau entre 1 et 10 (Question obligatoire !)`));
        } while (isNaN(JustePrix.level) || JustePrix.level < 1 || JustePrix.level > 10);
    },

    displayScore : function() {
        let rowScore = document.createElement('tr');
        let cellPartyNumber = document.createElement('td');
        cellPartyNumber.textContent = JustePrix.partyCounter;
        let cellScore = document.createElement('td');
        cellScore.textContent = JustePrix.counter;
        let cellVictory = document.createElement('td');
        cellVictory.textContent = JustePrix.victory;
        let cellRandomNumber = document.createElement('td');
        cellRandomNumber.textContent = JustePrix.randomNumber;
        let cellLevel = document.createElement('td');
        cellLevel.textContent = JustePrix.level;
    
        rowScore.appendChild(cellPartyNumber);
        rowScore.appendChild(cellLevel);
        rowScore.appendChild(cellRandomNumber);
        rowScore.appendChild(cellScore);
        rowScore.appendChild(cellVictory);
        JustePrix.boardResultJustePrix.appendChild(rowScore);
    },

    endGame : function() {
        if (JustePrix.userNumber === JustePrix.randomNumber) {
            alert(`OUI OUI OUI, C'est Gagné !!! Vous avez réussi en ${JustePrix.counter} essais`);
            JustePrix.victory = true;
        } else {
            JustePrix.counter--;
            alert(`C'est perdu. Vous avez fait ${JustePrix.counter} essais !`);
        }
    },
    
    playGame : function() {
        JustePrix.userNumber = parseInt(prompt(`Trouvez le Juste Prix entre 0 et ${JustePrix.level * 10}`));
    
        while (JustePrix.userNumber !== JustePrix.randomNumber) {
            if (isNaN(JustePrix.userNumber)){
                break;
            } else if (JustePrix.userNumber < JustePrix.randomNumber) {
                JustePrix.userNumber = parseInt(prompt(`C'est PLUS que ${JustePrix.userNumber}`));
            } else if (JustePrix.userNumber > JustePrix.randomNumber) {
                JustePrix.userNumber = parseInt(prompt(`C'est MOINS que ${JustePrix.userNumber}`));
            }
            JustePrix.counter++;
        }
    },
}