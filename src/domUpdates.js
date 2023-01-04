const ideasDisplay = document.querySelector('.ideas-container')
import starImg from '../assets/star.svg';
import starActiveImg from '../assets/star-active.svg'
import deleteImg from '../assets/delete.svg';

export const displayIdeas = ideas => {
  ideasDisplay.innerHTML = '';
  ideas.forEach(idea => {
    const { title, body, favorited } = idea;
    ideasDisplay.innerHTML += `
    <section class='idea-card'>
      <header class='card-header'>
        <img src=${favorited ? starActiveMg : starImg} />
        <img src=${deleteImg}" alt="Delete icon"/>
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
}