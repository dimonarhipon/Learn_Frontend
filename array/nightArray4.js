// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти (начать с нее)
function sumBecomeTen(arr) {
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    result = result + arr[i];

    if (result > 10) {
      return i + 1;
    }
  }

  return result;
}

console.log(sumBecomeTen([1, 2, 8, 0, 4, 5, 6])); // 3

// if (acc + item > 10) {
//   return arr.indexOf(item);
// }

// На фронт приходят кривые данные. Каждый вложенный массив представляет первым элементом продукт, остальными список пользователей, которые имеют данный проукт в корзине.
// Задача - пересортировать эти данные так, чтобы для каждого пользователя был список продуктов, которые у него в корзине (см. вывод ниже)
const remapData = (data) => { };

console.log(
  remapData([
    ['Помидоры', 'Аня', 'Женя'],
    ['Огурцы', 'Женя', 'Аня'],
    ['Рис', 'Аня', 'Евгений', 'Саша'],
    ['Лосось', 'Евгений']
  ])
);

// {
//   'Аня': [ 'Помидоры', 'Огурцы', 'Рис' ],
//   'Женя': [ 'Помидоры', 'Огурцы' ],
//   'Саша': [ 'Помидоры', 'Рис' ],
//   'Евгений': [ 'Рис', 'Лосось' ]
// }
