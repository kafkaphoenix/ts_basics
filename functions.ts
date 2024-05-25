function addNumbers(a:number, b:number):number {
    return a + b;
}

export default addNumbers;

export function addStrings(str1:string, str2:string="pepe"):string {
    return `${str1} ${str2}`;
}

export const addStrings2 = (str1:string, param:string|number):string => `${str1} ${param}`;

export const printFormatted = (str1:string, str2:string="pepe"):void => {
    console.log(`${str1} ${str2}`);
}

export const fetchData = (url:string) => Promise.resolve(`Data from ${url}`);

export function introduce(salutation:string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
}

export interface Person {
    name: string;
    age: number;
}

export const helloPerson = (person: Person): string => {
    return `Hello ${person.name} and age ${person.age}`;
}