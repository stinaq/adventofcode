function formatInput(input) {
  return input.split(",").map(Number);
}

const part1 = input => {
  console.log("part 1");
  const formattedInput = formatInput(input);

  let opcode = formattedInput[0];
  let startIndex = 0;
  let endIndex = 4;
  while (opcode !== 99) {
    let currentOpArray = formattedInput.slice(startIndex, endIndex);

    let newValue;
    if (opcode === 1) {
      newValue =
        formattedInput[currentOpArray[1]] + formattedInput[currentOpArray[2]];
    } else if (opcode === 2) {
      newValue =
        formattedInput[currentOpArray[1]] * formattedInput[currentOpArray[2]];
    } else {
      throw new Error();
    }

    formattedInput[currentOpArray[3]] = newValue;

    startIndex = startIndex + 4;
    endIndex = endIndex + 4;
    opcode = formattedInput[startIndex];
  }

  return formattedInput[0];
};

const part2 = input => {
  console.log("part 2");
};

module.exports = { part1, part2 };
