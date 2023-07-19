"use strict"



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
  

const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
    
    
      const book = this.books.indexOf(oldName);
   
      return this.books.splice(book, 1, newName);
  
  
    },
  };

  bookShelf.updateBook('The last kingdom', 'Dune');
// console.log(bookShelf.books);






