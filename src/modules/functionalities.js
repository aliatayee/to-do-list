let deletedTask = false;

const displayTasks = (tasks, container) => {
  container.innerHTML = '';
  tasks.slice().reverse().forEach((task) => {
    const checked = task.completed ? 'checked' : null;
    const taskElement = `<li data-id="${task.index}">
                    <div class="list__item" id="list_data" data-key="${task.index}">
                        <input class="checkBox" ${checked} type="checkbox" id=${task.index}>
                        <input type="text" id="${task.index}" class="${checked}" value="${task.description}">
                        <button type="button"  class="btn" data-id="${task.index}">
                            <i class="icon icon--dots"></i>
                            <i class="icon icon--trash hidden"></i>
                        </button>
                    </div>
                </li>`;
    container.innerHTML += taskElement;
  });
};

// Remove Task Functionality
const removeTask = (taskArray, addTask, id) => {
  const index = parseInt(id, 10);
  taskArray.splice(index, 1);
  taskArray.forEach((task, i) => {
    task.index = i;
  });
  addTask();
};

const deletTask = () => {
  const delIcons = document.querySelectorAll('.icon--trash');
  delIcons.forEach((delIcon) => {
    delIcon.addEventListener('mousedown', () => {
      deletedTask = true;
    });
  });
};

// Edit Task Functionality
const editTasks = (newDesc, taskArray, addTask, index) => {
  taskArray[index].description = newDesc;
  addTask();
};

// Click Task Event Handler
const inputEvents = (tasks, addTask, listContainer, render) => {
  const inputs = listContainer.querySelectorAll('input[type="text"]');
  let newDesc = '';

  inputs.forEach((item) => {
    item.addEventListener('focusin', () => {
      const li = item.parentElement;
      const iconDots = li.querySelector('.icon--dots');
      const iconTrash = li.querySelector('.icon--trash');
      iconTrash.classList.remove('hidden');
      iconDots.classList.add('hidden');
      li.classList.add('active');
      item.classList.add('active');
      item.addEventListener('input', () => {
        newDesc = item.value;
      });
    });

    item.addEventListener('focusout', () => {
      const li = item.parentElement.parentNode;
      const div = li.querySelector('.list__item');
      const iconDots = li.querySelector('.icon--dots');
      const iconTrash = li.querySelector('.icon--trash');
      iconTrash.classList.add('hidden');
      iconDots.classList.remove('hidden');
      div.classList.remove('active');
      item.classList.remove('active');
      const index = item.getAttribute('id');
      if (!deletedTask) {
        if (newDesc.trim()) {
          editTasks(newDesc.trim(), tasks, addTask, index);
          addTask();
        }
      } else {
        removeTask(tasks, addTask, index);
        addTask();
        render();
      }

      newDesc = '';
      deletedTask = false;
    });
  });
};

export {
  displayTasks, inputEvents, editTasks, deletTask, removeTask,
};
