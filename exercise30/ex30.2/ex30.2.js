
const input = document.querySelector('#inputMovie');
const card = document.querySelector('#movie-cards')
input.addEventListener('keypress', handleInput);

function handleInput(ev) {
    if(ev.key === 'Enter'){
        const moviesName = ev.target.value;
        ev.target.value = '';
        let newMoviesName = moviesName.split(' ');
        newMoviesName = newMoviesName.join('+');
        console.log(newMoviesName);
        getText(newMoviesName);
    }
}

function createElement(data){
    if(!(data.message === 'Not Found')){
        const gotMovieAPoster = data.Poster;
        const gotMovieTitle = data.Title;
        card.innerHTML = `
        <div class="movie-cards">
        <img id='posterImg' src=${gotMovieAPoster} class='poster'>
        <h2>${gotMovieTitle}</h2>
        <h2></h2>
        </div>
        `;
    }
}

async function getText(moviesName){
    try{
        const res = await fetch(`http://www.omdbapi.com/?t=${moviesName}&apikey=f247899d`)
        const data = await res.json();
        console.log(data);
        if(data.Title.includes(moviesName))
        createElement(data);
        else console.log('not found');
    } catch(err) {
        console.log('Error: ',err);
    }
}
