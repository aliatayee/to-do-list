import './style.css';

const projects = [
  {
    description: 'this is discription 1',
    completed: true,
    index: 1,
  },
  {
    description: 'this is discription 2',
    completed: false,
    index: 2,
  },
  {
    description: 'this is discription 3',
    completed: true,
    index: 3,
  },

];

window.onload = () => {
  projects.forEach((project) => {
    document.getElementById('list__item').innerHTML
            += `<div class="item__container">
                    <div class="item">
                    <div><input type="checkbox" class="checkbox"></div>
                      <h3 class="list__description">${project.description}</h3>
                        
                      </div>
                      <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                    </div>
        `;
  });
};
