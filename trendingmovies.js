// // TMDb API Key
// const apiKey = 'c765a205274e5ae2e4ea7651076c9be2';
// // Function to fetch top movies or top series based on the category parameter
// async function fetchTopContent(category) {
// let endpoint;
// if (category === 'movies') {
//   endpoint = 'movie/top_rated';
// } else if (category === 'series') {
//   endpoint = 'tv/top_rated';
// }
// const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}`);
// const data = await response.json();
// return data.results;
// }

// // Fetch top content and render cards
// async function renderTopContent(category) {
// const topContent = await fetchTopContent(category);
// for (let i = 1; i <=12; i++) {
//   const content = topContent[i - 1];
//   const cardElement = document.getElementById(`card${i}`);
//   const cardContent = `
//   <div class="col-md-4 mb-4">
//     <div class="card shadow-sm" style="width: 12rem;">
//      <img src="https://image.tmdb.org/t/p/w500${content.poster_path}" class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
//      <div class="card-body">
//       <h5 class="card-title">
//        ${content.title || content.name}
//       </h5>
//       <div class="d-flex justify-content-between align-items-center">
//         <button type="button" class="btn btn-sm btn-outline-secondary" onclick="toggleOverview('card${i}')">View</button>
//         <button type="button" class="btn btn-sm btn-outline-secondary" onclick="addToList('card${i}')">Add to List</button>
//       </div>
//       <p class="card-text overview" style="display: none;">${content.overview}</p>
//      <p class="card-text">Rating: ${content.vote_average}</p>
//     </div>
//    </div>
//   `;
// cardElement.innerHTML = cardContent;
// }
// }
// // Function to add a movie the list
// document.getElementById('topMoviesButton').addEventListener('click', function () {
// renderTopContent('movies');
// });
// // function to add series to the list
// document.getElementById('topSeriesButton').addEventListener('click', function () {
// renderTopContent('series');
// });
// // view the overview of the movie
// function toggleOverview(cardId) {
// const overviewElement = document.querySelector(`#${cardId} .card-text.overview`);
// overviewElement.style.display = overviewElement.style.display === 'none' ? 'block' : 'none';
// }
// window.onload = renderMovieCards;