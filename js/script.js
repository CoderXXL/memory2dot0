window.onload = () => {
  this.setEventListener()
}

function setEventListener() {
  let card = document.getElementsByClassName('card');

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function(event) {
      card[i].classList.toggle('is-flipped');
    })
  };
}