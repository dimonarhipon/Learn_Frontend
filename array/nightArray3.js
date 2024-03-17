/// Задача 1. Создайте собственную реализацию функции reduce().
// Тесты
const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 15

const concatenatedString = ['I', ' ', 'love', ' ', 'JS'].myReduce(
  (acc, curr) => acc + curr,
  ''
);
console.log(concatenatedString); // 'I love JS'

// const myReduce = (acc = array[0], item, index, array) => {
//   let acc;
//   console.log(acc, item, index, array);
//   return acc + item;
// };

// Задача 2. Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов. Используйте примитивные типы данных.
// Описание задачи: Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.

const intersection = (...arrays) => {
  const flatArray = arrays.flat();
  // const newArray = flatArray.filter((item) => item === item);


	const filterArray = flatArray.filter((item, index) => {
		flatArray.forEach((elem) => item === elemn)
	});


  // for (let i = 0; i < flatArray.length - 1; i++) {
  //   for (let j = 0; j < flatArray.length - 1; j++) {
  //     if (flatArray[i] === flatArray[j]) {
  //       result.push[i];
  //     }
  //   }
  // }

  console.log(filterArray);

  return filterArray;
}

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
