const computer = require("../computer/computer");

function formatInput(input) {
  return input.split(",").map(Number);
}

const part1 = input => {
  console.log("part 1");
  const formattedInput = formatInput(input);
  const result = computer.runProgram(formattedInput, [1]);

  return result[0];
};

const part2 = input => {
  console.log("part 2");
};

module.exports = { part1, part2 };
