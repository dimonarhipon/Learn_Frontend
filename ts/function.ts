type Filter1 = <T>(array: T[], f: (item: T) => boolean) => T[];
let filter1: Filter1;

// Полная сигнатура вызова с диапазоном T, включающим только одну сигнатуру.
// Поскольку диапазон T ограничен одной сигнатурой,

// TypeScript привяжет T к реальному типу в этой сигнатуре при вызове функции типа filter.
// Каждый вызов filter будет получать свою собственнуюcпривязку для T.


type Filter2<T> = (array: T[], f: (item: T) => boolean) => T[];
let filter2: Filter2<string>;

// Полная сигнатура вызова с диапазоном T, включающим все сигнатуры.
// T объявлен как часть типа Filter (а не часть конкретной сигнатуры типа),
// и TypeScript привяжет T, когда вы объявите функцию типа Filter


function filter3<T>(array: T[], f: (item: T) => boolean): T[] {};

// Именованная сигнатура вызова функции с диапазоном T, ограниченным сигнатурой.
// TypeScript привяжет конкретный тип к T при вызове filter,
// и каждый вызов filter получит свою собственную привязку для T.



interface Array<T> {
	filter(
		callbackfn: (value: T, index: number, array: T[]) => any,
		thisArg?: any
	): T[]

	map<U>(
		callbackfn: (value: T, index: number, array: T[]) => U,
		thisArg?: any
	): U[]
}


function map<T, U>(array: T[], f: (item: T) => U): U[] {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result[i] = f(array[i]);
	}
	return result;
}






type TreeNode = {
	value: string
}

type LeafNode = TreeNode & {
	isLeaf: true
}

type InnerNode = TreeNode & {
	children: [TreeNode] | [TreeNode, TreeNode]
}


let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}
