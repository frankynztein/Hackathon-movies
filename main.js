let infoMovies;
const getJson = (datajson) => {
  fetch(datajson)
    .then((res) => res.json())
    .then(data => {
      return infoMovies = data;
    })
};

const searchMovie = document.getElementById('search-movie');
const moviesCards = document.getElementById('movies-cards')
const carouselImgs = document.getElementById('carousel-imgs')
const mainPage = document.getElementById('main-page')
const navBar = document.getElementById('nav-bar')
const btnSearchBar = document.getElementById('btn-search-bar')
const btnMarvel = document.getElementById('btn-marvel');
const btnGot = document.getElementById('btn-got');
const btnToyStory = document.getElementById('btn-toy-story');
const commmentsSection = document.getElementById('comments-section');
const sendCommentBtn = document.getElementById('send-comment-btn');
const movieKeyword = document.getElementById('keyword-value');
let i = 1

const searchKeyword = (e) => {
  e.preventDefault();
  getJson(`https://www.omdbapi.com/?s=${encodeURI(movieKeyword.value)}&page=${i}&apikey=c99c4c69`);
  setTimeout(printCards, 500);
  moviesCards.classList.remove('hide')
  infoGeneral.classList.add('hide')
  mainPage.classList.add('hide')
  navBar.classList.remove('hide')
}

const movieValue = document.getElementById('movie-name');
const getSearchValue = (e) => {
  e.preventDefault();
  getJson(`https://www.omdbapi.com/?s=${encodeURI(movieValue.value)}&page=${i + 1}&apikey=c99c4c69`);
  setTimeout(printCards, 500);
  moviesCards.classList.remove('hide')
  infoGeneral.classList.add('hide')
  mainPage.classList.add('hide')
}

const printCards = () => {
  arrData = Object.entries(infoMovies);
  arrMovies = arrData[0][1];

  document.getElementById('output').innerHTML = '';
  arrMovies.forEach((movie) => {
    let abc = 'assets/no-image.jpeg'
    let xyz = movie.Poster
    if (xyz === 'N/A') {
      return xyz = abc
    };
    let string =
      `<div name="movies" id=${movie.imdbID}>
      <img class="card-img-top" src=${xyz} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
        </div>
        <div class="card-footer align-text-bottom">
          <small class="text-muted">Year: ${movie.Year}</small>
        </div>
      </div>`
    const div = document.createElement('div');
    div.innerHTML = string;
    div.className = 'card my-2 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3';
    document.getElementById('output').appendChild(div);
    printMainInfo(div);
  })
}

const infoGeneral = document.getElementById('info-general')
const printMainInfo = (element) => {
  arrData = Object.entries(infoMovies);
  arrMovies = arrData[0][1];
  const printName = element.querySelector('[name=\'movies\']');
  printName.addEventListener('click', () => {
    moviesCards.classList.add('hide');
    carouselImgs.classList.add('hide');
    carouselImgsGot.classList.add('hide');
    carouselImgsToy.classList.add('hide');
    commmentsSection.classList.remove('hide');
    infoGeneral.classList.remove('hide');
    infoGeneral.innerHTML = '';
    const atribId = printName.getAttribute('id');
    getJson('https://www.omdbapi.com/?i=' + encodeURI(atribId) + '&apikey=c99c4c69')
    setTimeout(() => {
      let dataPerMovie = `
        <div class="row">
          <div class="col text-center">
            <img src=${infoMovies.Poster} alt = "" >
          </div >
          <div class="col">
            <h2>${infoMovies.Title}</h2>
            <p>${infoMovies.Year}</p>
            <p>Genre: ${infoMovies.Genre}</p>
            <p>Actors: ${infoMovies.Actors}</p>
            <p>${infoMovies.Plot}</p>
            <p>Rating: ${infoMovies.imdbRating}</p>
          </div>
        </div >`
      infoGeneral.innerHTML = dataPerMovie;
    }, 500)
  })
}

sendCommentBtn.addEventListener('click', () => {
	const userName = document.getElementById('user-name').value;
	const userComment = document.getElementById('user-comment').value;
	document.getElementById('show-user-comment').innerHTML += `
    <p><i class="em em-hear_no_evil"></i> <strong>${userName}</strong> comenta:</p>
		<p class="font-weight-lighter rounded border border-secondary col-sm-12 col-lg-8 p-2"><em>${userComment}</em></p>
	`; 
});

btnMarvel.addEventListener('click', (e) => {
  e.preventDefault();
  getJson('https://www.omdbapi.com/?s=marvel&page=${i++}&apikey=c99c4c69');
  setTimeout(printCards, 1000);
  moviesCards.classList.remove('hide')
  carouselImgs.classList.remove('hide')
  infoGeneral.classList.add('hide')
  mainPage.classList.add('hide')
  navBar.classList.remove('hide')

});
const carouselImgsGot = document.getElementById('carousel-imgs-got')
btnGot.addEventListener('click', (e) => {
  e.preventDefault();
  getJson('https://www.omdbapi.com/?s=game-of-thrones&page=${i}&apikey=c99c4c69');
  setTimeout(printCards, 1000);
  moviesCards.classList.remove('hide')
  carouselImgsGot.classList.remove('hide')
  infoGeneral.classList.add('hide')
  mainPage.classList.add('hide')
  navBar.classList.remove('hide')
});
const carouselImgsToy = document.getElementById('carousel-imgs-toy')

btnToyStory.addEventListener('click', (e) => {
  e.preventDefault();
  getJson('https://www.omdbapi.com/?s=toy-story&page=${i}&apikey=c99c4c69');
  setTimeout(printCards, 1000);
  moviesCards.classList.remove('hide')
  carouselImgsToy.classList.remove('hide')
  infoGeneral.classList.add('hide')
  mainPage.classList.add('hide')
  navBar.classList.remove('hide')

});

btnSearchBar.addEventListener('click', searchKeyword)
searchMovie.addEventListener('click', getSearchValue)

const next = document.getElementById('next')
const previous = document.getElementById('previous')

const nextPage = () => {
    getJson(`https://www.omdbapi.com/?s=${encodeURI(movieKeyword.value)}&page=${i++}&apikey=c99c4c69`);
    setTimeout(printCards, 500)
}
const prevPage = () => {
  if (i > 1) {
    getJson(`https://www.omdbapi.com/?s=${encodeURI(movieKeyword.value)}&page=${i--}&apikey=c99c4c69`);
    setTimeout(printCards, 500);
  }
};

next.addEventListener('click', nextPage)
previous.addEventListener('click', prevPage)
document.getElementById('mini-logo').addEventListener('click', ()=>{
location.reload();
})