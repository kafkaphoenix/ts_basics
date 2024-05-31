function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    const get = () => val;
    const set = (v: T) => {
        val = v;
    };
    return [get, set];
}

const [getSimpleState, setSimpleState] = simpleState(10);
console.log(getSimpleState());
setSimpleState(5);
console.log(getSimpleState());

const [getSimpleState2, setSimpleState2] = simpleState("string");
console.log(getSimpleState2());
setSimpleState2("string2");
console.log(getSimpleState2());

interface House<T> {
    address: T;
}

const house: House<string> = { address: "123 Main St." };
const house2: House<number> = { address: 123 };