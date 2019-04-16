const searchMovie = document.getElementById('search-movie');
let infoMovies;

const getJson = (datajson) => {
  fetch(datajson)
    .then((res) => res.json())
    .then(data => {
      return infoMovies = data;
    })
};

const moviesCards = document.getElementById('movies-cards')
const carouselImgs = document.getElementById('carousel-imgs')

const getSearchValue = () => {
  const movieValue = document.getElementById('movie-name').value;
  getJson('http://www.omdbapi.com/?s=' + encodeURI(movieValue) + '&apikey=c99c4c69');
  setTimeout(printCards, 500);
  moviesCards.classList.remove('hide')
  carouselImgs.classList.add('hide')

}

const printCards = () => {
  arrData = Object.entries(infoMovies);

  arrMovies = arrData[0][1];
  console.log(arrMovies)

  document.getElementById('output').innerHTML = '';
  arrMovies.forEach((movie) => {
    let string =
      `<div name="movies" id=${movie.imdbID}>
      <img class="card-img-top" src=${movie.Poster} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
        </div>
        <div class="card-footer">
          <small class="text-muted">Year: ${movie.Year}</small>
        </div>
      </div>`
    const div = document.createElement('div');
    div.innerHTML = string;
    div.className = 'card my-2 col-12 col-sm-6 col-md-4';
    document.getElementById('output').appendChild(div);
    printMainInfo(div);
  })
}

const infoGeneral = document.getElementById('info-general')
const printMainInfo = (element) => {
  arrData = Object.entries(infoMovies);

  arrMovies = arrData[0][1];
  const printName = element.querySelector('[name=\'movies\']');
  // console.log(arrMovies)

  printName.addEventListener('click', () => {
    moviesCards.classList.add('hide');
    carouselImgs.classList.add('hide');
    infoGeneral.innerHTML = '';
    const atribId = printName.getAttribute('id');
    getJson('http://www.omdbapi.com/?i=' + encodeURI(atribId) + '&apikey=c99c4c69')
    setTimeout(() => {
      console.log(infoMovies)
      let dataPerMovie = `
        <div class="row">
          <div class="col">
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

searchMovie.addEventListener('click', getSearchValue)




/*
const getApi = () => {
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c99c4c69')
.then((res) => console.log(res.json()))
.then((data) => {
    let output = '<h2 class="mb-4">Posts</h2>';
    data.forEach((movie) => {
        output += `
div class="card card-body mb-3" >
  <h3>${movie.title}</h3>
  <p>${movie.plot}</p>
        / div >
  `;
    });
    document.getElementById('output').innerHTML = output;
})

.then((data) => {
    let output = '<h2 class="mb-4">Posts</h2>';
    data.forEach((posts) => {
        output += `
div class="card card-body mb-3" >
  <h3>${posts.title}</h3>
  <p>${posts.body}</p>
        / div >
  `;
    });
    document.getElementById('output').innerHTML = output;
})
}
*/
