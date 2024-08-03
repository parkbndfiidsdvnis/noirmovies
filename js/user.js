// =============================================================================
// ==================== Xử lý hiển thị thông tin người dùng ====================
// =============================================================================

// Lấy thông tin người dùng đã đăng nhập trong Local Storage
let user = localStorage.getItem('loggedUser');

// Nếu đã đăng nhập thì hiển thị thông tin người dùng
if (user) {
    document.getElementById('user-profile').innerHTML = `
        <input id="search-query" class="form-control me-2" type="search" placeholder="Movie Name..." aria-label="Search">
        <button id="search-button" class="btn btn-outline-success text-nowrap me-4" type="submit">Search</button>

        <p class="text-nowrap m-0 me-3 text-white">Hello, ${user}</p>
        <button class="btn btn-primary text-nowrap me-2" type="button" onclick="logout()">
            <a class="nav-link" href="./login.html">Log out</a>
        </button>
    `
}
else { // Nếu chưa đăng nhập thì hiển thị nút Đăng nhập
    document.getElementById('user-profile').innerHTML = `
        <input id="search-query" class="form-control me-2" type="search" placeholder="Movie Name..." aria-label="Search">
        <button id="search-button" class="btn btn-outline-success text-nowrap me-4" type="submit">Search</button>

        <button class="btn btn-primary text-nowrap me-2" type="button">
            <a class="nav-link" href="./login.html">Log in</a>
        </button>

        <button class="btn btn-outline-primary text-nowrap" type="button">
            <a class="nav-link" href="./signup.html">Sign up</a>
        </button>
    `
}

// Khi đăng xuất thì xóa thông tin người dùng trong Local Storage
function logout() {
    localStorage.removeItem('loggedUser');
}
//Xử lí tìm kiếm tên phim //
let searchButton = document.getElementById('search-button');
let searchQuery = document.getElementById('search-query');

searchButton.addEventListener('click', () => {
    // Lấy giá trị ô input
    let query = searchQuery.value.trim().toLowerCase();
    // Lưu giá trị search vào local storage
    localStorage.setItem('searchQuery', query);
    // Chuyển hướng sang trang search html//
    window.location.href = '../html/search.html';
});