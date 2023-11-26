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

	for (let i = startIndex; i <= baseStr.length - searchStr.length; i++) {
    let found = true;

    for (let j = 0; j < searchStr.length; j++) {
      if (baseStr[i + j] !== searchStr[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return true;
    }
  }

	return false;
}
// console.log(artificialIncludes('Хлынов', 'м'))


// Получение даты в формате с использование padStart YYYY-MM-DD HH:MM:SS

const padNumber = (num) => {
  return num.toString().padStart(2, '0');
}

const getFormatDate = (date) => {
  const year = date.getFullYear();
  const month = padNumber(date.getMonth() + 1);
  const day = padNumber(date.getDate());
  const hours = padNumber(date.getHours());
  const minute = padNumber(date.getMinutes());
  const second = padNumber(date.getSeconds());
  const result = `${year}-${month}-${day} ${hours}:${minute}:${second}`;
  return result;
}
// console.log(getFormatDate(new Date()));
