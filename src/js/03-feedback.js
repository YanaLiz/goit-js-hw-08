import throttle from 'lodash.throttle';
const STORAGE_KAY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}

let formData = {};

savedFormData();

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KAY, JSON.stringify(formData));
    console.log(formData);
});

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KAY);
}


function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KAY, message);
}

function savedFormData() {

    const savedFormData = localStorage.getItem(STORAGE_KAY);
    const parsedFormData = JSON.parse(savedFormData);
    if (savedFormData) {
        formData = parsedFormData;
        refs.input= formData.email || '';
        refs.textarea.value = formData.message || '';
        console.log(formData);
    }
    
}
