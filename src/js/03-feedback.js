import throttle from 'lodash.throttle';



const STORAGE_KAY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
}
let formData = {};

savedFormData();

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KAY, JSON.stringify(formData));
    console.log(formData);
});

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KAY);
}

function savedFormData() {
    const savedFormData = localStorage.getItem(STORAGE_KAY);
    const parsedFormData = JSON.parse(savedFormData);
    if (parsedFormData) {
        formData = parsedFormData;
        refs.email.value = formData.email || '';
        refs.textarea.value = formData.message || '';
        console.log(formData);
    }
}