import input from "./2.json";

const isPart2: boolean = true;

type Direction = "forward" | "down" | "up";

const getDirection = (s: string): Direction => {
    return s.split(" ")[0] as Direction;
};

const getAmount = (s: string): number => {
    return parseInt(s.split(" ")[1]);
};

let horizontal = 0;
let depth = 0;
let aim = 0;

for (const s of input) {
    const dir = getDirection(s);
    const amount = getAmount(s);

    if (!isPart2) {
        switch (dir) {
            case "forward":
                horizontal += amount;
                break;
            case "up":
                depth -= amount;
                break;
            case "down":
                depth += amount;
                break;
        }
    } else {
        switch (dir) {
            case "forward":
                horizontal += amount;
                depth += amount * aim;
                break;
            case "up":
                aim -= amount;
                break;
            case "down":
                aim += amount;
                break;
        }
    }
}

console.log(`Horizontal: ${horizontal}`);
console.log(`Depth: ${depth}`);

console.log(`Answer: ${horizontal * depth}`);
