
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
        const gotMoviesAPoster = data.Poster;
        const gotMoviesTitle = data.Title;
        const gotMoviesAGenre = data.Genre;
        const gotMoviesYear = data.Year;
        const gotMoviesPlot = data.Plot;
        const gotMoviesDirector = data.Director;
        const gotMoviesActors = data.Actors;
        const ratings = data.Ratings;
        let gotMoviesRatings = [];
        if(ratings.length > 0){

            ratings.forEach((rating,index) => {
                gotMoviesRatings[index] = rating.Source;
                gotMoviesRatings[index] += ' '+ rating.Value;
             })
        } else{
            gotMoviesRatings = 'none at the moment';
        }
        console.log('THAT', gotMoviesRatings);
        card.innerHTML = `
        <div class="movie-cards">
        <img id='posterImg' src=${gotMoviesAPoster} class='poster'>
        <h2 class="title">${gotMoviesTitle}</h2>
        <h2>Genre:<p>${gotMoviesAGenre}</p></h2>
        <h2>Year:<p>${gotMoviesYear}</p></h2>
        <h2>Plot:<p>${gotMoviesPlot}</p></h2>
        <h2>Director:<p>${gotMoviesDirector}</p></h2>
        <h2>Actors:<p>${gotMoviesActors}</p></h2>
        <h2>Ratings:</h2>
        <p>${gotMoviesRatings}</p>
 
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
