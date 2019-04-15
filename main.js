const searchMovie = document.getElementById('search-movie');
const output = document.getElementById('output');
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
    getJson('http://www.omdbapi.com/?t=' + encodeURI(movieValue) + '&apikey=c99c4c69')
    setTimeout(() => {
        arrMovie = Object.entries(infoMovies);
        let string = `<img src= ${infoMovies.Poster}>`
        output.innerHTML = string;

        console.log(infoMovies);
    }, 250)
})





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
