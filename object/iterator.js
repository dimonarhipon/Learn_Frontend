const person = {
  name: 'Dima',
  age: 27,
  gender: 'male',
  interests: ['music', 'html'],
}

person[Symbol.iterator] = function () {
  const prop = Object.keys(this);
  let count = 0;

  return {
    next() {
      if (count < prop.length) {
        const key = prop[count];
				count++;

        return { done: false, value: person[key] };

      } else {
        return { done: true };
      }
    },
  }
}
