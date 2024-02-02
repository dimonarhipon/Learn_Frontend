// never

function errorMessage(message: string): never {
  throw new Error(message);
}


type Shape = "circle" | "square" | "triangle";

function getFigure(shape: Shape) {
  switch (shape) {
    case "circle":
      return Math.PI;
    case "square":
      return 4;
    case "triangle":
      return 3;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

function loopForever(): never {
  while (true) {
    // бесконечный цикл
  }
}

function main() {
  loopForever();

  console.log("Эта строка никогда не выполнится");
}





// my project

export interface ICheckboxProps extends ComponentProps<'input'> {
	type?: never;
	onDelete?: VoidFunction;
	children: ReactNode;
}


export interface IFieldDatePicker extends IFieldProps {
	type?: never;
	className?: string;
	placeholder?: string;
}


// 6S

export function useAtomState<AtomType extends StateAtom<any>>(
  atom: AtomType
): AtomType extends StateAtom<infer State> ? Readonly<State> : never {


// строка
emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void;

// в
export interface Emitter<Events extends Record<EventType, unknown>> {
	all: EventHandlerMap<Events>;

	on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
	on(type: '*', handler: WildcardHandler<Events>): void;

	off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void;
	off(type: '*', handler: WildcardHandler<Events>): void;

	emit<Key extends keyof Events>(type: Key, event: Events[Key]): void;
	emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void;
}
