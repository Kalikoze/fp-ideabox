import 'normalize.css';
import { startApp } from './app';

const title = document.querySelector('#title');
const body = document.querySelector('#body');
const saveBtn = document.querySelector('button[type="submit');
const showStarred = document.querySelector('showStars');
const search = document.querySelector('#search');

const app = startApp([]);

const saveNewIdea = (e) => {
  e.preventDefault();

  const ideas = app.addNewIdea({ title: title.value, body: body.value });
  console.log(ideas)
}


saveBtn.addEventListener('click', saveNewIdea);