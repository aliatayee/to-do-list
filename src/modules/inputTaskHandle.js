// Getting Input Values and Store to Localstorage
const formAction = (addTask, taskArray, render) => {
  const form = document.querySelector('.add__task');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const [desc] = form.elements;
    if (desc.value.trim()) {
      const taskArr = JSON.parse(localStorage.getItem('todos')) || [];
      const taskData = {
        description: desc.value.trim(),
        completed: false,
        index: taskArr.length,
      };
      addTask(taskData);
      desc.value = '';
      render();
    }
  });
};

export default formAction;
