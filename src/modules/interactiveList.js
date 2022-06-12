
/* eslint eqeqeq: 0 */
const toggle = (index, task) => {
  task.tasksArray.forEach((item) => {
    if (item.index == index) {
      item.completed = !item.completed;
    }
  });
  task.addTask();
};

const clearAll = (task) => {
  task.tasksArray.forEach((data) => {
    if (data.completed === true) {
      task.tasksArray = task.tasksArray.filter((item) => item.index != data.index);
    }
  });
  task.tasksArray.forEach((task1, i) => {
    task1.index = i;
  });
  task.addTask();
};

export { toggle, clearAll };