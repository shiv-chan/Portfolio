const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelector('.hamburgerLine');
const overlay = document.querySelector('.overlay');
const starDiscription = document.querySelector('#starDiscription');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modal .close');
const menuItems = document.querySelectorAll('.menuItem');
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

for(let menuItem of menuItems){
  menuItem.addEventListener('click', () => {
    overlay.classList.remove('open');
    overlay.classList.add('close');
    hamburgerLine.classList.remove('open');
    menuOpen = false;
  });
}


starDiscription.addEventListener('click', () => {
  modal.classList.add('showModal');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('showModal');
});