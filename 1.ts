import input from "./1.json";

let prev = input[0];
let count = 0;

for (const n of input) {
    if (n > prev) count++;
    prev = n;
}

console.log(count);
