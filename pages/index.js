const editButton = document.querySelector(".profile__info-button");
const closeButton = document.querySelector(".form__button-close");
const form = document.querySelector(".form");
const modal= document.querySelector('.modal');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');


form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  const modal = document.querySelector('.modal__open');
    modal.classList.add('modal');

    const color = document.querySelector('.modal__container_black');
    color.classList.add('modal__container');
  
})


editButton.addEventListener('click', function() {

    const modal = document.querySelector('.modal');
    modal.classList.remove('modal')

    const color = document.querySelector('.modal__container');
    color.classList.remove('modal__container');
    
})

closeButton.addEventListener('click', function() {

    const modal = document.querySelector('.modal__open');
    modal.classList.add('modal');

    const color = document.querySelector('.modal__container_black');
    color.classList.add('modal__container');
})