
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
    cards += `<span onclick=flippedCard(${i}) class="card" value=${animal} id="card-${i}">${cardFront}${cardBack}</span>`;
  });

  document.getElementById("cards-list").innerHTML = cards;
}

var winCount = 0;
var selectedCards = [];
function flippedCard(i) {

  if (selectedCards.length === 2) return;

  var cardId = `card-${i}`;
  var selectedCard = document.getElementById(cardId);
  selectedCard.classList.toggle('flipped');
  selectedCards.push(cardId);
  

  if (selectedCards.length === 2) {
    checkCards()
  }
}

function checkCards() {
  var c1 = document.getElementById(selectedCards[0]);
  var c2 = document.getElementById(selectedCards[1]);

  if (c1.getAttribute("value") === c2.getAttribute("value")) { 
    c1.onclick = null;
    c2.onclick = null;
    winCount++;
    selectedCards = [];
    if (winCount === animals.length) alert("Hai Vinto. Sei un eroe!")
  }
  else setTimeout(hideCards, 1500);
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