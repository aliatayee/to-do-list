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

export default addTodo;