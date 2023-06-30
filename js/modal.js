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


