#!/usr/bin/env node

function formatInput(input) {
  return input.split(/\r?\n/);
}

const part1 = input => {
  console.log("part 1");
  const formattedInput = formatInput(input);

  return formattedInput.reduce((acc, current) => {
    return acc + Math.floor(current / 3) - 2;
  }, 0);
};

const part2 = input => {
  console.log("part 2");
  const formattedInput = formatInput(input);

  return formattedInput.reduce((acc, current) => {
    function calculateFuelNeeded(mass) {
      const fuelNeeded = Math.floor(mass / 3) - 2;

      if (fuelNeeded < 1) {
        return 0;
      }

      return fuelNeeded + calculateFuelNeeded(fuelNeeded);
    }

    const result = calculateFuelNeeded(current);
    console.log(result);
    return acc + result;
  }, 0);
};

//

module.exports = { part1, part2 };
