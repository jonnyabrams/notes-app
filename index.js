const NotesModel = require('./notesModel')
const model = new NotesModel
model.addNote('complete this challenge by the end of today and go to a pub')
console.log('The notes app is running');
console.log(model.getNotes())