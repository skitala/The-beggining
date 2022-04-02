const createBtn = document.getElementById('create-note');
const clearBtn = document.getElementById('clear-all');
const body = document.querySelector('body');
const savedNotes = [];
createBtn.addEventListener('click', note);

function note() {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `<textarea></textarea>
  <button class="del-note"><i class="fas fa-minus"></i></button>
  <button class="save-and-minimize"><i class="fas fa-edit"></i></button>`;
  const text = note.querySelector('textarea').value;
  // Adding delete functionality
  const delBtn = note.querySelector('.del-note');
  body.appendChild(note);
  delBtn.addEventListener('click', function () {
    this.parentNode.remove();
    // localStorage.removeItem('notes');
  });

  // Adding clear all functionality
  const notes = [...document.querySelectorAll('.note')];
  clearBtn.addEventListener('click', () => {
    const notes = [...document.querySelectorAll('.note')];
    notes.forEach((note) => {
      note.remove();
      localStorage.removeItem('notes');
    });
  });

  // Saving to LS
  const saveBtn = note.querySelector('.save-and-minimize');
  saveBtn.addEventListener('click', function () {
    const text = note.querySelector('textarea').value;

    savedNotes.push(text);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    console.log(savedNotes);
  });
}
// note();
function getFromStorage() {
  let saved = JSON.parse(localStorage.getItem('notes'));
  const note = document.createElement('div');
  note.classList.add('note');
  const text = note.querySelector('textarea');

  note.innerHTML = `<textarea>${saved}</textarea>
  <button class="del-note"><i class="fas fa-minus"></i></button>
  <button class="save-and-minimize"><i class="fas fa-edit"></i></button>`;
  const delBtn = note.querySelector('.del-note');

  body.appendChild(note);

  delBtn.addEventListener('click', function () {
    this.parentNode.remove();
    localStorage.removeItem('notes');
  });

  const notes = [...document.querySelectorAll('.note')];
  clearBtn.addEventListener('click', () => {
    const notes = [...document.querySelectorAll('.note')];
    notes.forEach((note) => {
      note.remove();
      localStorage.removeItem('notes');
    });
  });
}
if (localStorage.getItem('notes') !== null) {
  getFromStorage();
}
