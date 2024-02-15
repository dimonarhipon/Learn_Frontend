// Задача: Генерация HTML-кода. Напишите функцию, которая принимает на вход заголовок и текст, а затем создает HTML-разметку с использованием new Function.

const generageHTML = new Function('title', 'text', 'return `<h1>${title}</h1><p>${text}</p>`;');

// console.log(generageHTML('Стих', 'Ночь. Улица. Фонарь. Аптека'))



// Написать программу, которая позволяет пользователю ввести математическое выражение, после чего создает и выполняет функцию с использованием new Function для вычисления результата.

const expression = prompt("Введите математическое выражение:");

const calculate = new Function('return' + expression);

try {
  const result = calculate();
  console.log('Результат: ' + result);
} catch (error) {
  console.log('Ошибка: ' + error.message);
}


// Написать программу, которая позволяет пользователю ввести массив чисел, после чего создает и выполняет функцию с использованием new Function для сортировки массива.

const prompt = prompt("Введите элементы массива через запятую:");
const numbers = inputArray.split(',').map(Number);

const getSortNumbers = new Function('arr', 'return arr.sort((a, b) => a - b)');
const sortedNumbers = getSort(numbers.slice());

console.log('Отсортированный массив:', sortedNumbers);
