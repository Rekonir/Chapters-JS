// alert( "Я JavaScript!" )
'___________________________________________________'
// var name = "Джон";
// var admin = name;
// alert( admin )

// var homePlanetName = 'Земля'
// var userName = 'Джон'
'___________________________________________________'

// var name1 = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name1"}` ); // hello name
// alert( `hello ${name1}` ); // hello Ilya
'___________________________________________________'

// var userName = prompt('Введите ваше имя:', '')
// alert(`Приветсвую, ${userName}`)
'___________________________________________________'

// var A = 1, B = 1;
// alert( ++A ); // 2
// alert( b++ ); // 1
// alert( B ); // 2
// alert( B ); // 2

// var a = 2;
// var x = 1 + (a *= 2); // a=4, x=5

// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3"//2
// "2" * "3" //6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 //"$45"
// "4" - 2 //2
// "4px" - 2 //NaN
// "  -9  " + 5 //"     -9    5"
// "  -9  " - 5 //-14
// null + 1 //1
// undefined + 1 //NaN
// " \t \n" - 2 //-2

// var a1 = prompt("Первое число?", 1);
// var b1 = prompt("Второе число?", 2);
// alert(Number(a1) + Number(b1));
'___________________________________________________'

// 5 > 4// true
// "ананас" > "яблоко"//false
// "2" > "12"// true
// undefined == null// true
// undefined === null// false
// null == "\n0\n"// false
// null === +"\n0\n"// false
'___________________________________________________'

// if ("0") {
//     alert( 'Привет' );
//   } //Да, запускается

//   var start = prompt('Какое "официальное" название JavaScript?', '');
//   if (start == 'ECMAScript') {
//     alert('Верно!');
//   } else {
//     alert('Не знаете? ECMAScript!');
//   }

// var perNum = prompt('Введите число:', 0);
// if (p > 0) {
//   alert( 1 );
// } else if (perNum < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

//result = (a + b < 4) ? 'Мало' : 'Много';

// var message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';
'___________________________________________________'

// alert(null || 2 || undefined) // 2

// alert(alert(1) || 2 || alert(3));// 1, а после 2

// alert(1 && null && 2); //null

// alert(alert(1) && alert(2)) // 1, а после undefined

// alert(null || 2 && 3 || 4); // 3

// if (age >= 14 && age <= 90) { }

// if (!(age >= 14 && age <= 90)) { }

// if (-1 || 0) alert('first'); // true
// if (-1 && 0) alert('second'); //  не выполнит
// if (null || -1 && 1) alert('third'); // 1

// var userName1 = prompt("Кто там?", '');
// if (userName1 == 'Админ') {
//     var password = prompt('Пароль?', '');
//     if (password == 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (password == '' || password === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (userName1 == '' || userName1 == null) {
//     alert('Отменено');
// } else {
//     alert("Я вас не знаю");
// }
'___________________________________________________'

// var i = 3;
// while (i) {
//   alert( i-- );
// } //1, т.к. i уменьшается на 1 после выполнения цикла, то есть его значения 3,2,1 и после станет равным 0 и цикл не запустится в 4ый раз

// var i = 0;
// while (++i < 5) alert( i );//1-4
// var i = 0;
// while (i++ < 5) alert( i );//1-5

// for (var i = 0; i < 5; i++) alert( i );//0-4
// for (var i = 0; i < 5; ++i) alert( i );//0-4

// for (var i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// var i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// var check;
// do {
//     check = prompt("Введите число больше 100:", " ");
// } while (check <= 100 && check);

// var n = 10;
// prime:
// for (var i = 2; i <= n; i++) { 
//   for (var j = 2; j < i; j++) { 
//     if (i % j == 0) continue prime;
//   }
//   alert( i );}
'___________________________________________________'

// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;

//     case 1:
//         alert('Вы ввели число 1');
//         break;

//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }
'___________________________________________________'

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a, b) {
//   return a < b ? a : b;
// }

// function pow(x, n) {
//     var result = x;
//       for (var i = 1; i < n; i++) {
//       result *= x;
//     }
//       return result;
//   }
//     var x = prompt("x?", '');
//   var n = prompt("n?", '');
//     if (n < 1) {
//     alert(`Степень ${n} не может быть использована, введите натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }
'___________________________________________________'

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
//     ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );
'___________________________________________________'

// function pow(x, n) {
//     var result = 1;
//     for (var i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// var x = prompt("x?", "");
// var n = prompt("n?", "");
// if (n <= 0) {
//     alert(`Степень ${n} не поддерживается,
//       введите целую степень, большую 0`);
// } else {
//     alert(pow(x, n));
// } // отредактированная версия кода 

'___________________________________________________'
// var user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// devare user.name;

// function isEmpty(obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }

// const user = {
//     name: "John"
// };
// user.name = "Pete"; //работает

// var salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// var sum = 0;
// for (var key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);

// function multiplyNumeric(obj) {
//     for (var key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

'___________________________________________________'

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }
// var user = makeUser();
// alert(user.ref.name); // Ошибка, так как this определяет момент вызова, а не объявление объекта

// var calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// var ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   };
// ladder
//   .up()
//   .up()
//   .down()
//   .showStep() // 1
//   .down()
//   .showStep(); // 0
'___________________________________________________'
// var obj = {};
// function A() { return obj; }
// function B() { return obj; }
// alert(new A() == new B()); // true

// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }
// var calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt('Сколько нужно добавить?', 0);
//     };
// }
// var accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);
'___________________________________________________'

// var str = "Привет";
// str.test = 5;
// alert(str.test); // ошибку, т.к. Примитивы не являются объектами
'___________________________________________________'
// function readNumber() {
//     var number;
//     do {
//         number = prompt("Введите число", 0);
//     } while (!isFinite(number));
//     if (number === null || number === '') return null;
//     return +number;
// }
// alert(`Число: ${readNumber()}`);

// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

// function randomInteger(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// alert(randomInteger(1, 5));
'___________________________________________________'

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("вася"));

// function checkSpam(str) {
//     var low = str.toLowerCase();
//     return low.includes('viagra') || low.includes('xxx');
// }
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

// function cuter(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength - 1) + '…' : str;
// }

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
'___________________________________________________'
// function sumInput() {
//     var numbers = [];
//     while (true) {
//         var value = prompt("Введите число:", 0);
//         if (value === "" || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }
//     var sum = 0;
//     for (var number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// alert(sumInput());

// function getMaxSubSum(arr) {
//     var maxSum = 0;
//     var parSum = 0;

//     for (var item of arr) {
//         parSum += item;
//         maxSum = Math.max(maxSum, parSum);
//         if (parSum < 0) parSum = 0;
//     }
//     return maxSum;
// }
// alert(getMaxSubSum([-1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));
// alert(getMaxSubSum([1, 2, 3]));
// alert(getMaxSubSum([-1, -2, -3]));
'___________________________________________________'
// function camelize(str) {
//     return str
//         .split('-')
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');
// }

// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }
// var arr = [5, 3, 8, 1];
// var filtered = filterRange(arr, 1, 4);
// alert(filtered);
// alert(arr);

// function filterRangeInPlace(arr, a, b) {
//     for (var i = 0; i < arr.length; i++) {
//         var val = arr[i];
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// var arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// alert(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert(arr);
// function copySorted(arr) {
//     return arr.slice().sort();
// }
// var arr = ["HTML", "JavaScript", "CSS"];
// var sorted = copySorted(arr);
// alert(sorted);
// alert(arr);

// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };
//     this.calculate = function (str) {
//         var split = str.split(' '),
//             a = +split[0],
//             b = split[1],
//             c = +split[2]
//         if (!this.methods[b] || isNaN(a) || isNaN(c)) {
//             return NaN;
//         }
//         return this.methods[b](a, c);
//     }
//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map(item => item.name);
// alert(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [vasya, petya, masha];
// sortByAge(arr);
// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];
// alert(getAverageAge(arr));

// function unique(arr) {
//     let result = [];
//     for (let str of arr) {
//         if (!result.includes(str)) {
//             result.push(str);
//         }
//     }
//     return result;
// }
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
// alert(unique(strings));

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }
'___________________________________________________'
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// function aclean(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split("").sort().join("");
//         obj[sorted] = arr[i];
//     }
//     return Object.values(obj);
// }
// let arr = ["nap", "pan", "ear", "era", "teachers", "cheaters", "hectares"];
// alert(aclean(arr));

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// alert(keys);
'___________________________________________________'
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
// var reader = new WeakSet();
// reader.add(messages[0]);
// reader.add(messages[1]);
// reader.add(messages[0]);
// alert("Сообщение 0: " + reader.has(messages[0])); 
// messages.shift();

// var readerMap = new WeakMap();
// readerMap.set(messages[0], new Date(2017, 1, 1));
'___________________________________________________'
// var salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function sumSalaries(salaries) {
//     var sum = 0;
//     for (var salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
// }
// alert(sumSalaries(salaries));

// function count(obj) {
//     return Object.keys(obj).length;
// }
'___________________________________________________'
// let user = {
//     name: "John",
//     years: 30
// };
// var { name, years: age, isAdmin = false } = user;
// alert(name);
// alert(age);
// alert(isAdmin);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(salaries) {
//     var value = 0;
//     var name = null;
//     for (const [name, salary] of Object.entries(salaries)) {
//         if (value < salary) {
//             value = salary;
//            name = name;
//         }
//     }
//     return name;
// }
'___________________________________________________'
// let date = new Date(2012, 0, 3);
// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[date.getDay()];
// }
// alert(getWeekDay(date));

// function getLocalDay(date) {
//     let day = date.getDay();
//     if (day == 0) {
//         day = 7;
//     }
//     return day;
// }
// alert(getLocalDay(date));

// function getDateAgo(date, days) {
//     var copy = new Date(date);

//     copy.setDate(date.getDate() - days);
//     return copy.getDate();
// }
// alert(getDateAgo(date, 1));
// alert(getDateAgo(date, 2));
// alert(getDateAgo(date, 365));

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
// alert(getLastDayOfMonth(2023, 0));
// alert(getLastDayOfMonth(2023, 1));
// alert(getLastDayOfMonth(2020, 1));

// function getSecondsToday() {
//     var now = new Date();
//     var start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     var dif = now - start;
//     return Math.round(dif / 1000);
// }
// alert(getSecondsToday());

// function getSecondsToTomorrow() {
//     var now = new Date();
//     var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//     var dif = end - now;
//     return Math.round(dif / 1000);
// }

// function formatDate(date) {
//     var day = date.getDate();
//     var month = date.getMonth() + 1;
//     var year = date.getFullYear();
//     var hour = date.getHours();
//     var minutes = date.getMinutes();
//     var dMs = new Date() - date;
//     var dSec = Math.round(dMs / 1000);
//     var dMin = dSec / 60;
//     var dHour = dMin / 60;
//     year = year.toString().slice(-2);
//     month = month < 10 ? '0' + month : month;
//     day = day < 10 ? '0' + day : day;
//     hour = hour < 10 ? '0' + hour : hour;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     if (dSec < 1) {
//         return 'прямо сейчас';
//     } else if (dMin < 1) {
//         return `${dSec} сек. назад`
//     } else if (dHour < 1) {
//         return `${dMin} мин. назад`
//     } else {
//         return `${day}.${month}.${year} ${hour}:${minutes}`
//     }
// }
'___________________________________________________'
// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
// var user1 = JSON.parse(JSON.stringify(user));

// let room = {
//     number: 23
// };
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };
// room.occupiedBy = meetup;
// meetup.self = meetup;
// alert(JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
// }));
'___________________________________________________'
