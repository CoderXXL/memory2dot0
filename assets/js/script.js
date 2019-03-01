window.onload = () => {

  this.renderCards(cardImages.length)
  this.setEventListener()
}

let card = document.getElementsByClassName('card');
let cardBack = document.getElementsByClassName('card__face--front');
let cardImages = shuffle(
  ['Bild1', 'Bild2', 'Bild3', 'Bild4', 'Bild5', 'Bild6', 'Bild7', 'Bild8',
  'Bild1', 'Bild2', 'Bild3', 'Bild4', 'Bild5', 'Bild6', 'Bild7', 'Bild8']
  );

let classObserver = new MutationObserver (function (event) {
  getEvent(0, event);
  checkEqual();
});
let classObserverEvent;
let tempEvent;

let main = document.getElementsByClassName('main');
let field = document.getElementById('field');
let difficult = false;
let counter = 0;
let points = 0;


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
    this.getEvent(i);
  }
};

function setCardImage(i) {

  return cardBack[i].style.backgroundImage = "url(assets/images/" + cardImages[i] + ".jpg)";
}

function setEventListener() {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
      card[i].classList.toggle('flipped');
      counter ++;
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


function getEvent(i, event) {
  classObserver.observe(card[i], {
    attributeFilter: ['class']
  });

  classObserverEvent = event;

  if(counter === 1) {
    tempEvent = event[0].target.lastElementChild.style.backgroundImage;
  }
}


function checkEqual() {
  if(counter >= 2) {
    counter = 0;
    if(classObserverEvent) {
      for(let i = 0; i < card.length; i++) {
        if (tempEvent === classObserverEvent[0].target.lastElementChild.style.backgroundImage) {
          console.log(true)
        } else {
            setTimeout(e => {
              card[i].classList.remove('flipped');
            }, 1000)
        }
      }
    }
  }
}

function setPoints() {
  points ++;
  console.log(points);
}


// just for the moment
function setDifficulty(e) {
  switch(e) {
    case 'normal':
      difficult = true;
      break;
    case 'hard':
      difficult = true;
      break;
    case 'back':
      difficult = false;
      break;
    default:
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