(function () {
	// 0. Реализовать метод includes как функцию
	function includes (source, string) {
		return (~source.indexOf(string)) ? true : false;
	}

	// console.log(includes('маленькой ёлочке холодно зимой', 'т'));



	// 1. Есть ли разница между else { return } и return после if?

	// const age = prompt('Сколько вам лет?')
	function checkAge(age) {
		if (age > 18) {
			return alert('Welcome!');
		} else {
			return confirm('Родители разрешили?');
		}

		// return confirm('Родители разрешили?');
	}
	// checkAgeIfElse(age);






	// 2. Переписать функцию checkAge через ? : и ||

	function checkAgeTernary (age) {
		return age > 18 ? alert('Welcome!') : confirm('Родители разрешили?');
	}
	// checkAgeTernary(age)

	function checkAgeDoubleVertical(age) {
		return (age > 18) || confirm('Родители разрешили?') || alert('Welcome!')
	}
	// checkAgeDoubleVertical(age)




	// 3. Поиск меньшего из 2 чисел
	function min (number1, number2) {
		if (number1 === number2) return 'значения равны'
		return number1 > number2 ? number2 : number1;
	}
	// console.log(min(5, 4));





	// 4. Фунция возведения в степень
	function pow (number, power) {
		return alert(number ** power);
	}
	// const number = prompt('Введите число, которое нужно возвести в степень')
	// const power = prompt('Введите степень')
	// console.log(pow(number, power))
})()
