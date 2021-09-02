import img1 from 'url:./img/1.PNG';
import img2 from 'url:./img/2.PNG';

class app {
  _parentElement = document.querySelector('.container');
  _data = [
    {
      img: `${img1}`,
      source: 'https://rohit-quiz-game.netlify.app/',
      title: 'Quiz-game',
    },
    {
      img: `${img2}`,
      source: 'https://rohit-movie-finder.netlify.app/',
      title: 'Movie-finder',
    },
  ];

  constructor() {
    this.render(this._data);
  }

  render(dataArr) {
    const markup = dataArr
      .map(el => {
        return `
      <a href="${el.source}" class="items">
        <img src="${el.img}" alt="bg" />
        <span class="items__detail">${el.title}</span>
      </a>
      `;
      })
      .join('');

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

new app();
