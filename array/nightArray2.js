const array = ['КБ Хлынов', 'АК БАРС БАНК', 'БАНК ОРЕНБУРГ', 'Точка ФК Открытие', 'Дальневосточный банк', 'Банк Саратов', 'Томскпромстройбанк', 'Кузнецкбизнесбанк', 'КБ Пойдём!', 'Банк Точка', 'ПроБанк']


// #1 Array Mash
// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

function arrayMash (array1, array2) {
  return array1.flatMap((item, index) => [item, array2[index]]);
}


// #2 Sort array by string length
//  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
	return array.sort((a, b) => a.length - b.length);
}

// #3 Flatten and sort an array

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}


// #4 JavaScript Array Filter
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  return numbersArray.filter((item) => item % 2 === 0)
}


// #5 Remove Empty Items of Array

// In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)

// The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

// [1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]

// Example:

// Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];

// After: [1, 2, 3, 4, null, undefined];

function clean(arr) {
  return arr.filter(() => true)
}


// #6
function mergeArraysAndRemoveDuplicates(arr1, arr2) {
  const merged = arr1.concat(arr2);
  return merged.filter((value, index, self) => self.indexOf(value) === index);
}

// #7 Even numbers in an array

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  return array.filter(num => num % 2 === 0).slice(-number);
}

// #8 Переведите текст вида border-left-width в borderLeftWidth

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function myShortString(string) {
// 	const array = string.split();
//   const index = array.findIndex(substring => substring !== '');

// 	if (index !== -1) {
// 		array[index] = array[index][0].toUpperCase() + array[index].slice(1);

// 		array.splice(index - 1, 2);

// 		index = array.findIndex(substring => substring !== '');
// 	}

// 	return array.join('');
// }


// #9 Сортировать в порядке по убыванию

const arr9 = [5, 2, 1, -10, 8];

const sortMin = (array) => array.sort((a, b) => b - a);

// console.log(arr9); // 8, 5, 2, 1, -10
