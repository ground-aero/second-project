// ХХХХХХХХХХХХХХХХХХХХХХХХХ - ПЕРЕМЕННЫЕ - их добавление - ХХХХХХХХХХХХХХХХХХХХХХХХХХ
// чччччччччччччччччччччч - const - добавление переменной

// const sisters = ['Vera', 'Nadezhda'];
// sisters[2] = ['lyubov'];
//   console.log(sisters);

// ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ
// ччччччччччччччччччччччччч - innerHTML - ччччччччччччччччччч
//
// (!) С innerHTML вставка происходит «как HTML», со всеми HTML-тегами.
//

// console.log(document.body.innerHTML);
// let page = document.querySelector('.page');
// let h1 = page.querySelector('.header__title');
// h1.innerHTML += '<h3>New Body 77</h3>';
//    console.log(h1);
// 

// чччччччччччччччччччччччч - textContent: просто текст
//
/* textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.
 С textContent вставка получается «как текст», все символы трактуются буквально. */
//

// «hidden» (свойство)
//
// <div id="elem">С назначенным JavaScript свойством "hidden"</div>
//  elem.hidden = true;

//

// *
// *
// *
// *
// *

// XXXXXXXXXXXXX  - Найти (методы) - ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ

// xxxxxxxxxxxxxxxxxxxxхххх - indexOf (метод) - найти символ в строке и вернуть его индекс:

// const blok = 'Ночь, улица, фонарь, аптека';
// blok.indexOf('фонарь'); // 13
// 

// чччччччччччччччччччччччч - includes (метод) - найти набор символов  - чччччччч
// 'Гарри Поттер и узник Азкабана'.includes('Гарри Поттер'); // true
// 

// чччччччччччччччччччччччч - startsWith, endsWith

// let header = document.querySelector('.header')
//   console.log(header.textContent);

// let y = 'Яндекс.Практикум';
//  console.log('Родина'.startsWith('Род'));

// const theRealEnd = 'Это ещё не конец';
// console.log(theRealEnd.endsWith('конец'));
// 

// xxxxxxxxxxxxxxxxxxxxxxx - .length - найти последний символ

// let str = `Hello world`;
// console.log(str[str.length - 1]);
// 

// *
// *
// *
// *
// *

// ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ

// ччччччччччччччччччччччч - пример if / else if

// let age = 21

// if (age < 3) {
//   message = 'Здравствуй, малыш!';
// } else if (age < 18) {
//   message = 'Привет!';
// } else if (age < 100) {
//   message = 'Здравствуйте!';
// } else {
//   message = 'Какой необычный возраст!';
// }
//    console.log(message);

// *
// *
// *
// *
// *

// ХХХХХХХХХХХХХХХХХХХХ - МЕДОТЫ ПРЕОБРАЗОВАНИЯ СТРОК - ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ

// чччччччччччччччччч  toLowerCase - приведение текста к регистру

// const firstStr = 'Такая проверка не пройдёт';
// const secondStr = 'таКая пРовеРка не пройдёт';

//   console.log(firstStr === secondStr); // false
//   console.log(firstStr.toLowerCase() === secondStr.toLowerCase());
// 

// xxxxxxxxxxxxxxxxxxxxx - split (метод) - Превращение строки в массив.
// показывает, где заканчивается один элемент массива и начинается следующий.

// 'Пришёл. Увидел. Победил.'.split(' '); // ["Пришёл.", "Увидел.", "Победил."]
// 'Пришёл. Увидел. Победил.'.split('. '); // ["Пришёл", "Увидел", "Победил."]
// 

// чччччччччччччччччччччччч - slice (метод) - Извлечение части строки. возвращает часть строки.
// На вход он принимает два аргумента — с какого индекса начинать отсчёт и на каком закончить:

// 'Не прислоняться'.slice(6, 10); // "слон"

// 'Яндекс.Практикум'.slice(7); // "Практикум"
// 'Яндекс.Телефон'.slice(7); // "Телефон"

// xxxxxxxxxxxxxxxxx - ПРИМЕР. - Имя с заглавной буквы, — независимо от того, как его ввёл пользователь.
// ххх - методы toUpperCase и slice.

// const myName = prompt('Как Вас зовут?', '');
//  (вар 1) - console.log('Здравствуйте, ' + myName.slice(0, 1).toUpperCase() + myName.slice(1));
// (вар.2) - console.log('Здравствуйте, ' + `${myName.slice(0, 1).toUpperCase() + //myName.slice(1)}`);
// 

// *
// *
// *
// *
// *

// ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ - ЯВНОЕ ПРЕОБРАЗОВАНИЕ ТИПОВ : 
//
// 1. Приведение к строке - String (Глобальный объект) превращает переданный ему аргумент в строку:
//
// const numberToString = String(2); // "2"
// const nanToString = String(NaN); // "NaN"
// const undefinedToString = String(undefined); // "undefined"
// const nullToString = String(null); // "null"
// const booleanToString = String(true); // "true" 
//

// 2. Приведение к числу - Number (Глобальный объект )
//
// const stringToNumber = Number('2'); // 2
// const nullToNumber = Number(null); // 0 
// const anotherStringToNumber = Number('счастье не за горами'); // NaN
// const undefinedToNumber = Number(undefined); // NaN 
//

// 3. Приведение к булевым значениям - Boolean - преобразует переданный ему аргумент к «булю»:
// Boolean(2) // true
// Boolean(0) // false
// Boolean('') // false
// Boolean('Непустая строка'); // true 
//

//  В JavaScript значения условно делятся на truthy (англ. «правдивые») и falsy (англ. «ложные»). 
// Правдивые значения при приведении типа становятся Истиной, а ложные — Ложью. 
// Boolean('Непустая строка'); // true
// Boolean(''); // false
// Boolean(1); // true
// Boolean(0); // false
// Boolean(NaN); // false
// Boolean(null); //false
// Boolean(undefined); // false
// Boolean({}); // true
// Boolean([]); //true 

// *
// *

// ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ - НЕЯВНОЕ ПРЕОБРАЗОВАНИЕ ТИПОВ (ДЛЯ ПРИМИТИВНЫХ ЗНАЧЕНИЙ) : 
// 3 вида : 
//
// 1. приведение к строке,
// 2. приведение к числу,
// 3. приведение к логическому типу.
//
//

// 1. Приведение к строке
// 1 + ''; // "1" 

// (!) «Унарный плюс» приводит нечисловые значения после «+» к численному типу.
// console.log(67 + +'33'); // 100
// 

// 2. Приведение к числу
// null >= 1; // false
// '451' < 452; // true 
//

// 3. Приведение к булевым значениям. 
//  (!) В круглых скобках условия if любые данные всегда приводятся к логическому типу:
//
// const usernameElement = document.querySelector('.username');

// if (usernameElement) {
//   console.log('Привет, ' + usernameElement.textContent); //Если элемента с классом username на странице нет, в переменную usernameElement запишется null. И тело условия if выполнено не будет.
// } 
//
//

// При сложении числа со строкой движок превратит число в строку и только потом выполнит конкатенацию.
// console.log(100 + '500'); // "100500" 

// п р и м е р - 
// const a = 30; // Количество отжиманий в первом подходе
// const b = 10; // Количество отжиманий во втором подходе
//   console.log('За сегодня вы отжались: ' + a + b + ' раз');  // "За сегодня вы отжались 3010 раз"


// *
// *
// *
// *
// *

// XXXXXXXXXXXXXXXXXXXХХХХХХХХХХХXXX - МЕТОДЫ ДЛЯ РАБОТЫ С ЧИСЛАМИ - Math (объект)

// Math (объект) - и его методы
// - 

// округляет переданное число «вниз»
// Math.floor(9.99); // 9
// - 

// округляет «вверх»
// Math.ceil(9.01); // 10
// - 

// округляет до ближайшего целого
// Math.round(9.51); // 10
// - 

// возвращает наибольшее из переданных чисел
// Math.max(1, 2, 3, 4, 5); // 5

// возвращает наименьшее из переданных чисел
// Math.min(1, 2, 3, 4, 5); // 1
// - 

// возвращает случайное число от 0 включительно до 1 не включительно
// Math.random(); // 0.31764219954126016
// - 

// ччччччччччччч - parseInt (функция) - работа с дробной частью. / Сколько полных лет

// let age = '37 лет, 8 месяцев и 10 дней';
//    console.log(parseInt(age)); // 37 - целое число

// П р и м е р  сложения чисел взятых из строк - - - : 
// const bogatyrs = '33 богатыря';
// const knights = '24 рыцаря Круглого стола';
// const spartans = '300 спартанцев';
// const totalHeroes = bogatyrs + knights;
//    console.log(parseInt(totalHeroes, 10) + parseInt(knights, 10) + parseInt(spartans, 10)); / * сложение в десятичной системе */
// - 

// ччччччччччччч- parseFloat (функция) - аналогично parseInt, но выделяет число с плавающей точкой (а не целое)

// parseFloat('36.6'); // 36.6
// parseFloat('36.6 нормальная температура человека '); // 36.6
// - 

// ччччччччччччч - Number.isInteger (метод) - Проверка на принадлежность к целым числам. принимает число как аргумент и проверяет, целое оно или дробное:

// const eightAndAHalf = 8.5;
// Number.isInteger(eightAndAHalf); // false
// Number.isInteger(Math.floor(eightAndAHalf)); // true 



// *
// *
// *
// *
// *