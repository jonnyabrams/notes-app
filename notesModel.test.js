const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  const model = new NotesModel();

  it('starts with an empty array', () => {
    expect(model.getNotes()).toEqual([]);
  })

  it('adds a note', () => {
    model.addNote('Eat ramen');
    expect(model.getNotes()).toEqual(['Eat ramen']);
  })

  it('stores multiple notes', () => {
    model.addNote('Go a little crazy');
    expect(model.getNotes()).toEqual(['Eat ramen', 'Go a little crazy']);
  })

  it('resets the notes', () => {
    model.reset()
    expect(model.getNotes()).toEqual([]);
  })
})
