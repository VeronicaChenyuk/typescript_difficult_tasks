// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<String> = ['Ford', 'Audi']

// const promise = new Promise<String>(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolves')
//   }, 2000)
// })
// promise.then(data => {
//   console.log(data.toLocaleUpperCase().trim().toUpperCase());
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}
const merged = mergeObjects({ name: 'Veronica' }, { age: 30 })
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 })

console.log(merged);

// =========
interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: String } {
  return {
    value,
    count: `В этом объекте ${value.length} символом`
  }
}

// console.log((withCount('Hello Typescript')));
// console.log(['I', 'am', 'array']);

// ======== ипользование ключа keyof в Generic

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key]
// }
// const person = {
//   name: 'Veronica',
//   age: 30,
//   job: ' TypeScript'
// }
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

// ======== Classes and Generics

// class Colllection<T extends number | string | boolean> {
//   constructor(private _items: T[] = []) { }

//   add(item: T) {
//     this._items.push(item)
//   }
//   remove(item: T) {
//     this._items = this._items.filter(i => i! == item)
//   }
//   get items(): T[] {
//     return this._items
//   }
// }

// const strings = new Colllection<string>(['I', 'Am', 'String']);
// strings.add('!')
// strings.remove('Am')
// console.log(strings.items);

// =======

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}
  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  return car as Car
}

///

const cars: Readonly<Array<string>> = ['Ford', 'Audi']

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari'
