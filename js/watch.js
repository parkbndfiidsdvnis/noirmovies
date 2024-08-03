// Fetch saved movies from localStorage
let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];

// Update watch list count
const watchlistCountElement = document.getElementById('watchlist-count');
if (watchlistCountElement) {
    watchlistCountElement.textContent = savedMovies.length;
}

// Function to display watch list movies
function displayResults(movies) {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error('Element with ID "product-list" not found.');
        return;
    }

    productList.innerHTML = ''; // Clear existing content

    movies.forEach(movie => {
        const movieCard = `
            <div class="col">
                <div class="card overflow-hidden" onclick="GoToDetail(${movie.id})">
                    <div class="card-img-top ratio" style="--bs-aspect-ratio: 120%;">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="object-fit-cover" alt="${movie.title}">
                    </div>
                    <div class="card-body bg-dark">
                        <h5 class="card-title text-truncate text-light">${movie.title}</h5>
                        <p class="card-text  text-light">${(movie.vote_average).toFixed(1)}/10 ★</p>
                        <button class="btn btn-danger" onclick="removeFromWatchList(${movie.id})">Remove</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += movieCard;
    });
}

function GoToDetail(id) {
    localStorage.setItem('movieId', id);
    window.location.href = '../html/movie.html';
}


// Function to remove a movie from the watch list
function removeFromWatchList(movieId) {
    // Filter out the movie to be removed
    savedMovies = savedMovies.filter(movie => movie.id !== movieId);
    // Update localStorage
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    // Refresh the displayed list
    displayResults(savedMovies);
    // Update watch list count
    if (watchlistCountElement) {
        watchlistCountElement.textContent = savedMovies.length;
    }
}

// Display the initial watch list
displayResults(savedMovies);
