'use strict';

// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();

// Task 1________________

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 11;

// if (a === 10) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

// Task 2_____________
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 1;
// let result = '';
// switch (num) {
//   case 1:
//     result = 'зима';
//     break;
//   case 2:
//     result = 'весна';
//     break;
//   case 3:
//     result = 'літо';
//     break;
//   case 4:
//     result = 'осінь';
//     break;
//   default:
//     result = 'введіть значення від 1-4';
// }

// Task 3__________________________
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "Не знаєте? ECMAScript!",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const questionUser = prompt('Яка офіційна назва JavaScript?');
// console.log(questionUser);

// if (questionUser === "ECMAScript") {
//   alert ('Вірно!');
// } else {
//   alert ('Не знаєте? ECMAScript!');
// }

// Task 4________________________________

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const userLogin = prompt(Wedu login:);
// console.log(userLogin);

// Task 5___________________
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// Task 6______________________________

// Напишіть if..else, що відповідає наступному switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = 'Edge';

// if (browser === 'Edge') {
//   alert("You've got the Edge!")

// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert('Okay we support these browsers too')
// } else{
//   alert( 'We hope that this page looks ok!' )
// }

// Task 7________________________________

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 20;
// const min = 1;
// let sum = 0;

// for (let i = max; i >= min; i-=1){
//   if (i % 2 === 0){
//     sum += i;
//   }
//   console.log(sum)
//   console.log(i)
// }

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line

//   for(const key in apartment){
//     console.log(keys.push(key))
//     console.log(values.push(apartment[key]))
//   }

// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(countProps);
//     for (const key of keys){
//         if(keys.hasOwnProperty(key)){
//         propCount += 1;
//         }

//     }

//     return propCount;
// }
// countProps()
// console.log(countProps({name: "Mango", age: 2}))

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line

//       for (const value of Object.values(salaries)){

//           totalSalary += value;

//       }
//     // Change code above this line
//     return totalSalary;
//   }
// countTotalSalary();
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) );

// const book = {
//     kiwi: 200,
//     poly: 50,
//     ajax: 150
//   };
//   const keys = Object.keys(book);
//   console.log(keys);

//   const values = Object.values(book);
//   console.log(values);

// *****14.07-------------------------------
// Task-1---------------------------------------------
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

// function min(a,b){
//     // if(a < b){
//     //     return a;
//     // }else{
//     //     return b;
//     // }
//     return (a < b) ? a : b
// }

// min()
// console.log(min(35,20))

// Task-2-------------------------------------------------------
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

// const arr = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

// function logItems(array){
//    for (let i = 0; i < array.length; i += 1){
//         console.log(`${i +1} - ${array[i]}`)
//    }
// }

// logItems(arr)

// Task-3-----------------------------------------------------------
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const number = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers){
//     let smallerNumber = numbers[0];
//     for(let num of numbers){
//         if(smallerNumber > num){
//             smallerNumber = num;
//         }

//     }
//     return smallerNumber;
// }
// findSmallerNumber(number);
// console.log(findSmallerNumber(number));

// Task-4---------------------------------------------------
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// function getAllPropValues(propName) {
//     const arr = [];

//     for (let product of products){
//             if(product.hasOwnProperty(propName)){
//             arr.push(product[propName]);
//         }
//     }
//     return arr;

// }

// getAllPropValues();
// console.log(getAllPropValues(name));

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {

//       const book = this.books.indexOf(oldName);

//       return this.books.splice(book, 1, newName);

//     },
//   };

//   bookShelf.updateBook('The last kingdom', 'Dune');
// console.log(bookShelf.books);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function(number){
//     if (number > value){
//     filteredNumbers.push(number);
//     }

// });
//  return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 2));

// function changeEven (numbers, value) {

//   const newEven = [];

//   numbers.forEach(number => {
//     newEven.push(number + value);
//   });

// };

// changeEven([1, 2, 3, 4, 5], 10);

// function pureMultiply (array, value) {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(doubledNumbers)
// console.log(pureMultiply())

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getSortedFriends = users => {
//   return [...users].flatMap((user) => user.friends).filter((friend,index,arr)=>
//     arr.indexOf(friend)===index).sort((a,b)=>
//     a.friends.localeCompare(b.friends));
// };

// getSortedFriends();

//* -------28.07------------
// *--------Task-1------------
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//   const userName = prompt("Введіть ваше ім'я")
//   if(!userName){
//     alert("Введіть ім'я")
//   }
//   return;
//   console.log(userName);
//   callback(userName);
// };

// const greet = name => {console.log(`Привіт ${name}`)};

// letMeSeeYourName(greet);

// --------Task-2------------

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//     id: Math.random()
//   }

//   callback(product);
// };

// const showProduct = (product) => {
//   console.log(product);
// };

// makeProduct('Iphone', 15500, showProduct);
// makeProduct('HP', 500, showProduct);

// ---------Task-3--------------------

//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
// };

// ----------------------Task-4----------------

// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
// {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];
// const getAvailableModels = cars =>
// cars.reduce((models, car) => [...models, car.model], []);

//   cars.reduce((models, car) => {
//     models.push(car.model);
//     return models;
//   }, []);

// console.log(getAvailableModels(vehicles));

// -------Task-5-----------------------

// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
// {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const getAvailableModels = (cars, amountThreshold) => cars.filter(car => car.amount >= amountThreshold).map(car => car.model);
// console.log(getAvailableModels(vehicles, 10))

// ------------------11.08---------------------------
// ------------------Task-1------------------------

// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
// const refs = {
//   textInput: document.querySelector('.text-input'),
//   showMeButton: document.querySelector('.show-me-button'),
//   output: document.querySelector('.output')
// }

// refs.showMeButton.addEventListener('click', onShowMeButtonClick);

// function onShowMeButtonClick (){
//   refs.output.textContent = refs.textInput.value;
// }

// -----------------Task-2-------------------
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const refs = {
//   swapButton: document.querySelector('#swapButton'),
//   leftSwapInput: document.querySelector('#leftSwapInput'),
//   rightSwapInput: document.querySelector('#rightSwapInput'),
// };

// refs.swapButton.addEventListener('click', onSwapButtonClick);

// function onSwapButtonClick() {
//   const leftSwapInput = refs.leftSwapInput.value;
//   const rightSwapInput = refs.rightSwapInput.value;

//   refs.leftSwapInput.value = rightSwapInput;
//   refs.rightSwapInput.value = leftSwapInput;
// }

//----------------------Task-3----------------------
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// const refs = {
//   swapButton: document.querySelector('#swapButton'),
//   taskTitle: document.querySelector('.taskTitle'),
// };

// refs.swapButton.addEventListener('click', onSwapButtonClick);

// function onSwapButtonClick() {
//   if(){ refs.taskTitle.style.display = 'block';
//     refs.swapButton.textContent = 'Розкрити';
//   }
// }



// ------------------Task-4-------------
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" -
// більше на 10 пікселів.


const parent = document.querySelector("#parent");

parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});