import 'normalize.css';
import startApp from './startApp';
import { displayIdeas, clearForm, detectInput } from './domUpdates';

const title = document.querySelector('#title');
const body = document.querySelector('#body');
const saveBtn = document.querySelector('button[type="submit');
const showStarred = document.querySelector('#showStars');
const search = document.querySelector('#search');
const ideasDisplay = document.querySelector('.ideas-container');


const app = startApp([]);

const saveNewIdea = (e) => {
  const ideas = app.addNewIdea({ 
    id: JSON.stringify(Date.now()), 
    title: title.value, 
    body: body.value, 
    favorited: false 
  });
  e.preventDefault();
  displayIdeas(ideas)
  clearForm();
}

const determineAction = (e) => {
  const card = e.target.closest('.idea-card');
  if (e.target.className === 'delete') {
    const ideas = app.removeIdea(card.dataset.id);
    displayIdeas(ideas);
  } else if (e.target.className === 'favorite') {
    const ideas = app.updateFavorite(card.dataset.id);
    displayIdeas(ideas);
  }
}

const determineIdeas = () => {
  app.updateDisplay();
  const showFavorites = app.getDisplay();
  const ideasShown = showFavorites ? app.getFavorites() : app.getIdeas();
  showStarred.innerText = showFavorites ? 'Show All Ideas' : 'Show Starred Ideas';
  displayIdeas(ideasShown)
}

const filterByInput = e => {
  const ideas = app.filterIdeas(e.target.value);
  displayIdeas(ideas);
}

saveBtn.addEventListener('click', saveNewIdea);
title.addEventListener('input', detectInput);
body.addEventListener('input', detectInput);
ideasDisplay.addEventListener('click', determineAction);
showStarred.addEventListener('click', determineIdeas);
search.addEventListener('input', filterByInput);


