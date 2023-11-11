
/* Задачка 1.
Написать функцию, которой передаем имя, и она возраващает приветствие
в зависимости от времени суток (Доброе утро\день\вечер\ночи userName) */

function greetingTimeOfDay(yourUserName) {
  const name = yourUserName;
  const hours = new Date().getHours();

  if (hours >= 0 && hours <= 3) {
    return `Доброй ночи ${name}`;
  } else
  if (hours >= 4 && hours <= 11) {
    return `Доброе утро ${name}`;
  } else
  if (hours >= 12 && hours <= 16) {
    return `Добрый день ${name}`;
  } else if (hours >= 17 && hours <= 23) {
    return `Добрый вечер ${name}`;
  }
  return null;
}

greetingTimeOfDay('Дмитрий');

console.log(greetingTimeOfDay('Дмитрий')); // 'Добрый вечер, ____'


/* Задачка 2.
Напишите функцию generatePassword которая возвращает строку
состоящую из двух случайных чисел, двух случайных заглавных букв, двух случайных строчных букв
и двух случайных символов из вот этого набора - !@#$% */

function generatePassword() {
  const numbers = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "!@#$%";

  const getRandomNumber = (max, min = 0) => {
    return Number(Math.floor(Math.random() * (max - min) + min));
  };

  const number1 = numbers[getRandomNumber(numbers.length - 1)];
  const number2 = numbers[getRandomNumber(numbers.length - 1)];
  const char1 = upperChars[getRandomNumber(upperChars.length - 1)];
  const char2 = upperChars[getRandomNumber(upperChars.length - 1)];

  const lowerChar1 = lowerChars[getRandomNumber(lowerChars.length - 1)];
  const lowerChar2 = lowerChars[getRandomNumber(lowerChars.length - 1)];
  const symbol1 = symbols[getRandomNumber(symbols.length - 1)];
  const symbol2 = symbols[getRandomNumber(symbols.length - 1)];

  const array = [number1, number2, char1, char2, lowerChar1, lowerChar2, symbol1, symbol2];

  const passwd =  array.sort(() => Math.random() - Math.random()).join('');
  return passwd;
}

// Задачка 3.  Дан массив целых чисел. Нужно по нему пройтись, перемножая все элементы кроме текущего

const multiplyNumsExceptSelf = (nums) => {
  if (!nums.filter(item => typeof item !== 'number')) return null;

  const array = nums.map((item, index) => {
    let newArray = nums.splite(index, 1);
    newArray.map((elem) => elem * item);
	});

  return array;
}

console.log(multiplyNumsExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
