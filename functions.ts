// export
export function addNumbers(a:number, b:number):number {
    return a + b;
}

// export default addNumbers; it can be used in the importing file without curly braces but only one default export per file

// default value and formatting
export function addStrings(str1:string, str2:string="pepe"):string {
    return `${str1} ${str2}`;
}

// arrow function, union type
export const addStrings2 = (str1:string, param:string|number):string => `${str1} ${param}`;

export const printFormatted = (str1:string, str2:string="pepe"):void => {
    console.log(`${str1} ${str2}`);
}

export const fetchData = (url:string) => Promise.resolve(`Data from ${url}`);

// optional parameters
export function introduce(salutation:string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
}

// interfaces
export interface Person {
    name: string;
    age: number;
}

export const helloPerson = (person: Person): string => {
    return `Hello ${person.name} and age ${person.age}`;
}