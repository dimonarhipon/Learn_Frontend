// Map, Set, WeakMap, WeakSet
const START_HOUR = 10;
const END_HOUR = 22;
const rentals = [
	{
		"id": "1",
		"name": "MOOMBA MAKAI",
		"description": "info text",
		"price": "6000",
		"params": {
				"activity": [
						"wakeboard",
						"weaksurf"
				],
		}
	},
	{
			"id": "2",
			"name": "TIGE Z3",
			"description": "info text",
			"price": "5000",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "88",
			"name": "test60",
			"description": "desc",
			"price": "60",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],

			}
	},
	{
			"id": "89",
			"name": "Тест лодка",
			"description": "Как ветер",
			"price": "4000",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "90",
			"name": "test 88",
			"description": "desc 88",
			"price": "88",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "91",
			"name": "test 89",
			"description": "desc 89",
			"price": "89",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "92",
			"name": "тест 20",
			"description": "описание",
			"price": "69",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "97",
			"name": "test 90",
			"description": "des 90",
			"price": "9",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "98",
			"name": "X",
			"description": "Описание",
			"price": "3",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "99",
			"name": "test 122",
			"description": "desc 22",
			"price": "22",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	},
	{
			"id": "100",
			"name": "test20",
			"description": "desc ",
			"price": "22",
			"params": {
					"activity": [
							"wakeboard",
							"weaksurf"
					],
			}
	}
]

const ordered = [
	{
			"id": "1359",
			"from": "2024-01-23 13:30:00",
			"to": "2024-01-23 14:00:00",
			"is_paid": "1",
			"rental_order_id": "17059234186618",
			"first_name": "Иванович ",
			"phone": "+7 (989) 898-22-44",
			"new": "1"
	},
	{
			"id": "1361",
			"name": "MOOMBA MAKAI",
			"from": "2024-01-23 13:30:00",
			"to": "2024-01-23 14:00:00",
			"is_paid": "0",
			"rental_order_id": "17059241200974",
			"first_name": "Клиент Тест",
			"phone": "+79525626614",
			"new": "1"
	},
	{
			"id": "1393",
			"name": "test 89",
			"from": "2024-01-23 08:00:00",
			"to": "2024-01-23 08:30:00",
			"is_paid": "0",
			"rental_order_id": "17059252535411",
			"first_name": "test 104",
			"phone": "+79121281889",
			"new": "1"
	},
	{
			"id": "1411",
			"name": "Тест лодка",
			"from": "2024-01-23 10:00:00",
			"to": "2024-01-23 10:30:00",
			"is_paid": "0",
			"rental_order_id": "17059930122297",
			"first_name": "test 110",
			"phone": "+7 (927) 364-52-23",
			"new": "1"
	},
	{
			"id": "1412",
			"name": "Тест лодка",
			"from": "2024-01-23 10:30:00",
			"to": "2024-01-23 11:00:00",
			"is_paid": "0",
			"rental_order_id": "17059930816698",
			"first_name": "test 110",
			"phone": "+7 (927) 362-51-23",
			"new": "1"
	},
	{
			"id": "1413",
			"name": "MOOMBA MAKAI",
			"from": "2024-01-23 10:00:00",
			"to": "2024-01-23 10:30:00",
			"is_paid": "0",
			"rental_order_id": "17059931277585",
			"first_name": "test 111",
			"phone": "+7 (927) 361-54-29",
			"new": "1"
	}
]

const newArray = ordered.slice();
const newArrayWeak = ordered.slice();
const orderedWeakMap = new WeakMap();

console.log(newArray.map((item) => new Map(Object.entries(item))));

for (const entry of ordered) {
  const entryMap = new Map(Object.entries(entry));
  orderedWeakMap.set(entry, entryMap);
}

// WeakMap {{Object, Map}, {Object, Map} ... }
console.log(orderedWeakMap);




const hashMapOrders = function() {
	const map = new Map();

	ordered.forEach((order) => {
		if (map.has(order.name)) {
			map.set(order.name, [...map.get(order.name), order]);
			// debugger
		} else {
			map.set(order.name, [order]);
		}
	});
	// console.log(map.size);
	return map;
};

// console.log(hashMapOrders());

const bookeds = function (from = START_HOUR, to = END_HOUR) {
	rentals.map((booked) => {
		const item = [];

		item.push({
			name: booked.name,
			image: booked?.params?.image_url
		});

		const ordersBooked = {};

		hashMapOrders().get(ordered.name)?.forEach((order) => {
			const fromDateTime = new Date(order.from);
			const hour = fromDateTime.getHours();

			ordersBooked[hour] = ordersBooked[hour] ? [...ordersBooked[hour], order] : [order];
		});

		for (let time = from; time <= to; time++) {
			if (ordersBooked[time]) {
				ordersBooked.time.map((order) => (
					item.push({
						id: order.id,
						name: order.name,
						first_name: order.first_name,
						phone: order.phone,
						is_paid: order.is_paid,
					})
				))
			}
		}

		return item;
	})
}


// console.log(bookeds())


// Set
const activityOptions = function () {
	if (rentals && Array.isArray(rentals)) {
		const set = new Set();

		rentals.forEach((rental) => {
			rental.params.activity?.forEach((activity) => set.add(activity));
		});

		const res = [];

		set.forEach((activity) => {
			res.push({ label: activity, value: activity });
		});

		return res;
	}
};
// console.log(activityOptions())


// export class WithWeakSet {
// 	set = new WeakSet<HTMLElement>();

// 	addRef = (ref: HTMLElement) => {
// 			if (ref !== null) {
// 					this.set.add(ref);
// 			}
// 	};
// }



// https://astexplorer.net/
// export function asyncTuning(mode: string)

const ignoreWeakSet = new WeakSet();
const replaces = [];
// let fnBody: Statement[] = null;
// let block: BlockStatement = null;

// recursiveObj(fnBody, (o: Statement | Expression) => {
// 	if (ignoreWeakSet.has(o)) return;

// 	if (o.type === 'CallExpression') {
// 			const root = o;
// 			let found = false;
// 			recursiveObj(o, (o: Statement | Expression) => {
// 					if (ignoreWeakSet.has(o)) return;

// 					if (o.type === 'NewExpression') {
// 							if ((o.callee as Identifier).name === 'ApiRequest') {
// 									let callStr = printCode([root]);
// 									let index = callStr.indexOf(')');
// 									const newCallStr = callStr.substr(0, index + 1) + '.registerAbort(_ah.abortFetchFunctions)' + callStr.substr(index + 1);
// 									replaces.push([callStr, newCallStr]);
// 							}
// 					}
// 			});

// 			ignoreWeakSet.add(o);

// 			if (found) {
// 					recursiveObj(o, (o: Statement | Expression) => {
// 							ignoreWeakSet.add(o);
// 					});
// 			}
// 	}
// });










// JSON toJSON
let json = JSON.stringify(rentals, null, 4);
// console.log(json, JSON.parse(json))
