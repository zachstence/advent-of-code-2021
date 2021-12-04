// import input from "./test.json";
import input from "./input.json";

const sum = (start: number, window: number): number => input.slice(start, start + window).reduce((prev, curr) => curr += prev);

const countIncreases = (window: number): number => {
    let prev = sum(0, window);
    let count = 0;
    
    for (let i = 1; i <= input.length - window; i++) {
        const s = sum(i, window);
        if (s > prev) count++;
        prev = s;
    }

    return count;
};

console.log(countIncreases(1));
console.log(countIncreases(3));
