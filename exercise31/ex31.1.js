async function data(){
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        const res2 = await fetch("https://swapi.dev/api/planets/1/");
        const homePlanet = await res2.json();
        console.log(homePlanet);
        console.log(data);
        const obj = {};
        obj['Name'] = data.name;
        obj['Height'] = data.height;
        obj['Hair'] = data.hair_color;
        obj['Planet'] = {'Name': homePlanet.name, 'Population': homePlanet.population};
        console.log(obj);

    } catch(err){
        console.log('Error status:', err);
    }
}

data();
