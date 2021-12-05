import { readInput } from "../readLines";

const input = readInput("5");

const printGrid = (grid: number[][]): void => {
    for (const row of grid) {
        console.log(row.join(" "));
    }
    console.log();
};

const LINE_REGEX = /(\d+),(\d+) -> (\d+),(\d+)/;


let maxPoint = 0;
for (const line of input) {
    const matches = line.match(LINE_REGEX);
    if (!matches) throw new Error(`Could not parse line ${line}`);

    const x1 = parseInt(matches[1]);
    const y1 = parseInt(matches[2]);
    const x2 = parseInt(matches[3]);
    const y2 = parseInt(matches[4]);

    maxPoint = Math.max(maxPoint, x1, y1, x2, y2);
}

const grid = Array.from({length: maxPoint + 1}, () => Array.from({length: maxPoint + 1}, () => 0));

for (const line of input) {
    const matches = line.match(LINE_REGEX);
    if (!matches) throw new Error(`Could not parse line ${line}`);

    const x1 = parseInt(matches[1]);
    const y1 = parseInt(matches[2]);
    const x2 = parseInt(matches[3]);
    const y2 = parseInt(matches[4]);

    if (x1 === x2) { // Horizontal
        const start = Math.min(y1, y2);
        const end = Math.max(y1, y2);
        for (let y = start; y <= end; y++) {
            grid[y][x1]++;
        }
    } else if (y1 === y2) { // Vertical
        const start = Math.min(x1, x2);
        const end = Math.max(x1, x2);
        for (let x = start; x <= end; x++) {
            grid[y1][x]++;
        }
    } else if (true) { // Diagonal
        const xInc = x1 < x2 ? 1 : -1;
        const yInc = y1 < y2 ? 1 : -1;

        let x = x1;
        let y = y1;

        while (x !== x2 && y !== y2) {
            grid[y][x]++;
            x += xInc;
            y += yInc;
        }
        grid[y][x]++;
    }

    // console.log(`After ${x1},${y1} -> ${x2},${y2}: `);
    // printGrid(grid);
}

let dangerous = 0;

for (const row of grid) {
    for (const cell of row) {
        if (cell >= 2) dangerous++;
    }
}

console.log(dangerous);