import 'normalize.css';
import { startApp, removeIdea } from './app';
import { displayIdeas, clearForm, detectInput } from './domUpdates';

const title = document.querySelector('#title');
const body = document.querySelector('#body');
const saveBtn = document.querySelector('button[type="submit');
const showStarred = document.querySelector('showStars');
const search = document.querySelector('#search');
const ideasDisplay = document.querySelector('.ideas-container');


const app = startApp([]);

const saveNewIdea = (e) => {
  const ideas = app.addNewIdea({ id: JSON.stringify(Date.now()), title: title.value, body: body.value });
  e.preventDefault();
  displayIdeas(ideas)
  clearForm();
}

const determineAction = (e) => {
  if (e.target.className === 'delete') {
    const card = e.target.closest('.idea-card');
    const ideas = app.removeIdea(card.dataset.id);
    displayIdeas(ideas);
  } else if (e.target.className === 'favorite') {
    const card = e.target.closest('.idea-card');
    const ideas = app.updateFavorite(card.dataset.id);
    displayIdeas(ideas);
  }
}

saveBtn.addEventListener('click', saveNewIdea);
title.addEventListener('input', detectInput);
body.addEventListener('input', detectInput);
ideasDisplay.addEventListener('click', determineAction);


