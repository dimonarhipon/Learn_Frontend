const array = ['КБ Хлынов', 'АК БАРС БАНК', 'БАНК ОРЕНБУРГ', 'Точка ФК Открытие', 'Дальневосточный банк', 'Банк Саратов', 'Томскпромстройбанк', 'Кузнецкбизнесбанк', 'КБ Пойдём!', 'Банк Точка', 'ПроБанк']


// Реализация includes для string

const artificialIncludes = (baseStr, searchStr, startIndex = 0) => {
  if (baseStr === null
		|| typeof baseStr === 'boolean'
		|| typeof baseStr === 'undefined'
		|| typeof baseStr === 'object'
		|| typeof baseStr === 'symbol') {
		throw new TypeError('Invalid type');
	}

	if (typeof baseStr === 'number') throw new SyntaxError('Invalid type');

  for (let i = startIndex; i < baseStr.length; i++) {
    if (baseStr[i] === searchStr) return true;
  }
	return false;
}
// console.log(artificialIncludes('Хлынов', 'м'))


// Получение даты в формате с использование padStart YYYY-MM-DD HH:MM:SS

const getFormatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const day = date.getDate().toString().padStart(2, 0);
  const hours = date.getHours().toString().padStart(2, 0);
  const minute = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);
  const result = `${year}-${month}-${day} ${hours}:${minute}:${second}`;
  return result;
}
// console.log(getFormatDate(new Date()));
