// 1. Напишите функцию findMax(), которая принимает на вход произвольное количество аргументов и возвращает наибольшее из них используя оператор расширения.

function findMaxNumber(arguments) {
  return Math.max(...args);
}
// console.log(findMaxNumber(23, 235, 643, 167, 658));


// 2. Создайте функцию mergeArrays(), которая принимает несколько массивов разной длины в качестве аргументов с помощью-параметра. Функция должна объединить эти массивы в один с помощью оператора расширения.
function mergeArrays(...args) {
	return [].concat(...args);
}
console.log(mergeArrays([1, 532, 52,5], [325, 634, 12, 634, 574]))



// 3. Реализуйте функцию find(), которая принимает произвольное количество аргументов-массивов с числами. Функция должна вернуть уникальные значения из всех переданных массивов, используя опер расширения и Set.




// 4. Напишите функцию sumAllExceptFirst(), которая принимает произвольное количество аргументов. Функция должна вернуть сумм всех аргументов, кроме первого используя rest-араметр.
function sumAllExceptFirst(...args) {
  const first = arguments[0];
  return Array.from(args).reduce((acc, item) => acc + item) - first;
}
// console.log(sumAllExceptFirst(12, 235, 2365, 36));



// 5 Создайте функцию joinNames(), которая принимает имя и фамилию в кестве первых двух аргументов, а затем произвольное количество строк в кестве дополнительных аргументов. Функция должна объединить все строки в массиве, используя оператор расширения, а затем вывести имя и фамилию, аже количество строк в массиве.

function joinNames(firstName, lastName, ...args) {
  return `${firstName} ${lastName} ${[...args]}
  Передано строк: ${arguments.length}`;
}
// console.log(joinNames('Вася', 'Петров', "Пёрт", "Васечкин"))




// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]
// Output: 2
// Input: nums = [0,1]
// Output: 2
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8

function missingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
};
