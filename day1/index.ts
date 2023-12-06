import fs from "fs";
import { part1 } from "./part1";
import { part2 } from "./part2";

// Read input file
const inputFile = fs.readFileSync("./day1/input.txt", "utf-8");
const input = inputFile.split("\n");

console.log("Part 1 Answer: ", part1(input));
console.log("Part 2 Answer: ", part2(input));
