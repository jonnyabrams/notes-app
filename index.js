const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const model = new NotesModel();
const view = new NotesView(model);

model.addNote("complete this challenge by the end of today and go to a pub");
model.addNote("hi hi pp");
view.displayNotes();