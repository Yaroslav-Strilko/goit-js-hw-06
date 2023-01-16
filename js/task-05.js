const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
// console.log(inputEl.textContent);
// console.log(spanEl.textContent);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    spanEl.textContent = event.currentTarget.value;
    if (spanEl.textContent === '') {
        spanEl.textContent = "Anonymous";
    }
    // console.log(spanEl.textContent);
}