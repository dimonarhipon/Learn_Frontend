// Хвостовая рекурсия - это рекурсивный вызов функции,
// при котором результат предыдущего рекурсивного вызова не используется в текущем вызове.

function factorial(number, acc = 1) {
  if (number === 0) return acc;

  return factorial(number - 1, number * acc);
}

console.log( factorial(5) )



function factorial_2(n) {
  if (n === 0) return 1;

  return n * factorial_2(n - 1);
}

console( factorial_2(5) );
