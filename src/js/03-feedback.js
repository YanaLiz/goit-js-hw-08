import throttle from 'lodash.throttle';

const STORAGE_KAY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}


const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
 

refs.form.addEventListener('input', e => {
    console.log(e.target.name);
    console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    console.log(formData);
});


function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KAY);
}
populateTextarea();
 
function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KAY, message);

}
function populateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KAY);

    if (saveMessage) {
        console.log(saveMessage);
        refs.textarea.value = saveMessage; 
        }
    //  else {
    //     localStorage.setItem(STORAGE_KAY, JSON.stringify(formData));
    //     formData = JSON.parse(localStorage.getItem(STORAGE_KAY));
    // } 
}




