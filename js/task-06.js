const inputEl = document.querySelector('#validation-input');
/// const spanEl = document.querySelector('#name-output');
// console.log(inputEl);
// console.log(inputEl.dataset.length);
// console.log(spanEl.textContent);

inputEl.addEventListener("blur", onInputChange);
function onInputChange(event) {
   
    if (Number(inputEl.dataset.length) === inputEl.value.length) {
        // console.log(inputEl.value.length);
        // console.log(event.currentTarget.value.length);

        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
      
    // console.log(event.currentTarget.value);
}







// function checkNumberOfSymbol() {
//   if (input.value.length !== Number(input.dataset.length)) {
//     input.classList.add(`invalid`);
//   } else input.classList.replace(`invalid`, `valid`);
// }


// const input = document.querySelector("#validation-input");
// // console.log(input.dataset.length);
// input.addEventListener("blur", function () {
//   if (Number(input.dataset.length) === input.value.length) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// });
// console.log(input.value);


