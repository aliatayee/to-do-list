/**
 * @jest-environment jsdom
 */
import {
  editTasks,
} from '../modules/functionalities.js';
import { clearAll, toggle } from '../modules/interactiveList.js';
import Task from '../modules/toDoTask.js';

const Tasks = new Task();

document.body.innerHTML = '<ul class="nav__items"></ul>';
describe('Test Edit task ', () => {
  window.localStorage = Storage.prototype;

  test('Edit task', () => {
    const task = {
      index: 0,
      description: 'This is Task 0',
      completed: false,
    };
    Tasks.addTask(task);
    editTasks('Edit Task', Tasks.tasksArray, Tasks.addTask, 0);
    const newTask = Tasks.tasksArray.find((task) => task.index === 0);
    expect(newTask.description).toEqual('Edit Task');
  });
});

