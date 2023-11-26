
/* Задачка 1.
Написать функцию, которой передаем имя, и она возраващает приветствие
в зависимости от времени суток (Доброе утро\день\вечер\ночи userName) */

function greetingTimeOfDay(yourUserName) {
  const name = yourUserName;
  const hours = new Date().getHours();

  if (hours >= 0 && hours <= 3) {
    return `Доброй ночи ${name}`;
  } else
  if (hours >= 4 && hours <= 11) {
    return `Доброе утро ${name}`;
  } else
  if (hours >= 12 && hours <= 16) {
    return `Добрый день ${name}`;
  } else if (hours >= 17 && hours <= 23) {
    return `Добрый вечер ${name}`;
  }
  return null;
}

greetingTimeOfDay('Дмитрий');

// console.log(greetingTimeOfDay('Дмитрий')); // 'Добрый вечер, ____'


/* Задачка 2.
Напишите функцию generatePassword которая возвращает строку
состоящую из двух случайных чисел, двух случайных заглавных букв, двух случайных строчных букв
и двух случайных символов из вот этого набора - !@#$% */

function generatePassword() {
  const numbers = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "!@#$%";

  const getRandomNumber = (max, min = 0) => {
    return Number(Math.floor(Math.random() * (max - min) + min));
  };

  const number1 = numbers[getRandomNumber(numbers.length - 1)];
  const number2 = numbers[getRandomNumber(numbers.length - 1)];
  const char1 = upperChars[getRandomNumber(upperChars.length - 1)];
  const char2 = upperChars[getRandomNumber(upperChars.length - 1)];

  const lowerChar1 = lowerChars[getRandomNumber(lowerChars.length - 1)];
  const lowerChar2 = lowerChars[getRandomNumber(lowerChars.length - 1)];
  const symbol1 = symbols[getRandomNumber(symbols.length - 1)];
  const symbol2 = symbols[getRandomNumber(symbols.length - 1)];

  const array = [number1, number2, char1, char2, lowerChar1, lowerChar2, symbol1, symbol2];

  const passwd =  array.sort(() => Math.random() - Math.random()).join('');
  return passwd;
}

// Задачка 3.  Дан массив целых чисел. Нужно по нему пройтись, перемножая все элементы кроме текущего

const multiplyNumsExceptSelf = (nums) => {
  if (!nums.filter(item => typeof item !== 'number')) return null;

  const array = nums.map((item, index) => {
    let newArray = nums.splite(index, 1);
    newArray.map((elem) => elem * item);
	});

  return array;
}

// console.log(multiplyNumsExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

const bankNames = [
  'Сбербанк',
  'Тинькофф Банк',
  'Банк ВТБ',
  'АЛЬФА-БАНК',
  'Райффайзенбанк',
  'Банк ОТКРЫТИЕ',
  'Газпромбанк',
  'Промсвязьбанк',
  'Совкомбанк',
  'РОСБАНК',
  'Россельхозбанк',
  'МОСКОВСКИЙ КРЕДИТНЫЙ БАНК',
  'ЮниКредит Банк',
  'Банк Синара',
  'Газэнергобанк',
  'АКБ АВАНГАРД',
  'ПНКО ЭЛПЛАТ',
  'РНКБ Банк',
  'Экспобанк',
  'Банк ВБРР',
  'АБ РОССИЯ',
  'ДБО Фактура',
  'КБ Хлынов',
  'Бланк банк',
  'КБ Солидарность',
  'Банк ДОМ.РФ',
  'Хакасский муниципальный банк',
  'МТС-Банк',
  'Банк ПСКБ',
  'Банк Левобережный',
  'АК БАРС БАНК',
  'КБ РостФинанс',
  'БыстроБанк',
  'МС Банк Рус',
  'Кредит Европа Банк (Россия)',
  'АКБ Алмазэргиэнбанк',
  'ИК Банк',
  'БАНК ОРЕНБУРГ',
  'КБ АГРОПРОМКРЕДИТ',
  'АКБ Энергобанк',
  'КОШЕЛЕВ-БАНК',
  'СДМ-Банк',
  'МБ Банк',
  'АКБ Абсолют Банк',
  'КБ Модульбанк',
  'Банк Акцепт',
  'КБ ЭНЕРГОТРАНСБАНК',
  'СИБСОЦБАНК',
  'Банк Развитие-Столица',
  'Банк РЕСО Кредит',
  'НКО ЮМани',
  'Банк Санкт-Петербург',
  'КБ Кубань Кредит',
  'Точка ФК Открытие',
  'АКБ НОВИКОМБАНК',
  'РосДорБанк',
  'СКБ Приморья Примсоцбанк',
  'Банк Саратов',
  'Таврический Банк',
  'Тольяттихимбанк',
  'Банк Кремлевский',
  'ТКБ БАНК',
  'ЧЕЛЯБИНВЕСТБАНК',
  'АКБ Держава',
  'НБД-Банк',
  'БАНК СНГБ',
  'АИКБ Енисейский объединенный банк',
  'Банк Венец',
  'Почта Банк',
  'Банк Русский Стандарт',
  'Дальневосточный банк',
  'Банк Интеза',
  'ГЕНБАНК',
  'ВУЗ-банк',
  'УРАЛПРОМБАНК',
  'Банк Национальный стандарт',
  'Банк Екатеринбург',
  'МОРСКОЙ БАНК',
  'Кредит Урал Банк',
  'Углеметбанк',
  'Авто Финанс Банк',
  'КБ СТРОЙЛЕСБАНК',
  'Банк ИТУРУП',
  'Первый Инвестиционный Банк',
  'Газтрансбанк',
  'ЧЕЛИНДБАНК',
  'НИКО-БАНК',
  'НОКССБАНК',
  'ВЛАДБИЗНЕСБАНК',
  'Кузнецкбизнесбанк',
  'Автоградбанк',
  'Томскпромстройбанк',
  'АКБ МЕЖДУНАРОДНЫЙ ФИНАНСОВЫЙ КЛУБ',
  'АКБ Форштадт',
  'АКБ Солид',
  'Банк АЛЕКСАНДРОВСКИЙ',
  'АКИБАНК',
  'Нацинвестпромбанк',
  'АКБ Алеф-Банк',
  'КБ ВНЕШФИНБАНК',
  'КБ Урал ФД',
  'КБ АРЕСБАНК',
  'Северный Народный Банк',
  'Банк Объединенный капитал',
  'ТАТСОЦБАНК',
  'Норвик Банк',
  'Джей энд Ти Банк',
  'НС Банк',
  'Земский банк',
  'Банк Аверс',
  'КБ РУСНАРБАНК',
  'РЕАЛИСТ БАНК',
  'Эс-Би-Ай Банк',
  'МЕТКОМБАНК',
  'КБЭР Банк Казани',
  'АКБ Трансстройбанк',
  'Банк Заречье',
  'КБ Центр-инвест',
  'Датабанк',
  'КБ Гарант-Инвест',
  'СОЦИУМ-БАНК',
  'КБ СИНКО-БАНК',
  'ИШБАНК',
  'Банк ЗЕНИТ',
  'АКБ ФОРА-БАНК',
  'МП Банк',
  'Банк БКФ',
  'ГОРБАНК',
  'МОСКОМБАНК',
  'Тимер Банк',
  'МОСОБЛБАНК',
  'КБ Ситибанк',
  'Автоторгбанк',
  'КИВИ Банк',
  'БАНК УРАЛСИБ',
  'Ингосстрах Банк',
  'Русьуниверсалбанк',
  'КБ УБРиР',
  'АКБ Приморье',
  'Банк ИПБ',
  'КБ Пойдём!',
  'АКБ ТЕНДЕР-БАНК',
  'ОТП Банк',
  'КБ Крокус-Банк',
  'Хоум кредит',
  'КБ Ренессанс Кредит',
  'УКБ Белгородсоцбанк',
  'Хайс Банк',
  'Севергазбанк',
  'АКБ НРБанк',
  'КБ Москоммерцбанк',
  'Кубаньторгбанк',
  'УКБ Новобанк',
  'СМП Банк',
  'НК Банк',
  'Тойота Банк',
  'ББР Банк',
  'АКБ Ланта-Банк',
  'КБ Долинск',
  'Банк Финсервис',
  'КБ ЮНИСТРИМ',
  'КБ Новый век',
  'Банк МБА-МОСКВА',
  'БКС Банк',
  'АКБ СЛАВИЯ',
  'АКБ ЕВРОФИНАНС МОСНАРБАНК',
  'Яндекс Банк',
  'Банк БЖФ',
  'КБ ЛОКО-Банк',
  'БАНК МОСКВА-СИТИ',
  'Драйв Клик Банк',
  'ГУТА-БАНК',
  'БАНК СИАБ',
  'банк Раунд',
  'Прио-Внешторгбанк',
  'Инбанк',
  'Уралфинанс',
  'Банк Агророс',
  'ЮГ-Инвестбанк',
  'ЦентроКредит',
  'Снежинский',
  'Банк ФИНАМ',
  'Банк Точка',
  'банк Элита',
  'АКБ Металлинвестбанк',
  'ПроБанк',
  'ФФИН Банк',
  'Озон Банк (Ozon)',
]

const index = objectInArray.findIndex((item) => item.bankName === 'Промсвязьбанк');

// If "Промсвязьбанк" is in the array, move it to the first position
if (index > -1) {
  const element = objectInArray.splice(index, 1)[0]; // Remove the element from its current position
  objectInArray.unshift(element); // Add the element to the beginning of the array
}

const objectInArray =[
  {bankName: 'Сбербанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000111.png'},
  {bankName: 'Тинькофф Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000004.png'},
  {bankName: 'Банк ВТБ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000005.png'},
  {bankName: 'АЛЬФА-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000008.png'},
  {bankName: 'Райффайзенбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000007.png'},
  {bankName: 'Банк ОТКРЫТИЕ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000015.png'},
  {bankName: 'Газпромбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000001.png'},
  {bankName: 'Промсвязьбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000010.png'},
  {bankName: 'Совкомбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000013.png'},
  {bankName: 'РОСБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000012.png'},
  {bankName: 'Россельхозбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000020.png'},
  {bankName: 'МОСКОВСКИЙ КРЕДИТНЫЙ БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000025.png'},
  {bankName: 'ЮниКредит Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000030.png'},
  {bankName: 'Банк Синара', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000003.png'},
  {bankName: 'Газэнергобанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000043.png'},
  {bankName: 'АКБ АВАНГАРД', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000028.png'},
  {bankName: 'ПНКО ЭЛПЛАТ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000086.png'},
  {bankName: 'РНКБ Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000011.png'},
  {bankName: 'Экспобанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000044.png'},
  {bankName: 'Банк ВБРР', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000049.png'},
  {bankName: 'АБ РОССИЯ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000095.png'},
  {bankName: 'ДБО Фактура', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000900.png'},
  {bankName: 'КБ Хлынов', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000056.png'},
  {bankName: 'Бланк банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000053.png'},
  {bankName: 'КБ Солидарность', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000121.png'},
  {bankName: 'Банк ДОМ.РФ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000082.png'},
  {bankName: 'Хакасский муниципальный банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000127.png'},
  {bankName: 'МТС-Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000017.png'},
  {bankName: 'Банк ПСКБ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000087.png'},
  {bankName: 'Банк Левобережный', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000052.png'},
  {bankName: 'АК БАРС БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000006.png'},
  {bankName: 'КБ РостФинанс', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000098.png'},
  {bankName: 'БыстроБанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000092.png'},
  {bankName: 'МС Банк Рус', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000229.png'},
  {bankName: 'Кредит Европа Банк (Россия)', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000027.png'},
  {bankName: 'АКБ Алмазэргиэнбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000080.png'},
  {bankName: 'ИК Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000122.png'},
  {bankName: 'БАНК ОРЕНБУРГ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000124.png'},
  {bankName: 'КБ АГРОПРОМКРЕДИТ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000118.png'},
  {bankName: 'АКБ Энергобанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000159.png'},
  {bankName: 'КОШЕЛЕВ-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000146.png'},
  {bankName: 'СДМ-Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000069.png'},
  {bankName: 'МБ Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000140.png'},
  {bankName: 'АКБ Абсолют Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000047.png'},
  {bankName: 'КБ Модульбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000099.png'},
  {bankName: 'Банк Акцепт', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000135.png'},
  {bankName: 'КБ ЭНЕРГОТРАНСБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000139.png'},
  {bankName: 'СИБСОЦБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000166.png'},
  {bankName: 'Банк Развитие-Столица', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000172.png'},
  {bankName: 'Банк РЕСО Кредит', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000187.png'},
  {bankName: 'НКО ЮМани', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000022.png'},
  {bankName: 'Банк Санкт-Петербург', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000029.png'},
  {bankName: 'КБ Кубань Кредит', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000050.png'},
  {bankName: 'Точка ФК Открытие', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000065.png'},
  {bankName: 'АКБ НОВИКОМБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000177.png'},
  {bankName: 'РосДорБанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000084.png'},
  {bankName: 'СКБ Приморья Примсоцбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000088.png'},
  {bankName: 'Банк Саратов', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000126.png'},
  {bankName: 'Таврический Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000173.png'},
  {bankName: 'Тольяттихимбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000152.png'},
  {bankName: 'Банк Кремлевский', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000201.png'},
  {bankName: 'ТКБ БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000034.png'},
  {bankName: 'ЧЕЛЯБИНВЕСТБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000094.png'},
  {bankName: 'АКБ Держава', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000235.png'},
  {bankName: 'НБД-Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000134.png'},
  {bankName: 'БАНК СНГБ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000091.png'},
  {bankName: 'АИКБ Енисейский объединенный банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000258.png'},
  {bankName: 'Банк Венец', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000153.png'},
  {bankName: 'Почта Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000016.png'},
  {bankName: 'Банк Русский Стандарт', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000014.png'},
  {bankName: 'Дальневосточный банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000083.png'},
  {bankName: 'Банк Интеза', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000170.png'},
  {bankName: 'ГЕНБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000037.png'},
  {bankName: 'ВУЗ-банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000215.png'},
  {bankName: 'УРАЛПРОМБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000142.png'},
  {bankName: 'Банк Национальный стандарт', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000243.png'},
  {bankName: 'Банк Екатеринбург', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000090.png'},
  {bankName: 'МОРСКОЙ БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000171.png'},
  {bankName: 'Кредит Урал Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000064.png'},
  {bankName: 'Углеметбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000093.png'},
  {bankName: 'Авто Финанс Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000253.png'},
  {bankName: 'КБ СТРОЙЛЕСБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000193.png'},
  {bankName: 'Банк ИТУРУП', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000158.png'},
  {bankName: 'Первый Инвестиционный Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000174.png'},
  {bankName: 'Газтрансбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000183.png'},
  {bankName: 'ЧЕЛИНДБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000106.png'},
  {bankName: 'НИКО-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000115.png'},
  {bankName: 'НОКССБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000062.png'},
  {bankName: 'ВЛАДБИЗНЕСБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000058.png'},
  {bankName: 'Кузнецкбизнесбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000195.png'},
  {bankName: 'Автоградбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000130.png'},
  {bankName: 'Томскпромстройбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000206.png'},
  {bankName: 'АКБ МЕЖДУНАРОДНЫЙ ФИНАНСОВЫЙ КЛУБ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000203.png'},
  {bankName: 'АКБ Форштадт', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000081.png'},
  {bankName: 'АКБ Солид', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000230.png'},
  {bankName: 'Банк АЛЕКСАНДРОВСКИЙ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000211.png'},
  {bankName: 'АКИБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000107.png'},
  {bankName: 'Нацинвестпромбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000185.png'},
  {bankName: 'АКБ Алеф-Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000113.png'},
  {bankName: 'КБ ВНЕШФИНБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000248.png'},
  {bankName: 'КБ Урал ФД', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000151.png'},
  {bankName: 'КБ АРЕСБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000129.png'},
  {bankName: 'Северный Народный Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000208.png'},
  {bankName: 'Банк Объединенный капитал', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000182.png'},
  {bankName: 'ТАТСОЦБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000189.png'},
  {bankName: 'Норвик Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000202.png'},
  {bankName: 'Джей энд Ти Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000213.png'},
  {bankName: 'НС Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000071.png'},
  {bankName: 'Земский банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000066.png'},
  {bankName: 'Банк Аверс', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000154.png'},
  {bankName: 'КБ РУСНАРБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000194.png'},
  {bankName: 'РЕАЛИСТ БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000232.png'},
  {bankName: 'Эс-Би-Ай Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000105.png'},
  {bankName: 'МЕТКОМБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000136.png'},
  {bankName: 'КБЭР Банк Казани', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000191.png'},
  {bankName: 'АКБ Трансстройбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000197.png'},
  {bankName: 'Банк Заречье', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000205.png'},
  {bankName: 'КБ Центр-инвест', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000059.png'},
  {bankName: 'Датабанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000070.png'},
  {bankName: 'КБ Гарант-Инвест', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000112.png'},
  {bankName: 'СОЦИУМ-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000223.png'},
  {bankName: 'КБ СИНКО-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000148.png'},
  {bankName: 'ИШБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000199.png'},
  {bankName: 'Банк ЗЕНИТ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000045.png'},
  {bankName: 'АКБ ФОРА-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000217.png'},
  {bankName: 'МП Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000169.png'},
  {bankName: 'Банк БКФ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000227.png'},
  {bankName: 'ГОРБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000125.png'},
  {bankName: 'МОСКОМБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000176.png'},
  {bankName: 'Тимер Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000144.png'},
  {bankName: 'МОСОБЛБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000221.png'},
  {bankName: 'КБ Ситибанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000128.png'},
  {bankName: 'Автоторгбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000181.png'},
  {bankName: 'КИВИ Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000009.png'},
  {bankName: 'БАНК УРАЛСИБ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000026.png'},
  {bankName: 'Ингосстрах Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000078.png'},
  {bankName: 'Русьуниверсалбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000165.png'},
  {bankName: 'КБ УБРиР', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000031.png'},
  {bankName: 'АКБ Приморье', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000226.png'},
  {bankName: 'Банк ИПБ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000236.png'},
  {bankName: 'КБ Пойдём!', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000103.png'},
  {bankName: 'АКБ ТЕНДЕР-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000175.png'},
  {bankName: 'ОТП Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000018.png'},
  {bankName: 'КБ Крокус-Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000212.png'},
  {bankName: 'Хоум кредит', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000024.png'},
  {bankName: 'КБ Ренессанс Кредит', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000032.png'},
  {bankName: 'УКБ Белгородсоцбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000225.png'},
  {bankName: 'Хайс Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000272.png'},
  {bankName: 'Севергазбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000219.png'},
  {bankName: 'АКБ НРБанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000184.png'},
  {bankName: 'КБ Москоммерцбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000110.png'},
  {bankName: 'Кубаньторгбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000180.png'},
  {bankName: 'УКБ Новобанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000222.png'},
  {bankName: 'СМП Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000036.png'},
  {bankName: 'НК Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000233.png'},
  {bankName: 'Тойота Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000138.png'},
  {bankName: 'ББР Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000133.png'},
  {bankName: 'АКБ Ланта-Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000245.png'},
  {bankName: 'КБ Долинск', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000270.png'},
  {bankName: 'Банк Финсервис', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000216.png'},
  {bankName: 'КБ ЮНИСТРИМ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000042.png'},
  {bankName: 'КБ Новый век', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000067.png'},
  {bankName: 'Банк МБА-МОСКВА', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000192.png'},
  {bankName: 'БКС Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000041.png'},
  {bankName: 'АКБ СЛАВИЯ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000200.png'},
  {bankName: 'АКБ ЕВРОФИНАНС МОСНАРБАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000167.png'},
  {bankName: 'Яндекс Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000150.png'},
  {bankName: 'Банк БЖФ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000260.png'},
  {bankName: 'КБ ЛОКО-Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000161.png'},
  {bankName: 'БАНК МОСКВА-СИТИ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000234.png'},
  {bankName: 'Драйв Клик Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000250.png'},
  {bankName: 'ГУТА-БАНК', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000149.png'},
  {bankName: 'БАНК СИАБ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000278.png'},
  {bankName: 'банк Раунд', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000247.png'},
  {bankName: 'Прио-Внешторгбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000228.png'},
  {bankName: 'Инбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000196.png'},
  {bankName: 'Уралфинанс', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000096.png'},
  {bankName: 'Банк Агророс', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000102.png'},
  {bankName: 'ЮГ-Инвестбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000160.png'},
  {bankName: 'ЦентроКредит', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000231.png'},
  {bankName: 'Снежинский', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000163.png'},
  {bankName: 'Банк ФИНАМ', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000040.png'},
  {bankName: 'Банк Точка', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000284.png'},
  {bankName: 'банк Элита', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000266.png'},
  {bankName: 'АКБ Металлинвестбанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000046.png'},
  {bankName: 'ПроБанк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000117.png'},
  {bankName: 'ФФИН Банк', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000265.png'},
  {bankName: 'Озон Банк (Ozon)', logoURL: 'https://qr.nspk.ru/proxyapp/logo/bank100000000273.png' },
]
