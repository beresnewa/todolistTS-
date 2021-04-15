"use strict";
const cars = ['a', 'b', 'c'];
const cars2 = ['a1', 'b1', 'c1'];
const promise = new Promise(res => {
    setTimeout(() => {
        res('hello');
    }, 2000);
});
promise.then(data => {
    console.log(data.toLocaleUpperCase());
});
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: 'Max' }, { age: 20 });
console.log(merged.name);
function withCount(value) {
    return {
        value,
        count: `в этом объекте ${value.length} символов`
    };
}
console.log(withCount('hello ts'));
console.log(withCount(['I', 'Am', 'Array']));
console.log(withCount('hello ts'));
function getObjValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Max',
    age: 20
};
console.log(getObjValue(person, 'name'));
console.log(getObjValue(person, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Array']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3]);
numbers.add(0);
numbers.remove(3);
console.log(numbers.items);
function createCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    return car;
}
const cars3 = ['dk', 'woc'];
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map