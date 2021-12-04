import { readInput } from "../readLines";

const input = readInput("2");

type Direction = "forward" | "down" | "up";
interface Position {
    horizontal: number;
    depth: number;
}

const getDirection = (s: string): Direction => {
    return s.split(" ")[0] as Direction;
};

const getAmount = (s: string): number => {
    return parseInt(s.split(" ")[1]);
};

const getPosition = (isPart2: boolean): Position => {
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

    return {horizontal, depth};
}

export const p1 = () => {
    const pos = getPosition(false);
    return pos.horizontal * pos.depth;
}

export const p2 = () => {
    const pos = getPosition(true);
    return pos.horizontal * pos.depth;
}