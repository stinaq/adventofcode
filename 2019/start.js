#!/usr/bin/env node
const fs = require("fs");

console.log("=======================");
console.log("ADVENT OF CODE 2019");
console.log("=======================");

// console.log("DAY 1");
// const fileName1 = __dirname + "/1/input.txt";
// const content1 = fs.readFileSync(fileName1, "utf8");
// const one = require("./1/1");
// console.log(one.part1(content1));
// console.log(one.part2(content1));

// console.log("DAY 2");
// const fileName2 = __dirname + "/2/input.txt";
// const content2 = fs.readFileSync(fileName2, "utf8");
// const two = require("./2/2");
// console.log(two.part1(content2));
// console.log(one.part2(content1));

console.log("DAY 3");
const fileName3 = __dirname + "/3/input.txt";
const content3 = fs.readFileSync(fileName3, "utf8");
const three = require("./3/3");
console.log(three.part1(content3));
// console.log(one.part2(content1));
