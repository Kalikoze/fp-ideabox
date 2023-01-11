const startApp = require('../src/startApp');
const { expect } = require('chai');
const mockIdeas = require('./mockIdeas');

describe('app', () => {
  let startingApp
  let appWithIdeas

  beforeEach(() => {
    startingApp = startApp([]);
    appWithIdeas = startApp(mockIdeas)
  });

  it('should return back my original ideas', () => {
    expect(startingApp.getIdeas()).to.deep.equal([]);
    expect(appWithIdeas.getIdeas()).to.deep.equal(mockIdeas);
  });

  it('should be able to update ideas with a new array', () => {
    const newIdeas = [
      {
        id: 1,
        title: 'Test Sample',
        body: 'Description Here',
        favorited: false
      }
    ]

    expect(startingApp.updateIdeas(newIdeas)).to.deep.equal(newIdeas);
    expect(appWithIdeas.updateIdeas(newIdeas)).to.deep.equal(newIdeas);
  });

  it('should be able to update ideas and get the same ideas', () => {
    const newIdeas = [
      {
        id: 1,
        title: 'Test Sample',
        body: 'Description Here',
        favorited: false
      }
    ]

    startingApp.updateIdeas(newIdeas);
    appWithIdeas.updateIdeas(newIdeas);

    expect(startingApp.getIdeas()).to.deep.equal(newIdeas);
    expect(appWithIdeas.getIdeas()).to.deep.equal(newIdeas);
  });

  it('should be able to determine all ideas or only favorited ideas should be displayed', () => {
    expect(startingApp.getDisplay()).to.equal(false);
    expect(appWithIdeas.getDisplay()).to.equal(false);
  });

  it('should be able to update whether all ideas or only favorited ideas are displayed', () => {
    expect(startingApp.getDisplay()).to.equal(false);
    expect(appWithIdeas.getDisplay()).to.equal(false);

    startingApp.updateDisplay();
    appWithIdeas.updateDisplay();

    expect(startingApp.getDisplay()).to.equal(true);
    expect(appWithIdeas.getDisplay()).to.equal(true);
  });

  it('should be able to add a new idea to our ideas array', () => {
    const newIdea = {
      id: 5,
      title: 'Learn how to snowboard',
      body: 'Try not to break your bones!',
      favorited: false
    }

    expect(startingApp.addNewIdea(newIdea)).to.deep.equal([newIdea]);
    expect(appWithIdeas.addNewIdea(newIdea)).to.deep.equal([...mockIdeas, newIdea]);
  });

  it('should be able to remove an idea from our ideas array', () => {
    const expectedIdeas = [...mockIdeas.slice(0, 1), ...mockIdeas.slice(2)]
    expect(appWithIdeas.removeIdea(2)).to.deep.equal(expectedIdeas)
  });

  it('should be able to update an idea to be favorited', () => {
    expect(appWithIdeas.getIdeas()[0].favorited).to.equal(false);

    appWithIdeas.updateFavorite(1);

    expect(appWithIdeas.getIdeas()[0].favorited).to.equal(true);
  });

  it('should be able to update an idea to no longer be favorited', () => {
    expect(appWithIdeas.getIdeas()[1].favorited).to.equal(true);

    appWithIdeas.updateFavorite(2);

    expect(appWithIdeas.getIdeas()[1].favorited).to.equal(false);
  });

  it('should be able to return only my favorited ideas', () => {
    const expectedIdeas = [...mockIdeas.slice(1, 3)];

    expect(appWithIdeas.getFavorites()).to.deep.equal(expectedIdeas);
  });

  it('should be able to filter through all of a user\'s ideas', () => {
    const expectedIdeas = [...mockIdeas.slice(0, 1), ...mockIdeas.slice(2, 3)]

    expect(appWithIdeas.filterIdeas('weight')).to.deep.equal(expectedIdeas);
  });

  it('should be able to filter through a user\'s ideas successfully even when caps don\'t match', () => {
    const expectedIdeas = [...mockIdeas.slice(0, 1), ...mockIdeas.slice(2, 3)]

    expect(appWithIdeas.filterIdeas('WEIGHT')).to.deep.equal(expectedIdeas);
  });

  it('should be able to filter only through a user\'s favorited ideas', () => {
    const expectedIdeas = mockIdeas.slice(2, 3);
    appWithIdeas.updateDisplay();

    expect(appWithIdeas.getDisplay()).to.equal(true);
    expect(appWithIdeas.filterIdeas('weight')).to.deep.equal(expectedIdeas)
  })
});