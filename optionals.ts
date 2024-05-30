function printIngredients(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`);
}
printIngredients("100ml", "eggs");
printIngredients("100ml", "eggs", "milk");

interface User {
    id: number;
    info?: {
        email: string;
    };
}

// function getEmail(user: User): string {
//     if (user.info) {
//         return user.info.email;
//     }
//     return "";
// }

// function getEmail(user: User): string {
//     return user?.info?.email ? user.info.email : "";
// }

function getEmail(user: User): string {
    return user?.info?.email ?? "";
}

const user: User = { id: 1, info: { email: "algo@mail.com" } };
console.log(getEmail(user));

function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log(`${x + y}`);
    callback?.();
}
addWithCallback(10, 20, () => console.log("hello"));