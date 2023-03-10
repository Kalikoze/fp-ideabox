import starImg from '../../assets/star.svg';
import starActiveImg from '../../assets/star-active.svg'
import deleteImg from '../../assets/delete.svg';

const saveBtn = document.querySelector('button[type="submit');
const ideasDisplay = document.querySelector('.ideas-container');
const title = document.querySelector('#title');
const body = document.querySelector('#body');

export const displayIdeas = ideas => {
  ideasDisplay.innerHTML = '';
  ideas.forEach(idea => {
    const { id, title, body, favorited } = idea;
    ideasDisplay.innerHTML += `
    <section class='idea-card' data-id=${id}>
      <header class='card-header'>
        <img class='favorite' src=${favorited ? starActiveImg : starImg} alt='Favorite icon' />
        <img class='delete' src=${deleteImg}" alt='Delete icon'/>
       </header>
       <main>
        <p>${title}<p>
        <p>${body}<p/>
       </main>
       <footer>
       </footer>
    </section>
  `;
  });
}

export const clearForm = () => {
  title.value = '';
  body.value = '';
  detectInput();
}

export const detectInput = () => {
  saveBtn.disabled = !(title.value && body.value);
}