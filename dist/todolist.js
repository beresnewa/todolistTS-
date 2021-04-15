"use strict";
let todoList = ['Вымыть кухню', 'Пойти в театр'];
const ul = document.querySelector('#todos');
function createTodo() {
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', () => {
        const input = document.querySelector('input[type="text"]');
        const newTodo = input.value;
        todoList.push(newTodo);
        const li = document.createElement('li');
        li.textContent = newTodo;
        ul.appendChild(li);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.setAttribute('id', 'deleteBtn');
        li.appendChild(deleteBtn);
        deleteTodo(li);
    });
}
createTodo();
function deleteTodo(element) {
    element.addEventListener("click", () => {
        var _a;
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    });
}
//# sourceMappingURL=todolist.js.map