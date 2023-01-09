import 'normalize.css';
import { startApp } from './app';
import { displayIdeas, clearForm, detectInput } from './domUpdates';

const title = document.querySelector('#title');
const body = document.querySelector('#body');
const saveBtn = document.querySelector('button[type="submit');
const showStarred = document.querySelector('showStars');
const search = document.querySelector('#search');

const app = startApp([]);

const saveNewIdea = (e) => {
  const ideas = app.addNewIdea({ title: title.value, body: body.value });
  e.preventDefault();
  displayIdeas(ideas)
  clearForm();
}

saveBtn.addEventListener('click', saveNewIdea);
title.addEventListener('input', detectInput);
body.addEventListener('input', detectInput);
