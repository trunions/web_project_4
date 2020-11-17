const editButton = document.querySelector(".profile__info-button");
const closeButton = document.querySelector(".form__button-close");
const form = document.querySelector(".form");
const modal= document.querySelector('.popup');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');

function handleFormSubmit(event){
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  toggleModal();

}

function toggleModal(){
    modal.classList.toggle('popup_type_edit');
    

    if(modal.classList.contains='popup_type_edit'){
      nameInput.value = profileName.textContent;
      jobInput.value = profileJob.textContent;
    }
}

form.addEventListener('submit', handleFormSubmit);


editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click' ,toggleModal);
