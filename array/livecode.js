// Условие задачи:

// У вас есть массив книг, представленных в виде объектов.
// Каждая книга содержит информацию о названии, авторе, годе публикации, жанре, количестве страниц, статусе (в наличии или в аренде)
// и, если книга в аренде, то еще и количество экземпляров.
// Необходимо создать функции для решения следующих задач:

// 1. Средний возраст книг в годах.
// 2. Отфильтровать книги, выпущенные после определенного года.
// 3. Сгруппировать книги по жанрам и внутри каждой группы отсортировать книги по названию.
// 4. Получить массив уникальных авторов.
// 5. Создать новый массив объектов с информацией о книгах: название, автор, год публикации и статус.
// 6. Посчитать общее количество страниц во всех книгах.
// 7. Получить массив книг с количеством страниц более 300.
// 8. Изменить год публикации у всех книг, увеличив его на указанное количество лет.
// 9. Создать массив строк вида "Название книги (Автор)"
// 10. Получить среднюю длину названия книг.
// 11. Получить массив названий книг, у которых в названии есть указанное слово ???
// 12. Изменить жанр книги с одного на другой.
// 13. Получить массив книг с информацией о том, является ли книга "художественной" (булево свойство "художественная" или "научная").
// 14. Формирование объекта с информацией о книгах в аренде: количество книг, суммарное количество страниц и список авторов этих книг.

let books = [
  { title: '1984', author: 'Джордж Оруэлл', year: 1949, genre: 'фантастика', pages: 328, status: 'в наличии' },
  { title: 'Преступление и наказание', author: 'Федор Достоевский', year: 1866, genre: 'роман', pages: 574, status: 'в аренде', quantity: 3 },
  { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1966, genre: 'фэнтези', pages: 480, status: 'в наличии' },
  { title: 'Мартин Иден', author: 'Джек Лондон', year: 1909, genre: 'роман', pages: 368, status: 'в аренде', quantity: 7 },
  { title: 'Солярис', author: 'Станислав Лем', year: 1961, genre: 'научная фантастика', pages: 224, status: 'в наличии' },
  { title: 'Война и мир', author: 'Лев Толстой', year: 1869, genre: 'роман', pages: 1225, status: 'в наличии' },
  { title: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', year: 1997, genre: 'фэнтези', pages: 432, status: 'в аренде', quantity: 5 },
  { title: 'Гарри Поттер и Кубок огня', author: 'Джоан Роулинг', year: 2000, genre: 'фэнтези', pages: 734, status: 'в наличии' },
]

// 1.
// const calculateAverageAge = (array) => {
// 	return array.reduce((acc, item) => (acc + item.year) / array.length)
// }

// function calculateAverageAge(books) {
// 	let currentYear = new Date().getFullYear();
// 	return books.reduce((sum, book) => sum + (currentYear - book.year), 0) / books.length;
// 	}

// 2.
const filterBooksAfterYear = (array, god) => array.filter(({year}) => year >= god);

// 3
// function groupAndSortBooksByGenre(books) {
// 	let groupedAndSortedBooks = Object.fromEntries(
// 	Object.entries(
// 	books.reduce((grouped, book) => {
// 	grouped[book.genre] = grouped[book.genre] || [];
// 	grouped[book.genre].push(book);
// 	return grouped;
// 	}, {})
// 	).map(([genre, books]) => [genre, books.sort((a, b) => a.title.localeCompare(b.title))])
// 	);
// 	return groupedAndSortedBooks;
// 	}

// 4
const getUniqueAuthors = (array) => new Set(array.map((item) => item.author));
// return [Object.values(new Set(books.map(book => book.author)))];

// 5
// function createArrayOfBooksInfo(books) {
// 	return books.map(book => ({ title: book.title, author: book.author, year: book.year, status: book.status }));
// 	}

// 6
const calculateTotalPageCount = (array) => {
	return array.map((item) => item.pages).reduce((acc, item) => acc + item);
	// return books.reduce((sum, book) => sum + book.pages, 0);
}

// 7
const getBooksWithMoreThan300Pages = (array) => array.filter(({ pages }) => pages > 300);

// 8
const increasePublicationYear = (array, god) => {
	return array.map(({ year }) => year + god); // !!!!
	// return array.map((item) => item)
	// return books.map(book => ({ ...book, year: book.year + yearsToAdd }));
}

// 9
const createTitleAuthorStrings = (array) => array.map(({ title, author}) => `${title} (${author})`);

// 10
const calculateAverageTitleLength = (array) => {
	const newArray = array
		.map(({ title }) => title.length)
		.reduce((acc, item) => (acc + item) / array.length);
	return newArray.toFixed();

	// return books.reduce((sum, book) => sum + book.title.length, 0) / books.length;
}

// 11
const getBooksByKeyword = (array, word) => array.filter(({ title}) => title.includes(word));
// return books.filter(book => book.title.toLowerCase().includes(keyword)).map(book => book.title);

// 12
const updateGenre = (array, genre1, genre2) => {
	return array.filter(({ genre }) => genre === genre1 || genre === genre2);
	// return books.map(book => (book.genre === oldGenre ? { ...book, genre: newGenre } : book));
}

// 13.
const getBooksFictionInfo = (array) => {
	const books = updateGenre(array, 'фантастика', 'научная фантастика');
	return books.filter(({ genre }) => genre === 'фантастика');

	// return books.map(book => ({ ...book, fiction: book.genre === 'роман' || book.genre === 'фэнтези' }));
}

// status: 'в аренде', quantity: 7

// 14. Формирование объекта с информацией о книгах в аренде: количество книг, суммарное количество страниц и список авторов этих книг.
const getRentedBooksInfo = (array) => {
	return array;
};

// function getRentedBooksInfo(books) {
//   return books.reduce(
//       (rentedInfo, book) => {
//           if (book.status === 'в аренде') {
//               rentedInfo.quantity += book.quantity || 1;
//               rentedInfo.totalPageCount += book.pages *
//                   (book.quantity || 1);
//               rentedInfo.authors.add(book.author);
//           }
//           return rentedInfo;
//       },
//       { quantity: 0, totalPageCount: 0, authors: new Set() }
//   );
// }

// Пример использования функций
// console.log('Средний возраст книг в годах:', calculateAverageAge(books));
// console.log('Книги, выпущенные после 2000 года:', filterBooksAfterYear(books, 2000));
// console.log('Группировка книг по жанрам:', groupAndSortBooksByGenre(books));
// console.log('Уникальные авторы книг:', getUniqueAuthors(books));
// console.log('Новый массив объектов с названием, автором, годом публикации и статусом:', createArrayOfBooksInfo(books));
// console.log('Общее количество страниц во всех книгах:', calculateTotalPageCount(books));
// console.log('Книги с более чем 300 страницами:', getBooksWithMoreThan300Pages(books));
// console.log('Книги с увеличенным годом публикации:', increasePublicationYear(books, 5));
// console.log('Массив строк вида "Название книги (Автор)":', createTitleAuthorStrings(books));
// console.log('Средняя длина названия книг:', calculateAverageTitleLength(books));
// console.log('Книги, содержащие слово "мир" в названии:', getBooksByKeyword(books, 'мир'));
// console.log('Книги с обновленным жанром:', updateGenre(books, 'фантастика', 'научная фантастика'));
// console.log('Книги с информацией о художественности:', getBooksFictionInfo(books));
// console.log('Информация о книгах в аренде:', getRentedBooksInfo(books));
