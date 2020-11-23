//Function to show error messages
function showErrorMessage(input, {errorClass, inputErrorClass}) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

//Function to hide the error messages
function hideErrorMessage(input, {errorClass, inputErrorClass}) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = '';

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

//Function to check the input validity
function checkInputValidity(input, rest) {
    if(input.validity.valid) {
        hideErrorMessage(input, rest)
    } else {
        showErrorMessage(input, rest)
    }
}

//Function to change state of Save/Create buttons
function toggleButtonState(input, button, inactiveButtonClass) {
    const isValid = input.every((input) => input.validity.valid);

    if (isValid) {
        button.classList.remove(inactiveButtonClass);
    } else {
        button.classList.add(inactiveButtonClass);
        inactiveButtonClass.disabled = true;
    }
}

//Function to enable validation of each forms input fields
function enableValidation({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) {
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach((form) => {
        form.addEventListener('submit', ((e) => {
            e.preventDefault()
        }))
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);
        toggleButtonState(inputs, button, inactiveButtonClass);
        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                //check Input Validity
                checkInputValidity(input, rest);
                //toggle button state
                toggleButtonState(inputs, button, inactiveButtonClass);
            });
       });
    });
}


// enabling validation
enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
});


