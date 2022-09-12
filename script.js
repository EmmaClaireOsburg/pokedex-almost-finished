let allPokemons = [];
let start = 31



async function loadPokemon(i){
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    allPokemons.push(await responseAsJson);
    showPokemon(i)
}


async function init(){
    for (let i = 1; i <= 30; i++) {
        await loadPokemon(i);
    }
}

function showPokemon(){
    
    document.getElementById('allPokemon').innerHTML = ``;

    for (let i = 0; i < allPokemons.length; i++) {
    let color = allPokemons[i]['types'][0]['type']['name'];
    document.getElementById('allPokemon').innerHTML += `
    <div class="showAllPokemons ${color}" id="showAllPokemons" onclick="renderPokemonInfo(${i})">
    <div class="pokeNames">${allPokemons[i]['name'].toUpperCase()}</div>
    <img src = "${allPokemons[i]['sprites']['other']['official-artwork']['front_default']}";>
    <div class="type"><img id="type${i}"></div>
    <div>${allPokemons[i]['types'][0]['type']['name'].toUpperCase()}</div>
    </div>`;


    if (color == "grass") {
        document.getElementById(`type${i}`).src = "img/elements/grass.png"
    }
    if(color == "bug") {
        document.getElementById(`type${i}`).src = "img/elements/bug.png"
    }
    if(color == "fire") {
        document.getElementById(`type${i}`).src = "img/elements/fire.png"
    }
    if(color == "normal") {
        document.getElementById(`type${i}`).src = "img/elements/normal.png"
    }
    if(color == "poison") {
        document.getElementById(`type${i}`).src = "img/elements/poison.png"
    }
    if(color == "electric") {
        document.getElementById(`type${i}`).src = "img/elements/electric.png"
    }
    if(color == "ground") {
        document.getElementById(`type${i}`).src = "img/elements/ground.png"
    }
    if(color == "fairy") {
        document.getElementById(`type${i}`).src = "img/elements/fairy.png"
    }
    if(color == "water") {
        document.getElementById(`type${i}`).src = "img/elements/water.png"
    }
    if(color == "psychic") {
        document.getElementById(`type${i}`).src = "img/elements/psychic.png"
    }
    if(color == "fighting") {
        document.getElementById(`type${i}`).src = "img/elements/fighting.png"
    }
    if(color == "rock") {
        document.getElementById(`type${i}`).src = "img/elements/rock.png"
    }
    if(color == "ghost") {
        document.getElementById(`type${i}`).src = "img/elements/ghost.png"
    }
    if(color == "ice") {
        document.getElementById(`type${i}`).src = "img/elements/ice.png"
    }
    if(color == "dragon") {
        document.getElementById(`type${i}`).src = "img/elements/dragon.png"
    }
    }
    
        
}


function backgroundType(i){
    let color = allPokemons[i]['types'][0]['type']['name'];
    let element = document.getElementById('pokedex');
    element.classList.add(`${color}`);
     
}


function renderPokemonInfo(i){
    document.getElementById('showPokemon').classList.remove('d-none')
    document.getElementById('pokemonName').innerHTML = allPokemons[i]['name'].toUpperCase();
    document.getElementById('pokeImage').src = allPokemons[i]['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type').innerHTML = allPokemons[i]['types'][0]['type']['name'].toUpperCase();
    document.getElementById('hp').innerHTML = allPokemons[i]['stats'][0]['base_stat'];
    document.getElementById('attack').innerHTML = allPokemons[i]['stats'][1]['base_stat'];
    document.getElementById('defense').innerHTML = allPokemons[i]['stats'][2]['base_stat'];
    document.getElementById('specialAttack').innerHTML = allPokemons[i]['stats'][3]['base_stat'];
    document.getElementById('specialDefense').innerHTML = allPokemons[i]['stats'][4]['base_stat'];
    document.getElementById('speed').innerHTML = allPokemons[i]['stats'][5]['base_stat']
    updateProgressBar(i);
    backgroundType(i);
}

function updateProgressBar(i){
    
    document.getElementById('progressBar1').style = `width: ${allPokemons[i]['stats']['0']['base_stat']}%`;
    document.getElementById('progressBar2').style = `width: ${allPokemons[i]['stats']['1']['base_stat']}%`;
    document.getElementById('progressBar3').style = `width: ${allPokemons[i]['stats']['2']['base_stat']}%`;
    document.getElementById('progressBar4').style = `width: ${allPokemons[i]['stats']['3']['base_stat']}%`;
    document.getElementById('progressBar5').style = `width: ${allPokemons[i]['stats']['4']['base_stat']}%`;
    document.getElementById('progressBar6').style = `width: ${allPokemons[i]['stats']['5']['base_stat']}%`;
}

function closePokemon() {
    document.getElementById(`showPokemon`).classList.add('d-none');
    showPokemon();
}

async function loadMorePokemon() {
    for (let i = start; i <= start +19; i++) {
     await loadPokemon(i)     
    }
     start += 20
}


function search(){
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    document.getElementById('allPokemon').innerHTML ='';

    for (let i = 0; i  < allPokemons.length; i++) {
        let searchedPokemon = allPokemons[i];

        if (searchedPokemon['name'].toLowerCase().includes(search)) {
            
          document.getElementById('allPokemon').innerHTML += showPokemon(i);
        }
    }
}

        

