window.onload = () => {

  this.renderCards(cardImages.length)

  this.setEventListener()

}
let card = document.getElementsByClassName('card');
let cardBack = document.getElementsByClassName('card__face--back');
let cardImages = ['Bild1', 'Bild2', 'Bild3', 'Bild4', 'Bild5', 'Bild6', 'Bild7', 'Bild8', 'Bild9'];

function renderCards(size) {
  for (let i = 0; i < size; i++) {
    let newCard = document.createElement('div');
    newCard.className = 'card back-side';
    newCard.innerHTML = `
    <div class="card__face card__face--front"></div>
    <div class="card__face card__face--back"></div>
    `;
    field.appendChild(newCard);
    this.setCardImage(i);
  }
};

function setCardImage(i) {

  return cardBack[i].style.backgroundImage = "url(../images/" + cardImages[i] + ".jpg)";
}

function setEventListener() {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
      card[i].classList.toggle('flipped');
    })
  };
}

