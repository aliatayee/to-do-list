import './style.css';

const taskForm = document.querySelector('.list__form');
const taskInput = document.querySelector('.input__list');
const todoItemsList = document.querySelector('#list__item');

let todos = [];

const renderTodos = (todos) => {
  todoItemsList.innerHTML = '';

  todos.slice().reverse().forEach((item) => {
    const checked = item.completed ? 'checked' : null;

    const li = document.createElement('li');

    li.setAttribute('class', 'item__container');

    li.setAttribute('data-key', item.index);
    if (item.completed === true) {
      li.classList.add('checked');
    }
    li.innerHTML = `
                      <input type="checkbox" class="checkbox ${checked}" ${checked}>
                        <input type="text" value="${item.description}" class="list__description input__list todo__list">
                        <button class="delete-button fa-solid fa-trash" type="button" ></button>
      `;

    todoItemsList.append(li);
  });
};

const addTodo = (item) => {
  if (item !== '') {
    const todo = {
      index: todos.length,
      description: item,
      completed: false,
    };

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    taskInput.value = '';
  }
};

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(taskInput.value);
});

const addToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));

  renderTodos(todos);
};

const getFromLocalStorage = () => {
  const reference = localStorage.getItem('todos');

  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
};
/* eslint eqeqeq: 0 */
const toggle = (index) => {
  todos.forEach((item) => {
    if (item.index == index) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
};

const editTodo = (index, val) => {
  todos.forEach((item) => {
    if (item.index == index) {
      item.description = val;
    }
  });
  addToLocalStorage(todos);
};

const deleteTodo = (index) => {
  todos = todos.filter((item) => item.index != index);
  todos.forEach((task, i) => {
    task.index = i;
  });

  addToLocalStorage(todos);
};

const clearAll = () => {

};

getFromLocalStorage();

todoItemsList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

todoItemsList.addEventListener('focusout', (event) => {
  if (event.target.type === 'text') {
    editTodo(event.target.parentElement.getAttribute('data-key'), event.target.value);
  }

  if (event.target.type === 'text') {
    editTodo(event.target.parentElement.getAttribute('data-key'), event.target.value);
  }

  if (event.target.type === 'text') {
    editTodo(event.target.parentElement.getAttribute('data-key'), event.target.value);
  }

  if (event.target.type === 'text') {
    editTodo(event.target.parentElement.getAttribute('data-key'), event.target.value);
  }

  if (event.target.type === 'text') {
    editTodo(event.target.parentElement.getAttribute('data-key'), event.target.value);
  }
});
document.querySelector('.clear__btn').addEventListener('click', clearAll);