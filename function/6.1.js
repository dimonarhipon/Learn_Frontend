

// Проверка глубины стека
const getMaxCallStackSize = (i) => {
	try {
		return getMaxCallStackSize(++i)
	} catch (e) {
		return i;
	}
}

function f(x) {
	return g(x);
}
function g(x) {
	return f(x);
}

// возведение в степень
const pow = (base, power) => {
	if (power === 0) return base;
	return pow(base, power - 1) * base;
}



const fibonacii = (n) => {
	if (n <= 2) return 1;

	return fibonacii(n - 1) + fibonacii(n - 2);
}

// типо reduce
const reduce = (fn, acc, [curr, ...args]) => {
	curr === undefined ? acc : reduce(fn, fn(acc, curr), args)
}



// Хвостовая рекурсия - это рекурсивный вызов функции,
// при котором результат предыдущего рекурсивного вызова не используется в текущем вызове.

// хвостовая
function factorial(number, acc = 1) {
  if (number === 0) return acc;

  return factorial(number - 1, number * acc);
}

console.log( factorial(5) )


// обычная O(n!)
function factorial_2(n) {
  if (n === 0) return 1;

  return n * factorial_2(n - 1);
}


// console( factorial_2(5) );

// tail recursion
// вызов рекурсивной функции является последней операцией, выполняемой в этой функции. Иными словами, после выполнения рекурсивного вызова функция больше ничего не делает.
const add = (n, acc = 0) => {
	if (n === 0) return acc;
	return add(n - 1, acc + n);
}

// после рекурсивного вызова add(n - 1, acc + n) функция больше ничего не делает
