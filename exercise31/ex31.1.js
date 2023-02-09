
let bigData = [];

async function data() {
    try {
        for (let i = 1; i <= 10; i++) {
            const res = await fetch(`https://swapi.dev/api/people/${i}/`);
            if (res.ok) {
                const data = await res.json();
                const res2 = await fetch(`https://swapi.dev/api/planets/${i}/`);
                const homePlanet = await res2.json();
                const obj = {};
                obj['Name'] = data.name;
                obj['Height'] = data.height;
                obj['Hair'] = data.hair_color;
                obj['Planet'] = { 'Name': homePlanet.name, 'Population': homePlanet.population };
                bigData.push(obj);
            } else {
                throw new Error(res.status, res2.status)
            }
        }

    } catch (err) {
        console.log('Error status:', err);
    }
}

console.log(bigData);
data();
