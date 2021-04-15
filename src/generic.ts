const cars: string[] = ['a', 'b', 'c'];
const cars2: Array<string> = ['a1', 'b1', 'c1'];

const promise = new Promise<string>(res => {
    setTimeout(() => {
        res('hello')
    }, 2000)
})
promise.then(data => {
    console.log(data.toLocaleUpperCase())
})

// ========================

function mergeObject<T, R>(a: T, b: R) : T & R {
    return Object.assign({}, a, b)
}
const merged = mergeObject ({ name: 'Max' }, { age: 20 })
console.log(merged.name) 

// ========================

interface Length {
    length: number
}
function withCount<T extends Length>(value : T): {value: T, count: string} {
    return {
        value,
        count: `в этом объекте ${value.length} символов`
    }
}
console.log(withCount('hello ts'));
console.log(withCount(['I', 'Am', 'Array']));
console.log(withCount('hello ts'));

// ========================

function getObjValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const person = {
    name: 'Max',
    age: 20
}

console.log(getObjValue(person, 'name'))
console.log(getObjValue(person, 'age'))
// console.log(getObjValue(person, 'job')) 

// ========================
class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {
    }
    add(item: T) {
        this._items.push(item)
    }
    remove(item: T) {
        this._items = this._items.filter(i => i !==item)
    }
    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['I', 'Am', 'Array'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(0)
numbers.remove(3)
console.log(numbers.items)

// ========================

interface Car {
    model: string,
    year: number
}
function createCar(model: string, year: number): Car {
    const car: Partial<Car> = {}
    if(model.length > 3) {
        car.model = model
    }
    return car as Car
}

// ========================

const cars3: Readonly<Array<string>> = ['dk', 'woc']
const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}