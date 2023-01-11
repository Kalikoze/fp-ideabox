const startApp = (startingIdeas) => {
  let ideas = startingIdeas;
  let showFavorites = false;

 const getIdeas = () => {
    return ideas;
  }

  const updateIdeas = value => {
    ideas = value;
    return ideas;
  }

  const getDisplay = () => {
    return showFavorites
  }

  const updateDisplay = () => {
    showFavorites = !showFavorites
  }

  const addNewIdea = newIdea => {
    return updateIdeas([...ideas, {...newIdea }]);
  }

  const removeIdea = id => {
  return updateIdeas(getIdeas().filter(idea => idea.id !== id));
  }

  const updateFavorite = id => {
     return updateIdeas(getIdeas().map(idea => {
      const { favorited } = idea;
      return {
        ...idea,
        favorited: idea.id === id ? !favorited : favorited
      }
    }));
  }

  const getFavorites = () => {
    return getIdeas().filter(idea => idea.favorited);
  }

  const filterIdeas = value => {
    const ideasToFilter = getDisplay() ? getFavorites() : getIdeas();
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

module.exports = startApp;