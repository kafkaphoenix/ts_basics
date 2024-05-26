export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

export function multiplyArray(numbers: number[], changeNumber: (v: number) => number): number[] {
    return numbers.map(changeNumber);
}

console.log(multiplyArray([1, 2, 3], (v) => v * 10));

// functions as types
type changeNumber = (v: number) => number;

const multiply: changeNumber = (v: number) => v * 10;

console.log(multiply(5));

// create function inside function
export function createAdder(num: number): changeNumber {
    return (val: number) => num + val;
}
const addOne = createAdder(1);
const Add10: changeNumber =  (val) => 10 + val;
console.log(addOne(55));
console.log(Add10(55));