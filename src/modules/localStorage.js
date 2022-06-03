import renderTodos from './renderTasks.js';

const addToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));

  renderTodos(todos);
};

export default addToLocalStorage;