import { readFileSync } from "fs"

export const readInput = (problem: string, test = false): string[] => {
    const path = `${problem}/${test ? "test" : "input"}.txt`;
    return readFileSync(path).toString().split("\n");
}