'use strict';

let feedbackFormState;
let psevdoObject;
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');

if (localStorage.getItem('feedback-form-state')) {
  feedbackFormState = localStorage.getItem('feedback-form-state');
  psevdoObject = JSON.parse(feedbackFormState);
  formData.email = psevdoObject.email;
  inputEmail.value = psevdoObject.email;
  formData.message = psevdoObject.message;
  inputMessage.value = psevdoObject.message;
}

form.addEventListener('input', () => {
  formData.email = inputEmail.value;
  formData.message = inputMessage.value;
  feedbackFormState = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', feedbackFormState);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
    localStorage.clear();
    form.reset();
  } else {
    alert('Fill please all fields');
  }
});
