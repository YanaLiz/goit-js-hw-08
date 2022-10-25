import throttle from 'lodash.throttle';


let form= document.querySelector('.feedback-form');
let textarea= document.querySelector('.feedback-form textarea');
const STORAGE_KAY = 'feedback-form-state';

form.addEventListener('submit', throttle(onFormSubmit, 500));
textarea.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KAY, JSON.stringify(formData));
    console.log(formData);
});

let formData = {};
savedData();

form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt) {
    formData[evt.target.name]=evt.target.value;
    localStorage.setItem(STORAGE_KAY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    formData[evt.target.name]=evt.target.value;
    localStorage.removeItem(STORAGE_KAY);
}

function savedData() {

    const savedFormData = localStorage.getItem(STORAGE_KAY);
    const parsedFormData = JSON.parse(savedFormData);
    if (parsedFormData) {
        value = parsedFormData.email || '';
        textarea.value = parsedFormData.message || '';
    }
    
}




