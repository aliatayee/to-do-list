import addToLocalStorage from './localStorage.js';

/* eslint eqeqeq: 0 */
const toggle = (index, todos) => {
  todos.forEach((item) => {
    if (item.index == index) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
};

const clearAll = (todos) => {
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

export { clearAll, toggle };