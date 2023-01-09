export const startApp = (startingIdeas) => {
  let ideas = startingIdeas;

  updateIdeas = value => {
    ideas = value;
    return ideas;
  }

  getIdeas = () => {
    return ideas;
  }

  const addNewIdea = newIdea => {
    return updateIdeas([...ideas, {...newIdea, favorited: false }]);
  }

  const removeIdea = id => {
  return updateIdeas(getIdeas().filter(idea => idea.id !== id));
  }

  const updateFavorite = id => {
     return updateIdeas(getIdeas().map(idea => {
      if (idea.id === id) {
        idea.favorited = !idea.favorited
      }
      return idea;
    }));
  }

  return {
    updateIdeas,
    addNewIdea,
    removeIdea,
    updateFavorite
  }
}