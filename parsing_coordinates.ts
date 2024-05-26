interface Coordinate {
   x: number;
   y: number; 
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
   // return { x: obj.x, y: obj.y };
   return { ...obj};
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
   return { x, y };
}

function parseCoordinate(first: unknown, second?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    };
    if (typeof first === 'object') {
        coord = { ...(first as Coordinate) };
    } else if (typeof first === 'string') {
        const parts: string[] = first.split(',');
        coord = {
            x: parseInt(parts[0].split(':')[1]),
            y: parseInt(parts[1].split(':')[1])
        };
    } else if (typeof first === 'number' && typeof second === 'number') {
        coord = { x: first as number, y: second as number };
    }
    return coord;
}

const coordinate = { x: 10, y: 20 };
console.log(parseCoordinateFromObject(coordinate));
console.log(parseCoordinateFromNumbers(10, 20));
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate(coordinate));
console.log(parseCoordinate("x:10,y:20"));

interface Persona {
    name: string;
    age: number;
    toJSON(): string;
}

class Person implements Persona {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    toJSON(): string {
        let obj = {
            name: this.name,
            age: this.age
        };
        return JSON.stringify(obj);
    }
 }
 
let priyanka: Person = new Person('Priyanka', 25);

function PersonFactory(name: string, age: number): Person {
    return new Person(name, age);
}

let javier: Person = PersonFactory('Javier', 40);

console.log(priyanka.toJSON());
console.log(javier.toJSON());
 