const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelector('.hamburgerLine');
const overlay = document.querySelector('.overlay');
const starDiscription = document.querySelector('#starDiscription');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modal .close');
const menuItems = document.querySelectorAll('.menuItem');
const labels = document.querySelectorAll('label');
const formControl = document.getElementsByClassName('formControl');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.querySelector('button');
const errorIcons = document.querySelectorAll('.fa-exclamation-circle');
const errorMessages = document.querySelectorAll('small');
let menuOpen = false;

//hamburger menu control
hamburger.addEventListener('click', () => {
	if (!menuOpen) {
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

//menu items clicked
if(window.innerWidth < 768){
  for (let menuItem of menuItems) {
    menuItem.addEventListener('click', () => {
      overlay.classList.remove('open');
      overlay.classList.add('close');
      hamburgerLine.classList.remove('open');
      menuOpen = false;
    });
  }
}

window.addEventListener('resize', () => {
  if(window.innerWidth < 768){
    for (let menuItem of menuItems) {
      menuItem.addEventListener('click', () => {
        overlay.classList.remove('open');
        overlay.classList.add('close');
        hamburgerLine.classList.remove('open');
        menuOpen = false;
      });
    }
  }

  if(window.innerWidth > 768 && overlay.classList.contains('close')){
    overlay.classList.remove('close');
    for (let menuItem of menuItems) {
      menuItem.addEventListener('click', () => {
        overlay.classList.remove('close');
        menuOpen = false;
      });
    }
  }
});

//modal control
starDiscription.addEventListener('click', () => {
	modal.classList.add('showModal');
});

modalClose.addEventListener('click', () => {
	modal.classList.remove('showModal');
});


//form style
for (let i = 0; i < formControl.length; i++) {
	formControl[i].addEventListener('focus', () => {
		addFormStyle(i);
	});

	formControl[i].addEventListener('focusout', () => {
    const inputValue = formControl[i].value.trim();
    if(inputValue === ''){
      removeFormStyle(i);
    } else {
      addFormStyle(i);
	    formControl[i].classList.remove('borderBottom');
    }
	});
}

function addFormStyle(index){
  labels[index].classList.add('showLabel');
	formControl[index].classList.add('borderBottom');
}

function removeFormStyle(index){
  labels[index].classList.remove('showLabel');
	formControl[index].classList.remove('borderBottom');
}

//check inputs when submit button is clicked
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
	//check name is empty
	if (nameValue === '') {
    addError(name, "Name cannot be blank.");
	} else {
    removeError(name);
  }

	//check email is empty or invalid
  //check if it's empty
	if (emailValue === '') {
    addError(email, "Email cannot be blank.");
  } else if (!isEmail(emailValue)) {
    //check if it's valid
    addError(email, "Email is not valid.");
	} else {
    removeError(email);
  }

	//check message is empty
	if (messageValue === '') {
    addError(message, "Message cannot be blank.");
	} else {
    removeError(message);
  }
}

function addError(input, message){
  const icon = input.nextElementSibling;
  const small = icon.nextElementSibling;

  input.classList.add('errorBorder');
  icon.classList.add('showError');
  small.classList.add('showError');
  small.innerText = message;
}

function removeError(input){
  const icon = input.nextElementSibling;
  const small = icon.nextElementSibling;

  input.classList.remove('errorBorder');
  icon.classList.remove('showError');
  small.classList.remove('showError');
}

//check inputs when focusout
for (let i = 0; i < formControl.length; i++) {
  formControl[i].addEventListener('focusout', () => {
    if(formControl[i].classList.contains('errorBorder')){
	    checkInputs();
    }
  });
}

//check email with a regular expression
function isEmail(email) {
	const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return pattern.test(email);
}
