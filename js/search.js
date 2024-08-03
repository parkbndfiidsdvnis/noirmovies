// Lấy search query từ local storage
let query = localStorage.getItem('searchQuery');
let movies = [];

// Hiển thị query ra màn hình
if (query) {
    document.getElementById('search-keyword').textContent = query;

    // Khai báo API key và URL
    const apiKey = 'f81caa43eebc6426021ba9e3aa5f87e2';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US`;

    // Lấy dữ liệu từ API và hiển thị ra màn hình
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Lưu vào biến movies
            movies = data.results;
            // Hiển thị sản phẩm ra màn hình
            displayResults(data.results);
        })
        .catch(error => console.error('Error fetching data:', error));
} else {
    console.error('No search query found in local storage.');
}

// Hàm hiển thị danh sách sản phẩm ra màn hình
function displayResults(movies) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Xóa nội dung cũ

    movies.forEach(movie => {
        const col = document.createElement('div');
        col.className = 'col';

        const card = `
            <div class="card overflow-hidden">
            <div class="card-img-top ratio" style="--bs-aspect-ratio: 120%;">
            <img src="https://www.themoviedb.org/t/p/w500${movie.poster_path}" class="object-fit-cover" alt="${movie.title}">
                </div>
                <div class="card-body bg-dark">
                    <h5 class="card-title text-truncate text-light">${movie.title}</h5>
                    <p class="card-text text-light">${movie.vote_average}/10 ⭐</p>
                    <button class="btn btn-warning" onclick="Watchlist(${movie.id})">Watchlist</button>
                    <button class="btn btn-warning" onclick="GoToDetail(${movie.id})">Detail</button>
                </div>
            </div>
        `;

        col.innerHTML = card;
        productList.appendChild(col);
    });
}

function GoToDetail(id) {
	localStorage.setItem('movieId', id);
	window.location.href = '../html/movie.html';
}


// Hàm lưu phim vào watchlist
function Watchlist(id) {
    let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
    let movie;

    // Tìm phim có id trùng với id được click
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id === id) {
            movie = movies[i];
            break;
        }
    }

    // Kiểm tra nếu phim đã tồn tại trong watchlist
    if (savedMovies.some(savedMovie => savedMovie.id === movie.id)) {
        alert("Movie already in the watchlist");
        return;
    }

    // Thêm phim vào danh sách
    savedMovies.push(movie);
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    alert("Movie added to the watchlist");

    stopPropagation();
}

// Uncomment if you have a searchMovies function or remove if unnecessary
// searchMovies(query);
