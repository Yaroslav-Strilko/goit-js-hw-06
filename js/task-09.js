// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


const refs = {
    body: document.body,
    span: document.querySelector('.color'),
    btnChengeColor: document.querySelector('.change-color'),
}

// console,console.log(refs.body);
// console,console.log(refs.span);
// console,console.log(refs.btnChengeColor);

refs.btnChengeColor.addEventListener('click', () => {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  refs.span.textContent = hexColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};