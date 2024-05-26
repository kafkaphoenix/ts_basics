interface CakeRecipe {
    eggs: number;
    sugar: number;
    flour: number;
    milk: number;
    getCake(recipe: CakeRecipe): void;
}

class Cake implements CakeRecipe {
    eggs;
    sugar;
    flour;
    milk;

    constructor(eggs: number, sugar: number, flour: number, milk: number) {
        this.eggs = eggs;
        this.sugar = sugar;
        this.flour = flour;
        this.milk = milk;
    }

    getCake(recipe: CakeRecipe): void {
        console.log(recipe);
    }
}

// animal factory
// interface sketch (2 eyes and 4 legs)
// class factory logic and data
// object lion, tiger, elephant
interface Animal {
    name: string;
    eyes: number;
    legs: number;
    getAnimalName(animal: Animal): void;
}

class Lion implements Animal {
    name;
    eyes;
    legs;

    constructor(name: string, eyes: number, legs: number) {
        this.name = name;
        this.eyes = eyes;
        this.legs = legs;
    }

    getAnimalName(): void {
        console.log(this.name);
    }
}

const variable_lion_object = new Lion('Lion', 2, 4);

variable_lion_object.getAnimalName();
console.log(variable_lion_object.name);
