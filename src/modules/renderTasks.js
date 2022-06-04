const todoItemsList = document.querySelector('#list__item');
const todoList = document.querySelector('#todo__list');
const renderTodos = (todos) => {
  todoItemsList.innerHTML = '';

  todos.slice().reverse().forEach((item) => {
    const checked = item.completed ? 'checked' : null;

    const li = document.createElement('li');

    li.setAttribute('class', 'item__container');

    li.setAttribute('data-key', item.index);
    if (item.completed === true) {
      li.classList.add('checked');
    }
 
    li.innerHTML = `
                        <input type="checkbox" class="checkbox" ${checked}>
                          <input type="text" id="todo__list" value="${item.description}" class="list__description input__list todo__list ${checked}">
                          <button class="delete-button fa-solid fa-trash" type="button" ></button>
        `;

    todoItemsList.append(li);
  });
};

export default renderTodos;