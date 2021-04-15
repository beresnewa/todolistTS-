"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person('Max');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('Btn cliked');
});
//# sourceMappingURL=app.js.map