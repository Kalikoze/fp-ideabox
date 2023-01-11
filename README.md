# FP IdeaBox

## Setup Instructions
1. Clone down repo
2. `cd` into the directory
3. `npm i` to install dependencies
4. `npm start` to start application.
5. Visit `localhost:1234` to see app.

## Testing Instructions
Run similar steps above including:
1. Cloning down and installing dependencies
2. `npm t` to run the tests.

## Learning Goals
This project was used as an opportunity to experiment with different functional programming principles rather than that OOP principals we've been studying/teaching at the Turing School of Software & Design.  The below section is a reflection of what principles I was able to incorporate into a stand **IdeaBox** project.

## Examples of Functional Programming:

### Pure Functions
I did my best to incorporate much of the logic into pure functions.  Whether it was adding ideas, removing them, favoriting them, I made sure to keep it pure by making sure it didn't have any side effects and was totally determined by its input and always returned the same results.  You can see a couple of examples below:

```js
 const addNewIdea = newIdea => {
    return updateIdeas([...ideas, {...newIdea }]);
  }

  const removeIdea = id => {
  return updateIdeas(getIdeas().filter(idea => idea.id !== id));
  }
```

I made to check that these worked the same regardless of the input through tests after implementing the core functionality.

### Higher Order Functions
I most commonly used the built in array prototype methods as my higher order functions.  One example of this was when I used to `.filter()` to filter out through ideas based on a user's input.  I passed an anonymous function into `.filter()` once I had determined if I was searching through all of my ideas or only the favorites, and then checking to see if any of the content included the input.  This example can be seen below:

```js
 const filterIdeas = value => {
    const ideasToFilter = getDisplay() ? getFavorites() : getIdeas();
    return ideasToFilter.filter(idea => {
      const { title, body } = idea;
      return title.toUpperCase().includes(value.toUpperCase()) || body.toUpperCase().includes(value.toUpperCase());
    })
  }
```

### Closures
Much of the logic of my application is stored within a closure.  I did this purposely to keep data out of the global state including the ideas and what was being displayed and returned an object that had multiple functions pertaining to all of the business logic.  This can be seen below:

```js
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

  //...more functions below

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
```

## Data Model vs DOM
I separated most of my logic from the DOM using a closure for my application logic inside of the `startApp.js` file.  From there, I separated much of my DOM logic into 2 files including the `main.js` and `domUpdates.js` file.  I initially tried keeping all of my DOM logic in the `domUpdates.js` file, but ran into some issues with needing querySelectors in both places.  I believe this might have something to do with Parcel, but for some reason my global querySelectors were not accessible in both files even after loading them first.  If I were to do this again, I'd either do it without Parcel or I'd keep all of my DOM logic within the `main.js` file to remove unnecessary repetition.

## Testing
I tested my business logic in the `startApp.js` file using 2 sets of data.  (*one being an empty array in case a user is just starting, and another starting with some ideas already existing*)  Although I didn't quite get to implementing localStorage, my tests and app logic is setup to be dynamic and handle that case.  If I had more time, I would have tested my DOM logic using Cypress.
