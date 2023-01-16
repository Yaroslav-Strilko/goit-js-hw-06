const input = document.querySelector('#font-size-control');
// console.log(input);
const output = document.querySelector('#text');
// console.log(output);

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    output.style.fontSize = `${input.value}px`
    // console.log(`${input.value}px`);
  };