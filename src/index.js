import './style.css';
import Task from './modules/toDoTask.js';

const todoItemsList = document.querySelector('#list_navv');
const clearAllBtn = document.querySelector('#clearAllBTN');
const task = new Task();
task.render();
task.addTask();

/* eslint eqeqeq: 0 */
const toggle = (index) => {
  task.tasksArray.forEach((item) => {
    if (item.index == index) {
      item.completed = !item.completed;
    }
  });
  task.addTask();
  window.location.reload();
};

const clearAll = () => {
  task.tasksArray.forEach((data) => {
    if (data.completed === true) {
      task.tasksArray = task.tasksArray.filter((item) => item.index != data.index);
    }
  });
  task.tasksArray.forEach((task, i) => {
    task.index = i;
  });
  task.addTask();
  window.location.reload();
};

todoItemsList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
});
clearAllBtn.addEventListener('click', clearAll);
