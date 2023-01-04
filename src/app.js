export const startApp = (startingIdeas) => {
  let ideas = startingIdeas;

  updateIdeas = (value) => {
    ideas = value;
    return ideas;
  }

  const addNewIdea = (newIdea) => {
    return updateIdeas([...ideas, {...newIdea, favorited: false }]);
  }

  return {
    updateIdeas,
    addNewIdea
  }
}