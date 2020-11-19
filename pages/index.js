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


//modalEdit functions
function toggleModal(modal){
  modal.classList.toggle('popup_open');
  

  if(modalEdit.classList.contains='popup_open'){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
}

function handleAddFormSubmit(e){
  e.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  toggleModal(modalEdit);

}

//modalNewImage functions
function handleImageFormSubmit(e){
  e.preventDefault();

  addCard({name: titleInput.value, link: imageInput.value});

  toggleModal(modalNewImage);
};

function addCard(card) {
  const cardElement = createCard(card);

  list.prepend(cardElement);
};

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
    toggleModal(modalImage);

  });

  return cardElement;
};


function imageModal(link, name) {
  popupImage.setAttribute('src', link);
  popupImage.setAttribute('alt', name);
  popupCaption.textContent = name;
};


//modalEdit eventlisteners
editButton.addEventListener('click', () => {
  toggleModal(modalEdit);
});

formEdit.addEventListener('submit', handleAddFormSubmit);

closeButton.addEventListener('click' ,() => {
  toggleModal(modalEdit);
});

//modalNewImage event listeners
addButton.addEventListener('click', () => {
  toggleModal(modalNewImage);
});

formImage.addEventListener('submit' ,handleImageFormSubmit);

addCloseButton.addEventListener('click', () => {
  toggleModal(modalNewImage);
});

//modalImage event listeners
imageCloseButton.addEventListener('click', () => {
  toggleModal(modalImage);
});

initialCards.forEach(card => {
  addCard(card);

});
