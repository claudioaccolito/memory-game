
// Array con gli animali
var animals = [
"🐻","🐴","🐶","🐱","🐷","🦊","🐰","🐵","🐹","🐼","🦁","🦀","🐬","🐢","🦆"
];

//genero automaticamente la tabella con le carte
function generateCards() {
  
  const randomFunc = () => 0.5 - Math.round(Math.random());
  var randomAnimalsPairs = animals.concat(animals).sort(randomFunc);
  
  var cards = "";
  randomAnimalsPairs.forEach((animal,i) => {
    var cardFront = `<div class="card-front">${animal}</div>`;
    var cardBack = `<div class="card-back"></div>`;
    cards += `<span onClick=flippedCard(${i}) class="card" id="card-${i}">${cardFront}${cardBack}</span>`;
  });

  document.getElementById("cards-list").innerHTML = cards;
}


var count = 0;
var selectedCards = [];
function flippedCard(i) {
  if (selectedCards.length <= 2) {
    count ++;

    var cardId = `card-${i}`;
    var selectedCard = document.getElementById(cardId);
    selectedCard.classList.toggle('flipped');
    
    selectedCards.push(cardId);
  }

  if (selectedCards.length === 2) setTimeout(hideCards, 1500);
}

function hideCards() {
  selectedCards.forEach(cardId => {
    var c = document.getElementById(cardId);
    c.classList.remove('flipped');
  });
  selectedCards = [];
} 

function launchGame() {
  generateCards();
}

launchGame();