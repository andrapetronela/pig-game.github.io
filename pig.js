var scores, roundScore, activePlayer, gamePlaying, dice;

init();

var lastDice;

//type conversion (current + active player: 0 /1)

//document.querySelector("#current-" + activePlayer).textContent = dice;

/////////////////           ZAR    ////////////
// ascunde zarul cand se incarca pagina la inceput

// arata ZARUL cand e apasat ROLL-DICE
document.querySelector("#roll-dice").addEventListener('click', function() {
    if (gamePlaying){
    // random nr 
     var dice1 = Math.floor(Math.random() * 6)+1;
     var dice2 = Math.floor(Math.random() * 6)+1;
   // display the result
    document.getElementById("dice-1").style.display = 'block';
    document.getElementById("dice-2").style.display = "block";
    document.getElementById('dice-1').src = "dice-" + dice1 + ".png";
     document.getElementById('dice-2').src = "dice-" + dice2 + ".png";
        if(dice1 !==1 && dice2 !==1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        
        
    // update the round score if the nr is not 1
        // 6 x 2 in a row 
       /* if (lastDice === 6 && dice === 6) {
            //player loses the score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        // next player
        nextPlayer();
    }
         // update the round score if the nr is not 6 6 
        lastDice = dice;
        } */
}});
document.querySelector('#hold').addEventListener('click', function(){
    if(gamePlaying) {
      // Add current score to  global score
    scores[activePlayer] += roundScore;
    
    
    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('#winning-input').value;
    var winScore;    
         // 0, NULL, undefined, "" are COERCED to false
        // anything else is COERCED to true
        if(input) {
            winScore = input; 
        } else {
            winScore = 100;
        }
        
        
    // Check if player won the game
    if (scores[activePlayer] >= winScore) {
        document.querySelector('#player-' + activePlayer).textContent = "WINNER!";
        document.getElementById("dice-1").style.display = 'none';
        document.getElementById("dice-2").style.display = "none";        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }  
  }
});

function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // background colorat la playerul care joaca (activ)
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.getElementById("dice-1").style.display = 'none';
    document.getElementById("dice-2").style.display = "none";}


document.querySelector('#new-game').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.getElementById("dice-1").style.display = 'none';
    document.getElementById("dice-2").style.display = "none";
    
    document.getElementById("score-0").textContent =  '0';
    document.getElementById("score-1").textContent =  '0';
    document.getElementById("current-0").textContent =  '0';
    document.getElementById("current-1").textContent =  '0';
    document.getElementById('player-0').textContent = "Player 1";
    document.getElementById('player-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/























