window.onload = () => {

  this.renderCards(cardImages.length)

  this.setEventListener()

}

let difficult = false;
let card = document.getElementsByClassName('card');
let cardBack = document.getElementsByClassName('card__face--front');
let cardImages = shuffle(
  ['Bild1', 'Bild2', 'Bild3', 'Bild4', 'Bild5', 'Bild6', 'Bild7', 'Bild8',
  'Bild1', 'Bild2', 'Bild3', 'Bild4', 'Bild5', 'Bild6', 'Bild7', 'Bild8']
);
let classObserver = new MutationObserver (function (event) {
  checkEqual(0, event)
});
let main = document.getElementsByClassName('main');
let field = document.getElementById('field');


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
    this.checkEqual(i);
  }
};

function setCardImage(i) {

  return cardBack[i].style.backgroundImage = "url(assets/images/" + cardImages[i] + ".jpg)";
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

function checkEqual(i, event) {
  classObserver.observe(card[i], {
    attributeFilter: ['class']
  });
  if(event) {
    temp1 = event[0].target.lastElementChild.style.backgroundImage;
    console.log(temp1);
  }
}

function setDifficulty(e) {
  console.log(e)
  if (e === 'normal') {
    difficult = true;
  }
  if (e === 'hard') {
    difficult = true;
  }
  if (e === 'back') {
    difficult = false;
  }
  
  if (difficult === true) {
    main[0].style.opacity = 0;
    main[0].style.height = 0;
    field.style.opacity = 1;
    field.style.height = 'auto';

  } else {
    main[0].style.opacity = 1;
    main[0].style.height = 'auto';
    field.style.opacity = 0;
    field.style.height = 0;

  }
}