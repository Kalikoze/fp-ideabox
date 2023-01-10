export const startApp = (startingIdeas) => {
  let ideas = startingIdeas;
  let showFavorites = true;

  getIdeas = () => {
    return ideas;
  }

  updateIdeas = value => {
    ideas = value;
    return ideas;
  }

  getDisplay = () => {
    return showFavorites
  }

  updateDisplay = () => {
    showFavorites = !showFavorites
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

  const getFavorites = () => {
    return getIdeas().filter(idea => idea.favorited);
  }

  const filterIdeas = value => {
    const ideasToFilter = getDisplay() ? getIdeas() : getFavorites();
    return ideasToFilter.filter(idea => {
      const { title, body } = idea;
      return title.toUpperCase().includes(value.toUpperCase()) || body.toUpperCase().includes(value.toUpperCase());
    })
  }

  return {
    getIdeas,
    updateIdeas,
    getDisplay,
    updateDisplay,
    addNewIdea,
    removeIdea,
    updateFavorite,
    getFavorites,
    filterIdeas
  }
}