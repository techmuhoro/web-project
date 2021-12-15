const loginBtn = document.querySelector('.root .header .header-right a');
const loginBtn2 = document.querySelector('.root .main .account .login');
const modal = document.querySelector('.root .modal');
const closeModalBtn = document.querySelector('.root .modal .close-modal');

loginBtn.addEventListener('click', displayModal);
loginBtn2.addEventListener('click', displayModal);
closeModalBtn.addEventListener('click', removeModal);

function displayModal(e) {
  e.preventDefault();
  if (modal.classList.contains('hide')) {
    modal.classList.remove('hide');
  }
  modal.classList.add('show');
}

function removeModal() {
  if (modal.classList.contains('show')) {
    modal.classList.remove('show');
  }
  modal.classList.add('hide');
}
