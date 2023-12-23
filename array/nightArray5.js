
// 1) Привет, object

const user = {
	name: 'John',
	surname: 'Smith',
};

user.name = 'Pete';
delete user.name;


// 2) Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};

function isEmpty (obj) {
	for (let key in obj) {
		if (key) return false;
	}
	return true;
}

schedule["8:30"] = "get up";






// 3. Сумма свойств объекта
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const getSum = (obj) => {
	let sum = 0;
	for (let key in obj) {
		sum += obj[key]
	}
	return sum;
}



// 4. Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.





// Map и Set

// фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.



// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.





// Перебираемые ключи
// важность: 5
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
