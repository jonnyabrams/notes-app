/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const View = require('./notesView')

describe('Notes view', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  const model = new NotesModel();
  const view = new View(model);

  it('displays two notes', () => {
    model.addNote('hi pp')
    model.addNote('bye pp')
    view.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })
})