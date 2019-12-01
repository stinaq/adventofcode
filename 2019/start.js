#!/usr/bin/env node
const fs = require("fs");

console.log("=======================");
console.log("ADVENT OF CODE 2019");
console.log("=======================");

console.log("DAY 1");
const fileName1 = __dirname + "/1/input.txt";
const content1 = fs.readFileSync(fileName1, "utf8");
const one = require("./1/1");
console.log(one.part1(content1));
console.log(one.part2(content1));
