import input from "./3.json";

let gamma = "";
let epsilon = "";

for (let i = 0; i < input[0].length; i++) {
    let zeroes = 0;
    let ones = 0;

    for (const binary of input) {
        if (binary.charAt(i) === "0") {
            zeroes++;
        } else {
            ones++;
        }
    }

    if (zeroes > ones) {
        gamma += "0";
        epsilon += "1";
    } else {
        gamma += "1";
        epsilon += "0";
    }
}

const gammaNum = parseInt(gamma, 2);
const epsilonNum = parseInt(epsilon, 2);

console.log(`Power Consumption: ${gammaNum * epsilonNum}`);
