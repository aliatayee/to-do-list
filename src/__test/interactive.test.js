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

describe('Test Mark task as completed ', () => {
  window.localStorage = Storage.prototype;
  test('Edit Task Mark as completed', () => {
    const task = {
      index: 1,
      description: 'This is Task 1',
      completed: false,
    };
    Tasks.addTask(task);
    toggle(task.index, Tasks);
    const newTask = Tasks.tasksArray.find((task) => task.index === 1);
    expect(newTask.completed).toBeTruthy();
  });

  test('Test Clear All Completed Tasks', () => {
    const task2 = {
      index: 2,
      description: 'This is Task 2',
      completed: true,
    };
    const task3 = {
      index: 3,
      description: 'This is Task 3',
      completed: true,
    };
    const task4 = {
      index: 4,
      description: 'This is Task 4',
      completed: true,
    };
    Tasks.addTask(task2);
    Tasks.addTask(task3);
    Tasks.addTask(task4);
    clearAll(Tasks);
    const tasks = JSON.parse(localStorage.getItem('todos'));
    expect(tasks.length).toEqual(1);
  });
});
