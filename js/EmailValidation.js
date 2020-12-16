let email = {},
    mailButton;

const isValidEmailAddress = function (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isEmpty = function (fieldValue) {
    return !fieldValue || !fieldValue.length;
};
const doubleCheckEmailAddress = function () {
    if (isValidEmailAddress(email.input.value)) {
        email.input.removeEventListener('input', doubleCheckEmailAddress);
        removeErrors(email);
    } else {
        if (isEmpty(email.input.value)) {
            email.errorMessage.innerText = 'The input field is required.';
        } else {
            email.errorMessage.innerText = 'Invalid Email.';
        }
    }
};

const addErrors = function (formField) {
    formField.field.classList.add('has-error');
    formField.errorMessage.classList.add('toggleVisibility');
};

const removeErrors = function (formField) {
    formField.field.classList.remove('has-error');
    formField.errorMessage.classList.remove('toggleVisibility');
};
const getDOMElements = function () {
    email.label = document.querySelector('.js-output');
    email.errorMessage = email.label.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    email.field = document.querySelector('.js-email-field');

    mailButton = document.querySelector('.js-sign-in-button');

};

const enableListeners = function () {
    email.input.addEventListener('blur', function () {
        if (!isValidEmailAddress(email.input.value)) {
            email.errorMessage.innerText = isEmpty(email.input.value) ? 'The input field is required.' : 'Invalid Email.';
            addErrors(email);
            email.input.addEventListener('input', doubleCheckEmailAddress);
        }
    });
    mailButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (!isValidEmailAddress(email.input.value)) {
            addErrors(email);
            email.input.addEventListener('input', doubleCheckEmailAddress);
        }
    });
};
document.addEventListener('DOMContentLoaded', function () {
    getDOMElements();
    enableListeners();
});
