import Form from './inputTaskHandle.js';

import {
  displayTasks as Display,
  inputEvents as Edit,
  deletTask as Delete,
} from './functionalities.js';

class Task {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('todos')) || [];
    this.listContainer = document.querySelector('.nav__items');
  }

  render = () => {
    Form(this.addTask, this.tasksArray,this.render);
    Display(this.tasksArray, this.listContainer);
    Edit(this.tasksArray, this.addTask,this.listContainer, this.render);
    Delete(this.tasksArray, this.addTask);
  };

  addTask = (task) => {
    if (task) {
      this.tasksArray.push(task);
      localStorage.setItem('todos', JSON.stringify(this.tasksArray));
    } else {
     localStorage.setItem('todos', JSON.stringify(this.tasksArray));
    }
  };
}

export default Task;
