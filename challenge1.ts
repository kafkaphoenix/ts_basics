interface House {
    name: string;
    planets: string|string[];
}

interface HouseWithID extends House {
    id: number;
}

import housesData from "./data/houses.json";

const jsonArrayToString: string = JSON.stringify(housesData);
// const stringToJsonArray: House[] = JSON.parse(jsonArrayToString);
// console.log(stringToJsonArray);

type Filter = (house: House) => boolean;
function findHouses(houses: string|House[], filter?: Filter): HouseWithID[] {
    let housesArray: House[] = [];
    if (typeof houses === "string") {
        housesArray = JSON.parse(houses);
    } else {
        housesArray = houses;
    }
    let houseWithID: HouseWithID[] = [];
    let house: House;
    for (let i = 0; i < housesArray.length; i++) {
        house = housesArray[i];
        if (filter) {
            if (filter(house)) {
                houseWithID.push({id: i, ...house});
                return houseWithID;
            }
        } else {
            houseWithID.push({id: i, ...house});
        }
    }
    return houseWithID;
}
console.log(findHouses(jsonArrayToString));
console.log(findHouses(housesData));

console.log(
  findHouses(JSON.stringify(housesData), ({ name }) => name === "Atreides")
);

console.log(findHouses(housesData, ({ name }) => name === "Harkonnen"));