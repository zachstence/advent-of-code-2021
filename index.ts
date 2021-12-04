import * as q1 from "./1";
import * as q2 from "./2";
import * as q3 from "./3";

const answers: string[][] = [
    [q1.p1().toString(), q1.p2().toString()],
    [q2.p1().toString(), q2.p2().toString()],
    [q3.p1().toString(), q3.p2().toString()],
];

const maxWidth = answers.flat().reduce((a, b) => a.length > b.length ? a : b).length;

console.log(
    " Q", "|",
    "P1".padStart(maxWidth, " "), "|",
    "P2".padStart(maxWidth, " "), "|"
);
console.log("---|" + ("-".repeat(maxWidth+2) + "|").repeat(2));
for (let q = 0; q < answers.length; q++) {
    const [a1, a2] = answers[q];

    const qs = (q + 1).toString().padStart(2, " ") + "";
    const a1s = a1.padStart(maxWidth, " ");
    const a2s = a2.padStart(maxWidth, " ");

    console.log(qs, "|", a1s, "|", a2s, "|");
}