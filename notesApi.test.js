const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  it('calls fetch and loads repo information', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      name: 'pp',
      description: 'big pp'
    }));

    api.loadNotes('pp', (repoInfo) => {
      expect(repoInfo.description).toBe('big pp');
    });
  });
});