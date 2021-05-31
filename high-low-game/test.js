function buildDeck() {
    const suits = ['spades','clubs','hearts','diamonds'];
    const ranks = ['A','2','3','4','5','6','7','8',
  '9','10','J','Q','K'];
    const deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push({
                suit: suits[i],
                rank: ranks[i],
                value: i
            });
        }
        
    }
    return deck;
  }
function shuffle(deck) {
    let shuffledDeck = deck;
    let currentIdx = deck.length;
    let tempVal = null;
    let randomIdx = null;
  
    while (currentIdx > 0) {
      //Generate a random number between 0 and 51 to randomly select some card from the deck
      randomIdx = Math.floor(Math.random() * currentIdx);
      //Decrement the currentIdx
      currentIdx --;
      //Assign the last card in the index to a temporary value
      temporaryValue = shuffledDeck[currentIdx];
      //Assign the value of the last card in the index to the value of a random card in the deck
      shuffledDeck[currentIdx] = shuffledDeck[randomIdx];
      //Assign the value of a random card in the deck to the value of the last index
      shuffledDeck[randomIdx] = temporaryValue;
      //This method ensures we go through 52 random value swaps
  
    }
    return shuffledDeck;
  
  
  }

const readlineSync = require('readline-sync');
function getInput(prompt) {
    return readlineSync.question(`${prompt}: `);
}

function greet() {
    let name = getInput('Hello player, what is your name?');
    console.log(`Welcome ${name}, we hope you have fun!`)
    return name;
  }

function compare(valOne, valTwo) {
    return valOne.value - valTwo.value;

  }
function guess(cardOne, cardTwo) {
    console.log(`The current card is the ${cardOne.rank} of ${cardOne.suit}.`)
    let input = getInput(`Will the next card be higher (h) or lower (l)?`);
    if (input == 'h') {
      return compare(cardOne, cardTwo) < 0;
  
    } else if (input == 'l') {
      return compare(cardOne, cardTwo) > 0;
  
    } else {
      console.log('You need to guess either h or l, so unfortunately you get no points for this round');
      return false;
    }
  }

function playGame() {
    let orderedDeck = buildDeck();
    let shuffledDeck = shuffle(orderedDeck);
    let playerName = greet();
    let score = 0;
    let currentCard = shuffledDeck.pop();
    while (score < 5 && score < shuffledDeck.length) {
      let nextCard = shuffledDeck.pop();
      if (guess(currentCard, nextCard) === true) {
        score += 1;
        console.log(`Congratulations ${playerName}, your score is now ${score}. Way to go!`);
      }
      else {
        console.log(`Sorry ${playerName} you scored no points. Your score is still ${score}.`)
      }
      currentCard = nextCard;
    }

    return (shuffledDeck.length > 0) ? 'Congrats, you won!!!' : 'Sorry, you are out of cards and have lost.'; 
  }

playGame();

  