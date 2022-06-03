import addToLocalStorage from './localStorage.js';
import renderTodos from './renderTasks.js';

const taskInput = document.querySelector('.input__list');
const addTodo = (item, todos) => {
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
/* eslint eqeqeq: 0 */
const deleteTodo = (index, todos) => {
  todos = todos.filter((item) => item.index != index);
  todos.forEach((task, i) => {
    task.index = i;
  });

  addToLocalStorage(todos);
};

const editTodo = (index, val, todos) => {
  todos.forEach((item) => {
    if (item.index == index) {
      item.description = val;
    }
  });
  addToLocalStorage(todos);
};

export { deleteTodo, editTodo, addTodo };