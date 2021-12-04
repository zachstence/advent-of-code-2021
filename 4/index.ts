import { readFileSync } from "fs";

const getBoards = (input: string) => {
    const boards: number[][][] = [];

    const lines = input.split("\n").slice(2).filter(s => s.length);

    let line = 0;
    let boardNum = 0;
    while (line < 5) {
        const boardLines = lines.slice(boardNum * 5, (boardNum+1)*5).map(line => line.split(" ").filter(s => s.length).map(s => parseInt(s)));
        if (!boardLines.length) break;
        boards.push(boardLines);
        line++;
        boardNum++;
    }

    return boards;
};

const getTrackers = (x: number): boolean[][][] => {
    return Array.from({length: x}, () => Array.from({length: 5}, () => Array.from({length: 5}, () => false)));
}

const transpose = <T>(arr: T[][]): T[][] => arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));

const sum = (arr: number[]): number => arr.reduce((a, b) => a + b);

const check = (board: number[][], tracker: boolean[][]): number[] => {
    // Check rows
    for (let r = 0; r < tracker.length; r++) {
        if (tracker[r].every(x => x === true)) return board[r];
    }

    // Check cols
    const trackerT = transpose(tracker);
    const boardT = transpose(board);
    for (let c = 0; c < trackerT.length; c++) {
        if (trackerT[c].every(x => x === true)) return boardT[c];
    }

    return [];
}

const sumUnmarked = (board: number[][], tracker: boolean[][]): number => {
    let sum = 0;
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (!tracker[r][c]) sum += board[r][c];
        }
    }
    return sum;
};

export const p1 = () => {
    const input = readFileSync("4/input.txt").toString();

    const vals = input.split("\n")[0].split(",").map(s => parseInt(s));

    const boards = getBoards(input);

    const trackers = getTrackers(boards.length);

    for (const val of vals) {

        for (let b = 0; b < boards.length; b++) {
            const board = boards[b];
            const tracker = trackers[b];

            for (let r = 0; r < board.length; r++) {
                for (let c = 0; c < board[0].length; c++) {
                    if (board[r][c] === val) {
                        tracker[r][c] = true;
                    }
                }
            }

            const winning = check(board, tracker);
            if (winning.length) {
                console.log(winning);
                console.log(board);
                console.log(tracker);
                const s = sumUnmarked(board, tracker);
                console.log(s);

                return s * val;
            }

        }


    }


    return 0;
}

export const p2 = () => 0;