type ThreeCordinates = [number, number, number];

function add3DCoordinates(
  c1: ThreeCordinates,
  c2: ThreeCordinates
): ThreeCordinates {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinates([0, 0, 0], [10, 20, 30]));

type funct1 = () => string;
type funct2 = (v: string) => void;

function simpleStringState(initial: string): [funct1, funct2] {
    let str: string = initial;
    const get: funct1 = () => str;
    const set: funct2 = (v: string) => {
        str = v;
    };
    return [get, set];
}

const [getStr, setStr] = simpleStringState('hello');
console.log(getStr());
setStr('goodbye');
console.log(getStr());