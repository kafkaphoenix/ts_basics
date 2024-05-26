import {addNumbers, addStrings, addStrings2, fetchData, helloPerson, introduce, printFormatted} from "./functions";

console.log(addNumbers(1, 2));
console.log(addStrings("Hello", "World"));
console.log(addStrings("Hello"));
console.log(addStrings2("Hello", 2));
printFormatted("Hello", "World");
fetchData("https://en.wikipedia.org/wiki/Main_Page").then(data => console.log(data));
console.log(introduce("Buenos días", "Pepe", "Juan", "Luis", "Ana"));

import {Person} from "./functions";
const p: Person = {name: "Pepe", age: 23};
console.log(helloPerson(p));