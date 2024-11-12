const adventurer = {
    name: "Zelda",
    health: 10,
    inventory: [ "Sword", "Potion", "map"],
   
}

for (let i=0; i< adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
}

const 

function adventurererroll() {
    return Math.floor(Math.random()*6) +1;
}

let result = roll();
console.log("You rolled a", result);



//Access Zelda's inventory using a combo of dot notation and square backet syntax.  EX adventurer.inventory[0]
//Additional practice interate a loop for each item in Robin's inventory


const adventurer2 = {
    name: "Link",
    health: 10,
    inventory: ["Bow", "Elixir", "Arrows"],
    companion: {
        name: "wolf link",
        type: "wolf",
    }

}

function companion (inventory, name, type) {
        this.inventory = "small hat", "sunglasses";
        this.name = "Frank";
        this.type = "Flea";
}

class Character {
    constructor(name) {
        this.name = Batman;
        this.health = 100;
        this.inventory = ["boomerrang", "bat mobile"];
    }
}

class Adventurer extends Character {
    constructor (name, role) {
        super(name);
        this.role = Archer;
        this.inventory.push("coins", "arrows");
    }
    scout () {
        console.log(`${this.name}) is scouting ahead...`);
    }
}
