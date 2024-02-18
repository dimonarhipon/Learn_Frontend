// Напишите функцию makeTimer(), которая создает объект таймер со следующими методами:

// timer() - возвращает текущее значение таймера в секундах. Изначально 0.
// timer.set(value) - устанавливает значение таймера.
// timer.increase(value) - увеличивает значение таймера на указанное количество секунд.
// timer.decrease(value) - уменьшает значение таймера на указанное количество секунд.


function makeTimer() {
	function timer() {
		return timer.time;
	}

	timer.time = 0;

	timer.set = (value) => {
		return timer.time = value;
	}

	timer.increase = (value) => {
		return timer.time = timer.time + value;
	}
	timer.decrease = (value) => {
		return timer.time = timer.time - value;
	}

	return timer;
}

let timer = makeTimer();

alert(timer()); // 0

timer.set(5);
alert(timer()); // 5

timer.increase(5);
alert(timer()); // 10

timer.decrease(3);
alert(timer()); // 7
