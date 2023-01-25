let lightSwitchOn = true;
let windoIsOpen = false;

let example1 = 5 > 10;
let example2 = 5 < 10;
let example3 = 5 >= 10;
let example4 = 5 <= 10;
let example5 = 5 !== 10;

// if (lightSwitchOn) {
//  console.log("Swith is on")
// }
// else {
// console.log("Swith is on")
// }

if (5 !== 5) {
  // сообщение выводится если условие правда и не выводится если ложь
  console.log("Swith is on");
}

let a = 15;
let b = 5;
if (a === b) {
  console.log("A equals B");
} else {
  console.log("A is not equals to B");
}

// 25 студепринтов (students) пришли на курс програмирования. Поместятся ли они в комнату с 20 местами (capacity).
let students = 20;
let capacity = 25;
if (students <= capacity) {
  console.log("Студенты поместятся");
} else {
  console.log("Студенты не поместятся");
}

console.log("СТОЛИЦА КР");
let answer = "БИШКЕК";
if (answer === "БИШКЕК") {
  console.log("ПРАВИЛЬНО");
} else {
  console.log("НЕ ПРАВИЛЬНО");
}

let login = "ElonMask";
let password = "I'M the best";
if (login === "ElonMask" && password === "I'M the best") {
  console.log("correct");
} else {
  console.log("incorrect");
}

// и обозначается &&, или обозначается ||

// в автобусе 20 (places) пассажирских мест, поместится ли группа из 23 (tourist) туристов в автобус?
let places = 20;
let tourist = 23;
if (places >= tourist) {
  console.log("туристы поместятся");
} else {
  console.log("турсты не поместятся");
}
