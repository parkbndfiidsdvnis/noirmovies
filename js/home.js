let searchButton = document.getElementById('search-button');
let searchQuery = document.getElementById('search-query');

searchButton.addEventListener('click',() =>{
    // Lấy giá trị ô input
    let query = searchQuery.value.trim().toLowerCase();
// Lưu giá trị search vào local storage
localStorage.setItem('searchQuery',query);
// Chuyển hướng sang trang search html//
window.location.href='../html/search.html';
});