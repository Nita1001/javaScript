// Refactor the simple fetch exercise (28.1) using async await.
const getTextBtn = document.querySelector('#getJoke');
getTextBtn.addEventListener('click', getText);

async function getText(){
    try{
        const res = await fetch('https://api.jokes.one/jod')
        const data = await res.json();
        let output ='';
        const gotJoke = data.contents.jokes[0].joke;
        console.log(gotJoke.title);
        output = `
        <div>
            <h3>${gotJoke.title}</h3>
            <p>${gotJoke.text}</p>
        </div>
        `;
        document.querySelector('#output').innerHTML = output;
    
    } catch(err) {
        console.log(err);
    }
}

