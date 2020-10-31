const editButton = document.querySelector(".profile__info-button");
const closeButton = document.querySelector(".form__button-close");
const form = document.querySelector(".form");
const modal= document.querySelector('.modal');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
const color = document.querySelector('.modal__container');


form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  toggleModal();
  toggleColor();
  
})

function toggleModal(){
    modal.classList.toggle('modal');
}

function toggleColor(){
    color.classList.toggle('modal__container');
}

editButton.addEventListener('click', toggleModal);
editButton.addEventListener('click', toggleColor);

closeButton.addEventListener('click' ,toggleModal);
closeButton.addEventListener('click', toggleColor);