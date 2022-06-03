import './style.css';
import { deleteTodo, editTodo, addTodo } from './modules/functionalities.js';
import renderTodos from './modules/renderTasks.js';
import addToLocalStorage from './modules/localStorage.js';

const taskForm = document.querySelector('.list__form');
const taskInput = document.querySelector('.input__list');
const todoItemsList = document.querySelector('#list__item');

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

getFromLocalStorage();

todoItemsList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'), todos);
  }
});

todoItemsList.addEventListener('focusout', (event) => {
  if (event.target.type === 'text') {
    editTodo(event.target.parentElement.getAttribute('data-key'), event.target.value, todos);
  }
});
