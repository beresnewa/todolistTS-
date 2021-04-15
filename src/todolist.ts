let todoList: Array<string> = ['Вымыть кухню', 'Пойти в театр'];

const ul: Element = document.querySelector('#todos')!

function createTodo(): void {
  const addBtn: Element = document.querySelector('#add')!
  addBtn.addEventListener('click', () => {
    const input: HTMLInputElement = document.querySelector('input[type="text"]')!
    const newTodo: string = input.value;
    todoList.push(newTodo);

    const li: HTMLElement = document.createElement('li');
    li.textContent = newTodo
    ul.appendChild(li)

    const deleteBtn: HTMLElement = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.setAttribute('id', 'deleteBtn');
    li.appendChild(deleteBtn);
    deleteTodo(li)
  })
}
createTodo();

function deleteTodo(element: HTMLElement): void {
  element.addEventListener("click", () => {
    element.parentNode?.removeChild(element)
  });
}


