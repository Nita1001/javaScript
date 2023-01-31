// You are given a function, Pokemon, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:
function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
    console.log("I choose you,", this.name);
}
Pokemon.prototype.attack = function (num) {
    const currAttack = this.attackList[num];
    console.log("used", currAttack);
}

const p1 = new Pokemon('Charizard','Fire',['Air Slash', 'Dragon Breath', 'Ember', 'Fire Spin', 'Wing attack'] );
const p2 = new Pokemon('Squirtle', 'Water', ['Aqua Tail', 'Iron Defense', 'Hydro Pump', 'Shell Smash']);
const p3 = new Pokemon('Pikachu', 'Electric', ['Tackle', 'Iron Tail', 'Volt Tackle', 'Thunderbolt']);
p1.callPokemon();
p1.attack(1);
p2.callPokemon();
p2.attack(2);
p3.callPokemon();
p3.attack(3);
