const NotesModel = require("./notesModel");

class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector("#main-container");
    this.model = model;
    this.button = document.querySelector('#add-note-button');
    this.input = document.querySelector('#add-note');
    this.button.addEventListener('click', () => {
      this.addNote() 
    })
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove());
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      let noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });
  }

  addNote() {
    this.model.addNote(this.input.value);
    this.input.value = ''
    this.displayNotes();
  }

}

module.exports = NotesView;
