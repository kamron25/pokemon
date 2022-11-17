var elPokemons = document.querySelector('.pokemons');
var elPokemonTemplate = document.querySelector('#pokemon-template').content;
var pokemonsFragment = document.createDocumentFragment();

pokemons.forEach(function(pokemon){
	// template dan nusxa olish
	var templateClone = elPokemonTemplate.cloneNode(true);

	// nusxani ichini to'ldirish
	templateClone.querySelector('.pokemon-id').textContent = pokemon.id;
	templateClone.querySelector('.pokemon-img').src = pokemon.img;
	templateClone.querySelector('.pokemon-img').alt = pokemon.name;
	templateClone.querySelector('.pokemon-name').textContent = pokemon.name;

	var weaknesses = pokemon.weaknesses;

	for(var j = 0; j < weaknesses.length; j++){
		var pokemonItem = document.createElement('li');
		pokemonItem.textContent = weaknesses[j];
		templateClone.querySelector('.pok-weak').appendChild(pokemonItem);
	}

	// Nusxani fragmentga to'plash
	pokemonsFragment.appendChild(templateClone);
});

elPokemons.appendChild(pokemonsFragment);

// search
var elForm = document.querySelector('#form');
var elInput = document.querySelector('#input');

elForm.addEventListener('submit', function(evt){
	evt.preventDefault();

	var searchKey = new RegExp(elInput.value, 'gi');

	var searchedPokemons = pokemons.filter(function(pokemon){
		return pokemon.name.match(searchKey);
	});

	elPokemons.innerHTML = '';
	var pokemonsFragment = document.createDocumentFragment();

	searchedPokemons.forEach(function(pokemon){
		// template dan nusxa olish
		var templateClone = elPokemonTemplate.cloneNode(true);

		// nusxani ichini to'ldirish
		templateClone.querySelector('.pokemon-id').textContent = pokemon.id;
		templateClone.querySelector('.pokemon-img').src = pokemon.img;
		templateClone.querySelector('.pokemon-img').alt = pokemon.name;
		templateClone.querySelector('.pokemon-name').textContent = pokemon.name;

		var weaknesses = pokemon.weaknesses;

		for(var j = 0; j < weaknesses.length; j++){
			var pokemonItem = document.createElement('li');
			pokemonItem.textContent = weaknesses[j];
			templateClone.querySelector('.pok-weak').appendChild(pokemonItem);
		}

		// Nusxani fragmentga to'plash
		pokemonsFragment.appendChild(templateClone);
	});

	elPokemons.appendChild(pokemonsFragment);
});