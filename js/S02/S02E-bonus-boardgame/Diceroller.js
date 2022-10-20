const DiceROller = {
    inputQuantity : document.querySelector('.quantityDice'),
    boardResultDiceRoller : document.querySelector('.boardResultDiceRoller'),
    divResultDiceRoller : document.querySelector('.boardResult'),
    playerDiv : document.createElement('div'),
    dealerDiv : document.createElement('div'),
    partyCounter : 0,

    player2 : {
        board : document.getElementById('player'),
        dices : [],
        result : 0,
        victory : false,
    },
    
    dealer : {
        board : document.getElementById('dealer'),
        dices : [],
        result : 0,
        // victory : false,
    },

    
    startDiceRoller : function() {
        DiceROller.partyCounter++;
        DiceROller.creatBoardPlayers();
        DiceROller.reset(DiceROller.player2);
        DiceROller.reset(DiceROller.dealer);
        
        let diceQuantity = DiceROller.inputQuantity.value;
        
        for (let i = 0; i < diceQuantity; i++) {
            DiceROller.createDice(DiceROller.player2);
            DiceROller.createDice(DiceROller.dealer);
        }
        DiceROller.displayTotal(DiceROller.player2);
        DiceROller.displayTotal(DiceROller.dealer);
        DiceROller.displayVictory();
        DiceROller.displayScore();
    },
    
    creatBoardPlayers : function() {
        DiceROller.divResultDiceRoller.innerHTML = "";
        DiceROller.playerDiv.className = 'boardDiceRoller';
        DiceROller.playerDiv.id = 'player';
        
        DiceROller.dealerDiv.className = 'boardDiceRoller';
        DiceROller.dealerDiv.id = 'dealer';
        DiceROller.divResultDiceRoller.appendChild(DiceROller.playerDiv);
        DiceROller.divResultDiceRoller.appendChild(DiceROller.dealerDiv);

        DiceROller.player2.board = document.getElementById('player');
        DiceROller.dealer.board = document.getElementById('dealer');
    },
    
    reset : function(player) {
        player.board.innerHTML = "";
        player.dices = [];
        player.result = 0;
    },
    
    
    createDice : function(player){
        const dice = document.createElement('div');
        dice.className = "dice";
        player.board.appendChild(dice);
        DiceROller.rollDice(dice, player);
    },
    
    rollDice : function(dice, player) {
        const randomNumber = Math.ceil(Math.random() * 6);
        player.dices.push(randomNumber);
        
        let backgroundPosition = (randomNumber - 1) * -100;
        
        dice.style.backgroundPosition = `${backgroundPosition}px`;
    },
    
    displayTotal : function(player) {
        for (const dice of player.dices) {
            player.result += dice;
        }
        const cellScore = document.createElement('div');
        cellScore.textContent = `${player.result}`;
        player.board.appendChild(cellScore);
    },
    
    displayVictory : function() {
        const cellVictoryPlayer = document.createElement('div');
        const cellVictoryDealer = document.createElement('div');
        if (DiceROller.player2.result > DiceROller.dealer.result) {
            cellVictoryPlayer.textContent = "VICTOIRE";
            DiceROller.player2.victory = true;
            cellVictoryDealer.textContent = "Defaite !";
            // DiceROller.dealer.victory = false;
        } else if (DiceROller.player2.result < DiceROller.dealer.result) {
            cellVictoryPlayer.textContent = "Defaite !";
            DiceROller.player2.victory = "";
            cellVictoryDealer.textContent = "VICTOIRE";
            // DiceROller.dealer.victory = true;
        } else {
            cellVictoryPlayer.textContent = "égalité ...";
            DiceROller.player2.victory = "égalité";
            cellVictoryDealer.textContent = "égalité ...";
            // DiceROller.player2.victory = "égalité";
        }
        DiceROller.player2.board.appendChild(cellVictoryPlayer);
        DiceROller.dealer.board.appendChild(cellVictoryDealer);
    },

    displayScore : function() {
        // doit afficher les scores dans le tableau

        let rowScore = document.createElement('tr');
        let cellPartyNumber = document.createElement('td');
        cellPartyNumber.textContent = DiceROller.partyCounter;

        let cellScorePlayer2 = document.createElement('td');
        cellScorePlayer2.textContent = DiceROller.player2.result;

        let cellScoreDealer = document.createElement('td');
        cellScoreDealer.textContent = DiceROller.dealer.result;

        let cellVictory = document.createElement('td');
        cellVictory.textContent = DiceROller.player2.victory;
    
        rowScore.appendChild(cellPartyNumber);
        rowScore.appendChild(cellScorePlayer2);
        rowScore.appendChild(cellScoreDealer);
        rowScore.appendChild(cellVictory);

        DiceROller.boardResultDiceRoller.appendChild(rowScore);
    },
}