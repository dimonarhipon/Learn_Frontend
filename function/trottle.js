

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

const foo = throttle(console.log, 500);
foo(3);
foo(5);
