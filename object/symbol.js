

// Фукнция которая генерирует уникальный символ и использует его в качестве ключа свойства объекта. Демонстрирация, что такой ключ не перезапишет другие свойства объекта

const qunicKey = (object) => object[Symbol('key')] = 'value'

const item = {
	name: 'имя',
	tel: '03'
}
qunicKey(item);
console.log(qunicKey(item))


// класс MyClass при создании экземпляра генерирует уникальный символ-идентификатор. Методы getId() и setId(id) для работы с этим идентификатором.

class MyClass {
	constructor() {
		this.id = Symbol('id')
	}

	getId() {
		return this.id;
	};

	setId(newId) {
		this.id = newId;
	}
}
const obj1 = new MyClass();
const obj2 = new MyClass();

console.log(obj1.getId() === obj2.getId()); // false

obj1.setId(Symbol('id2'));

console.log(obj1.getId());



// Глобальные символы
const instance = Symbol.for('instance');

class Singleton {
	constructor() {
		if (!window[instance]) {
			window[instance] = this;
		}
		return window[instance];
	}
}

const elem1 = new Singleton();
const elem2 = new Singleton();

console.log(elem1 === elem2);
