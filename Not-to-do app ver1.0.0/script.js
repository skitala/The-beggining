const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');
const header = document.querySelector('h1');
const container = document.querySelector('container');
const savedTasks = [];
let idx = 0;

addBtn.addEventListener('click', () => {
  let task = input.value;
  if (task === '') {
    list.innerHTML += '';
  } else {
    list.innerHTML += `<li class="list-item[${idx}]" name="task">${task} <button class="delete-task id="delete"><i class="fa-solid fa-delete-left fa-3x"></i></button><button class="done" id="done"><i class="fa-solid fa-square-check fa-3x"></i></button><button class="failed" id="failed"><i class="fa-solid fa-square-minus fa-3x"></i></button></li>`;
    idx++;
    // savedTasks.push(task);
    localStorage.setItem(`task${idx}`, JSON.stringify(task));
  }
  deleteTask();

  const markBtn = [...document.querySelectorAll('.done')];
  markBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      // let taskCompleted = this.parentNode.innerText.split(' ');
      // taskCompleted = taskCompleted.slice(0, taskCompleted.length - 4).join(' ');

      this.parentNode.style.backgroundColor = 'green';
    });
  });
  const failBtn = [...document.querySelectorAll('.failed')];
  failBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      this.parentNode.style.backgroundColor = 'crimson';
    });
  });
  console.log(idx);
});

function deleteTask() {
  const delBtn = [...document.querySelectorAll('.delete-task')];

  delBtn.forEach((btnDel) => {
    btnDel.addEventListener('click', (e) => {
      e.target.parentNode.parentNode.remove();
      localStorage.removeItem(`task${idx}`);
      idx--;
    });
  });
}

deleteTask();
function getFromStorage() {
  // let task = input.value;
  // idx++;
  // let saved = JSON.parse(localStorage.getItem(`task${idx}`));
  list.innerHTML = '';
  let savedArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let saved = JSON.parse(localStorage.getItem(key));
    console.log([saved]);

    // [saved].forEach((task) => savedArr.push(task));
    savedArr.push(saved);
    // savedArr.push([...saved].join(''));
    // console.log(savedArr);
    idx++;
    [saved].forEach((task) => {
      const savedTask = document.createElement('li');
      savedTask.setAttribute('name', 'task');
      savedTask.classList.add(`list-item[${idx}]`);
      savedTask.innerHTML += ` ${task} <button class="delete-task id="delete"><i class="fa-solid fa-delete-left fa-3x"></i></button><button class="done" id="done"><i class="fa-solid fa-square-check fa-3x"></i></button><button class="failed" id="failed"><i class="fa-solid fa-square-minus fa-3x"></i></button>`;
      list.appendChild(savedTask);
      deleteTask();
    });
  }

  const markBtn = [...document.querySelectorAll('.done')];
  markBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      this.parentNode.style.backgroundColor = 'green';
    });
  });
  const failBtn = [...document.querySelectorAll('.failed')];
  failBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      this.parentNode.style.backgroundColor = 'crimson';
    });
  });
  deleteTask();
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length > 0) {
    getFromStorage();

    // getFromStorage();
  } else {
    list.innerHTML = '';
  }
});
