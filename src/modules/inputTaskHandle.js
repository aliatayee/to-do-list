const formAction = (addTask, taskArray) => {
  const form = document.querySelector('.add__task');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const [desc] = form.elements;
    if (desc.value.trim()) {
      const taskData = {
        description: desc.value.trim(),
        completed: false,
        index: taskArray.length,
      };
      addTask(taskData);
      desc.value = '';
      window.location.reload();
    }
  });
};

export default formAction;
