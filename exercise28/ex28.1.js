const getTextBtn = document.querySelector('#getJoke');
getTextBtn.addEventListener('click', getText);

function getText(){
    fetch('https://api.jokes.one/jod')
    .then((res) => res.json())
    .then((data) => {
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
    })
    .catch((err) => console.log(err));
}