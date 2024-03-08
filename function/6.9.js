

function debounce(callback, delay) {
	let timer;

	return function (...args) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			callback.apply(this, args);
		}, delay);
	}
}

const foo = debounce(console.log, 300);

foo(2);
foo(4);




function throttle (callback, delay) {
	let isWaiting = false;
	let saveArgs = null;
	let savedThis = null;

	return function wrapper(...args) {
		if (isWaiting) {
			savedArgs = args;
			savedThis = this;
			return;
		}

		callback.apply(this, args);

		isWaiting = true;

		setTimeout(() => {
			isWaiting = false;

			if (savedThis) {
				wrapper.apply(savedThis, saveArgs);
				savedThis = null;
				savedArgs = null;
			}
		}, delay)
	}
}

const fuu = throttle(console.log, 500);
fuu(3);
fuu(5);

