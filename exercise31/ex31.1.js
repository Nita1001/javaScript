




async function data(){
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
    } catch(err){
        console.log('Error status:', err);
    }
}

data();

// "https://swapi.dev/api/people/1/"