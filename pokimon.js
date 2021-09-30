const baseURL='https://pokeapi.co/api/v2/pokemon/'



function submit(){
    fetchpoke(document.getElementById('search').value)
}

function random(){
    document.getElementById('search').value = Math.floor(Math.random()*898) + 1
    fetchpoke(document.getElementById('search').value)
}

function fetchpoke(id){
    fetch(baseURL + id)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json =>{
            displayPokemon(json)
        })
        .catch(error => {
            console.log(error);
        })
}

function displayPokemon(data){
    document.getElementById('name').innerHTML = 'Name: ' + data.name
    document.getElementById('img').src = data.sprites.front_default
    document.getElementById('height').innerHTML = 'Height: ' + data.height
    document.getElementById('weight').innerHTML = 'Weight: ' + data.weight
    document.getElementById('type').innerHTML = 'Types: '
    for(n = 0; n <= data.types.length; n++){
        document.getElementById('type').innerHTML += data.types[n].type.name + ' '
    }
    
}

fetchpoke()





// name type weight img height
