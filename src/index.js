import './style.css';
import addTodo from './modules/addTask.js';
import renderTodos from './modules/renderTasks.js';
import addToLocalStorage from './modules/localStorage.js';

const taskForm = document.querySelector('.list__form');
const taskInput = document.querySelector('.input__list');
const todoItemsList = document.querySelector('#list__item');
const ClearAllBtn = document.querySelector('.clear__btn');
let todos = [];

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(taskInput.value, todos);
});

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

/* eslint eqeqeq: 0 */
const deleteTodo = (index) => {
  todos = todos.filter((item) => item.index != index);
  todos.forEach((task, i) => {
    task.index = i;
  });

  addToLocalStorage(todos);
};

const clearAll = () => {
  todos.forEach((task) => {
    if (task.completed === true) {
      todos = todos.filter((item) => item.index != task.index);
    }
  });
  todos.forEach((task, i) => {
    task.index = i;
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

getFromLocalStorage();

todoItemsList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
});
todoItemsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

todoItemsList.addEventListener('focusout', (event) => {
  if (event.target.type === 'text') {
    editTodo(event.target.parentElement.getAttribute('data-key'), event.target.value);
  }
});
ClearAllBtn.addEventListener('click', clearAll);
