document.addEventListener("DOMContentLoaded", function(){
	const movieList = document.querySelectorAll('.movie');
	const backBtn = document.querySelector('.back-btn');
	movieList.forEach( (element) => {
		element.addEventListener('click', (event) => {
			let clickedMovieId = event.target.attributes[1].value;
			var url = "movie-detail?id=" + encodeURIComponent(clickedMovieId);
			window.location.href = url;
		});
	});
	if(backBtn !== null){
	   backBtn.addEventListener('click', () => {
		 window.history.back();
	});
	}
});
