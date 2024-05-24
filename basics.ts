let username: string = "Jack";
let hasLoggedIn: boolean = true;

username += " Deo";

console.log(username);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
    name: string;
    age: number;
}

const myPerson: Person = {
    name: "Jack",
    age: 25,
};

const ids: Record<number, string> = {
    10: "a",
    20: "b",
};

ids[30] = "c";

if (ids[30] === "c") {
    console.log("ids[30] is c");
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}

[1, 2, 3].forEach((n) => console.log(n));
const out = [4, 5, 6].map((n) => `num ${n}`);
console.log(out);

