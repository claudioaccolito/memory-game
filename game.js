
// Array con gli animali
var animals = [
"🐻","🐴","🐶","🐱",
"🐷","🦊","🐰","🐤",
"🐵","🦄","🐹","🐼",
"🦁","🦀","🐬","🐢"
];

//genero automaticamente la tabella con le carte
function generateCards() {
  var cards = "";
  animals.forEach((animal,i) => {
    if (i%4 === 0) cards += "<br/>";
    cards += `<span class="card">${animal}</span>`;
  });

  document.getElementById("cards-list").innerHTML = cards;
}

function launchGame() {
  generateCards();
}

launchGame();