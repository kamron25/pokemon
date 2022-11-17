var elMovies = document.querySelector('.movies');

movies.forEach(function(movie){
	var movieDiv = document.createElement('div');
	movieDiv.classList.add('movie');
	var movieTitle = document.createElement('h2');
	movieTitle.classList.add('movie-title');
	movieTitle.textContent = movie.Title;
	var movieLink = document.createElement('a');
	movieLink.classList.add('movie-link');
	movieLink.textContent = 'Watch Trailer';
	movieLink.href = 'https://www.youtube.com/watch?v=' + movie.ytid;
	movieLink.target = '_blank';
	var movieList = document.createElement('ul');
	movieList.classList.add('movie-list');

	var movieCategories = movie.Categories.split('|');

	for(var j = 0; j < movieCategories.length; j++){
		var movieItem = document.createElement('li');
		movieItem.classList.add('movie-item');
		movieItem.textContent = movieCategories[j];
		movieList.appendChild(movieItem);
	}

	movieDiv.appendChild(movieTitle);
	movieDiv.appendChild(movieLink);
	movieDiv.appendChild(movieList);
	elMovies.appendChild(movieDiv);
});

var elForm = document.querySelector('#form');
var elInput = document.querySelector('#input');
var elButton = document.querySelector('#btn');

elForm.addEventListener('submit', function(evt){
	evt.preventDefault();
	console.log(elInput.value);
});