// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ul#categories


const activeLink = document.querySelector("ul#categories");
console.log("Number of categories:", activeLink.children.length);  // Number of categories: 3


const activeLinkAnimals = document.querySelectorAll(".item")[0];
console.log("Category:",activeLinkAnimals.firstElementChild.textContent);
console.log("Elements:",activeLinkAnimals.lastElementChild.children.length);


const activeLinkProducts = document.querySelectorAll(".item")[1];
console.log("Category:",activeLinkProducts.firstElementChild.textContent);
console.log("Elements:",activeLinkProducts.lastElementChild.children.length);

const activeLinkTechnologies = document.querySelectorAll(".item")[2];
console.log("Category:",activeLinkTechnologies.firstElementChild.textContent);
console.log("Elements:", activeLinkTechnologies.lastElementChild.children.length);



// categoryList.children.forEach((element) => {
//     console.log(`Category ${element.querySelector("h2").textContent}`);
//     console.log(`Category ${element.querySelectorAll("h2 + ul + li").textContent}`);
    
// });




// activeLink.forEach((element) => {
//     console.log("Category", element.firstElementChild.textContent);
//     console.log("CElements", element.querySelectorAll("li").length);
    
// });

// Напиши скрипт, який:

// 1= Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2= Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5