//modals and forms
const modalEdit= document.querySelector('.popup_type_edit');
const modalNewImage = document.querySelector('.popup_type_new-image');
const modalImage = document.querySelector('.popup_type_image');
const formEdit = document.querySelector('.form_edit');
const formImage = document.querySelector('.form_new-pic');

//modalEdit DOM elements
const editButton = document.querySelector('.profile__info-button');
const closeButton = document.querySelector('.form__button-close');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');

//modalNewImage DOM elements
const addButton = document.querySelector('.profile__button-add');
const addCloseButton = document.querySelector('.form__button_close-add');
const titleInput = document.querySelector('.form__input_type_title');
const imageInput = document.querySelector('.form__input_type_image');


//modalImage DOM elements
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const imageCloseButton = document.querySelector('.form__button_close_new-image');

//elements template
const cardTemplate = document.querySelector('.card__template').content.querySelector('.elements__card');
const list = document.querySelector('.elements');

//errorMessage
const errorMessage = modalNewImage.querySelector('.form__input');


//toggleModal function
function toggleModal(modal){
  modal.classList.toggle('popup_open');
}

//openModal function
function openModal(modal){
  toggleModal(modal);
  window.addEventListener('keydown', escKeyClose);
  modal.addEventListener('click', closePopup);
}

//closeModal function
function closeModal(modal){
  toggleModal(modal);
  window.removeEventListener('keydown', escKeyClose);
  modal.removeEventListener('click', closePopup);
}

//modalNewImage functions
function handleImageFormSubmit(e){
  e.preventDefault();

  addCard({name: titleInput.value, link: imageInput.value});

  openModal(modalNewImage);
};

//imageModal function
function imageModal(link, name) {
  popupImage.setAttribute('src', link);
  popupImage.setAttribute('alt', name);
  popupCaption.textContent = name;
};

//closePopup function
function closePopup(e){
  if(e.target === this || e.target === this.querySelector('.form__button-close')) {
    closeModal(this);
  }
}

//close popups with escape key function
function escKeyClose(e){
  if(e.key === 'Escape'){
    closeModal(document.querySelector('.popup_open'));
  }
}

//create new cards functions
function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardText = cardElement.querySelector('.elements__card-text');
  const cardImage = cardElement.querySelector('.elements__card-image');
  const cardHeart = cardElement.querySelector('.elements__card-heart');
  const cardDelete = cardElement.querySelector('.elements__card-delete');
  

  cardDelete.addEventListener('click', (e) => {
    e.target.closest('.elements__card').remove();
  });

  cardHeart.addEventListener('click', (e) => {
    e.target.classList.toggle('elements__card_heart-selected');
  });

  cardText.textContent = card.name;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);

  cardImage.addEventListener('click', (e) =>{
    
    imageModal(card.link, card.name);
    openModal(modalImage);

  });

  return cardElement;
};

function addCard(card) {
  const cardElement = createCard(card);

  list.prepend(cardElement);
};

initialCards.forEach(card => {
  addCard(card);

});

//eventlisteners
addButton.addEventListener('click', (e) => openModal(modalNewImage));
editButton.addEventListener('click',(e) => openModal(modalEdit));

modalEdit.addEventListener('submit', (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value; 
  profileJob.textContent = jobInput.value;
  
  closeModal(modalEdit);
});

formImage.addEventListener('submit' ,handleImageFormSubmit);