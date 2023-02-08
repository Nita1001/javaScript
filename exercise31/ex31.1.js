let bigData = [];


function people(){

    for (let i = 1; i <= 10; i++) {
        console.log(bigData);
        data(i);
       
    }

}

async function data(i) {
        try {
            const res = await fetch(`https://swapi.dev/api/people/${i}`);
            const data = await res.json();
            const res2 = await fetch(`https://swapi.dev/api/planets/${i}`);
            const homePlanet = await res2.json();
            const obj = {};
            obj['Name'] = data.name;
            obj['Height'] = data.height;
            obj['Hair'] = data.hair_color;
            obj['Planet'] = { 'Name': homePlanet.name, 'Population': homePlanet.population };
            bigData.push(obj);
        } catch (err) {
            console.log('Error status:', err);
        }
}

data();
