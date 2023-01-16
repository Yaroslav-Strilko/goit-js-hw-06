
const counterValue = document.getElementById("value");
let value = 0
// console.log(value);
// console.log(counterValue);
// console.log(counterValue.textContent);

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
// console.log(decrementBtn.textContent);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);
// console.log(incrementBtn.textContent);



// const targetBtn = 0;
decrementBtn.addEventListener('click', () => {
    value -=1
    counterValue.textContent = value;
} );



incrementBtn.addEventListener('click', () => {
    value +=1
    counterValue.textContent = value;
} );

