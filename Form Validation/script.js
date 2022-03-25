const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const phoneInput = document.getElementById('phone-input');
const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(nameInput.value, emailInput.value, passwordInput.value);
  validateName();
  validateEmail();
  validatePassword();
});

function validateName() {
  // Upper or lowercase letter, min 2 and max 20 chars
  const nameRegEx = /^[a-zA-Z]{2,20}$/;
  const nameMess = document.getElementById('name');

  if (!nameRegEx.test(nameInput.value)) {
    nameInput.classList.add('invalid');
    nameMess.classList.remove('hide');
  } else {
    nameInput.classList.remove('invalid');
    nameMess.classList.add('hide');
  }
}

function validateEmail() {
  // Email regexp, divided into three parts cuz before email special chars(@.) there is a different set of rules
  const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const emailMess = document.getElementById('email');

  if (!emailRegEx.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailMess.classList.remove('hide');
  } else {
    emailInput.classList.remove('invalid');
    emailMess.classList.add('hide');
  }
}

function validatePassword() {
  // minimum 8 char length, included upper, lowercase, symbols, numbers
  //   const passwordRegEx = /^[a-zA-Z0-9!@#$%^&*_+-=]{8,20}$/;
  const passwordRegEx = /[^\p{L}\d\s@#{8,20}$]/u;
  const passMess = document.getElementById('pass');
  if (!passwordRegEx.test(passwordInput.value)) {
    passwordInput.classList.add('invalid');
    passMess.classList.remove('hide');
  } else {
    passwordInput.classList.remove('invalid');
    passMess.classList.add('hide');
  }
}
