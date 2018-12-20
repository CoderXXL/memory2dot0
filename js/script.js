window.onload = () => {

  this.renderCards(cardImages.length)

  this.setEventListener()

}

let card = document.getElementsByClassName('card');
let cardBack = document.getElementsByClassName('card__face--front');
let cardImages = shuffle(['Bild1', 'Bild2', 'Bild3', 'Bild4', 'Bild5', 'Bild6', 'Bild7', 'Bild8',
                          'Bild1', 'Bild2', 'Bild3', 'Bild4', 'Bild5', 'Bild6', 'Bild7', 'Bild8']);

function renderCards(size) {
  console.log(cardImages)
  for (let i = 0; i < size; i++) {
    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
    <div class="card__face card__face--back"></div>
    <div class="card__face card__face--front"></div>
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
    card[i].addEventListener('click', function() {
      card[i].classList.toggle('flipped');
    })
  };
}

function shuffle(array) {
  let i = array.length, a = 0, temp1;

  while (i--) {
      a = Math.floor(Math.random() * (i+1));
      temp1 = array[i];
      array[i] = array[a];
      array[a] = temp1;
  }

  return array;
}
