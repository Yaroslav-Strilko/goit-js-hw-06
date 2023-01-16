const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const navEl = document.getElementById("ingredients");

// console.log(navEl);
const navItemElPush = [];

ingredients.forEach(function callback(element, index, array) {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item")
  navItemEl.textContent = element
  
  navItemElPush.push(navItemEl)
  // navEl.appendChild(navItemEl);
  // console.log(navEl.appendChild(navItemEl)); // <h1></h1>
  // console.log(index)
  // console.log(array)
  // console.log(navItemElPush)
});

navEl.append(...navItemElPush);
// console.log(navItemElPush);
