document.addEventListener("DOMContentLoaded", function(){
	const movieList = document.querySelectorAll('.movie');
	console.log(movieList)
	movieList.forEach( (element) => {
		element.addEventListener('click', (event) => {
			let clickedMovieId = event.path[2].attributes[1].nodeValue;
			var url = "movie-detail?id=" + encodeURIComponent(clickedMovieId);
            window.location.href = url;
		});
	});
});
