const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelector('.hamburgerLine');
const overlay = document.querySelector('.overlay');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  if(!menuOpen){
    overlay.classList.remove('close');
    overlay.classList.add('open');
    hamburgerLine.classList.add('open');
    menuOpen = true;
  } else {
    overlay.classList.remove('open');
    overlay.classList.add('close');
    hamburgerLine.classList.remove('open');
    menuOpen = false;
  }
});
