// Fetch movie data and generate carousel content
fetch('../json/trendingfilm.json')
	.then(response => response.json())
	.then(data => {
		const carouselContent = document.getElementById('carousel-content-trendingfilm');
		const chunkSize = 5; // Number of items per carousel item
		let isActive = ' active';

		for (let i = 0; i < data.length; i += chunkSize) {
			const chunk = data.slice(i, i + chunkSize);
			const carouselItem = document.createElement('div');
			carouselItem.className = `carousel-item${isActive}`;
			isActive = ''; // Only the first item should be active

			const row = document.createElement('div');
			row.className = 'row row-cols-5 g-4';

			chunk.forEach(movie => {
				const col = document.createElement('div');
				col.className = 'col';

				const card = `
				<div class="card overflow-hidden" onclick="GoToDetail(${movie.id})">
					<div class="card-img-top ratio" style="--bs-aspect-ratio: 120%;">
					<img src="${movie.image}" class="object-fit-cover" alt="${movie.title}">
					</div>
					<div class="card-body bg-dark" style="">
					<h6 class="card-title text-truncate">${movie.title}</h6>
					<p class="card-text">${movie.rating}/10 ⭐</p>
					</div>
				</div>
				`;

				col.innerHTML = card;
				row.appendChild(col);
			});

			carouselItem.append(row);
			carouselContent.appendChild(carouselItem);
		}
	})
	.catch(error => console.error('Error fetching movie data:', error));



function GoToDetail(id) {
	localStorage.setItem('movieId', id);
	window.location.href = '../html/movie.html';
}


