document.addEventListener("DOMContentLoaded", function(){
	const movieList = document.querySelectorAll('.movie');
	const backBtn = document.querySelector('.back-btn');
	console.log(movieList);
	movieList.forEach( (element) => {
		element.addEventListener('click', (event) => {
			console.log(event);
			let clickedMovieId = event.target.attributes[1].value;
			var url = "movie-detail?id=" + encodeURIComponent(clickedMovieId);
			window.location.href = url;
		});
	});
	backBtn.addEventListener('click', () => {
		 window.history.back();
	});
});
