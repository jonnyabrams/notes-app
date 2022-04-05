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
  const button = document.querySelector('#add-note-button');
  const input = document.querySelector('#add-note');

  it('displays two notes', () => {
    model.addNote('hi pp')
    model.addNote('bye pp')
    view.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })

  it('adds a note from user input', () => {
    input.value = "Hello pp";
    button.click();
    expect(document.querySelectorAll('div.note')[2].innerText).toEqual('Hello pp');
  })

  it('displays the right number of notes', () => {
    model.addNote('hi hi again')
    view.displayNotes()
    view.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(4);
  })
})