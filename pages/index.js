const editButton = document.querySelector(".profile__info-button");
const closeButton = document.querySelector(".form__button-close");
const form = document.querySelector(".form");
const modal= document.querySelector('.modal');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');


form.addEventListener('submit', (event) =>{
  event.preventDefault();
  editForm();
})

if ('.modal_open'){
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

function editForm(){
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  toggleModal();

}

function toggleModal(){
    modal.classList.toggle('modal');
}

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click' ,toggleModal);