import img1 from 'url:./img/1.PNG';
import img2 from 'url:./img/2.PNG';
import img3 from 'url:./img/3.PNG';
import img4 from 'url:./img/4.PNG';
import img5 from 'url:./img/5.PNG';
import img6 from 'url:./img/6.png';
import img7 from 'url:./img/7.png';

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
    {
      img: `${img3}`,
      source: 'https://rohit-memory-game.netlify.app/',
      title: 'Memory-game',
     },
     {
      img: `${img4}`,
      source: 'https://determined-swartz-bac81f.netlify.app',
      title: 'Live markdown editor',
     },
     {
      img: `${img5}`,
      source: 'https://upbeat-jackson-2079cd.netlify.app/',
      title: 'Whack a mole game',
     },
     {
      img: `${img6}`,
      source: 'https://cranky-williams-ddebd5.netlify.app/',
      title: 'Christmas countdown',
     },
    {
      img: `${img7}`,
      source: 'https://awesome-snyder-bb7ea8.netlify.app',
      title: 'Picture in picture',
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
