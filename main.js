const searchMovie = document.getElementById('search-movie');
let infoMovies;

const getJson = (datajson) => {
  fetch(datajson)
    .then((res) => res.json())
    .then(data => {
      infoMovies = data;
      return infoMovies;
    })
};

searchMovie.addEventListener('click', () => {
  const movieValue = document.getElementById('movie-name').value;
  getJson('http://www.omdbapi.com/?s=' + encodeURI(movieValue) + '&apikey=c99c4c69')
  const printCards = () => {
    abc = Object.entries(infoMovies);
    arrMovies = abc[0][1]
    console.log(arrMovies)

    arrMovies.forEach((movie) => {
      console.log(movie)
      let string =
        ` <img class="card-img-top" src=${movie.Poster} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Year: ${movie.Year}</small>
          </div>`
      const div = document.createElement('div');
      div.innerHTML = string;
      div.className = 'card';
      document.getElementById('output').appendChild(div);
      printMainInfo(div);
    })
  }
  setTimeout(printCards, 500)
})
const printMainInfo = (element) => {

}





/*
const getApi = () => {
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c99c4c69')
.then((res) => console.log(res.json()))
.then((data) => {
    let output = '<h2 class="mb-4">Posts</h2>';
    data.forEach((movie) => {
        output += `
        div class="card card-body mb-3">
            <h3>${movie.title}</h3>
            <p>${movie.plot}</p>
        /div>
        `;
    });
    document.getElementById('output').innerHTML = output;
})

.then((data) => {
    let output = '<h2 class="mb-4">Posts</h2>';
    data.forEach((posts) => {
        output += `
        div class="card card-body mb-3">
            <h3>${posts.title}</h3>
            <p>${posts.body}</p>
        /div>
        `;
    });
    document.getElementById('output').innerHTML = output;
})
}
*/
