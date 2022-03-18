const fetchPokemon = () => {
    const input = document.getElementById('pokeName');
    const pokemonName = input.value.toLowerCase();

    const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemonName;
    
    // Le pide al servidor la información de la URL
    fetch(url).then((res) => { //Recibimos una promesa
        // Una promesa es como decirle al programa que espere a la respuesta
        if(res.status != "200"){
            console.log(res);
            pokeImage("https://c.tenor.com/gFG0trV91mAAAAAi/miserable-cute.gif");
        }else{
            return res.json();
        }
    }).then((data) => {
        let pokemonImg = data.sprites.front_default;
        let pokemonType = data.types[0].type.name;
        let pokemonStats = data.stats;
        let pokemonHeight = data.height;
        let pokemonWeight = data.weight;
        let pokemonMoves = data.moves.length;
        pokeImage(pokemonImg);
        pokeType(pokemonType);
        pokeStats(pokemonStats);
        pokeHeight(pokemonHeight);
        pokeWeight(pokemonWeight);
        pokeMoves(pokemonMoves);
    })
}

fetchPokemon();


const pokeImage = (url) =>{
    const pokemonImg = document.getElementById('pokeImg');
    pokemonImg.src = url;
}

const pokeType = (type) =>{
    const pokemonType = document.getElementById('type');
    pokemonType.innerText = type;
}

const pokeHeight = (height) => {
    const pokemonHeight = document.getElementById('height')
    pokemonHeight.innerText = height;
};

const pokeWeight = (weight) => {
    const pokemonWeight = document.getElementById('weight')
    pokemonWeight.innerText = weight;
};

const pokeMoves = (moves) => {
    const pokemonMoves = document.getElementById('moves')
    pokemonMoves.innerText = moves;
};

const pokeStats = (stats) =>{
    const pokemonStats = document.getElementsByClassName('stats');
    stats.forEach( function(stat, i, stats) {
        pokemonStats[i].innerText = stat.base_stat;
    });
}