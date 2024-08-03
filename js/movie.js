
let movieId = localStorage.getItem('movieId');
let movieData;

// Khai báo API Key và URL
const apiKey = 'f81caa43eebc6426021ba9e3aa5f87e2';
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

// Fetch movie details
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        movieData = data;
        displayMovieDetails(data);
    })
    .catch(error => console.error('Error:', error));

// Function to display movie details
function displayMovieDetails(movie) {
    document.getElementById('movie-thumbnail').src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-date').textContent = `Year: ${movie.release_date.split('-')[0]}`;
    document.getElementById('movie-rating').textContent = `Rating: ${(movie.vote_average).toFixed(1)}/10 ⭐️`;
    document.getElementById('movie-runtime').textContent = `Duration: ${movie.runtime} minutes`;
    document.getElementById('movie-overview').textContent = movie.overview;
}

// Function to save the movie to the list
function saveToList() {
    console.log('Saving movie to watch list...');
    let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
    if (!savedMovies.some(savedMovie => savedMovie.id === movieId)) {
        savedMovies.push(movieData);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        alert('Movie saved to watch list!');
    } else {
        alert('Movie is already in your watch list.');
    }
}
