#!/usr/bin/env node

function checkIfFits(possiblePassword) {
  let hasDouble = false;
  let hasDecreasing = false;
  const digits = Array.from(possiblePassword.toString()).map(Number);
  digits.forEach((number, index) => {
    const prevNumber = digits[index - 1];

    if (prevNumber !== undefined) {
      if (number === prevNumber) hasDouble = true;
      if (number < prevNumber) hasDecreasing = true;
    }
  });
  return hasDouble && !hasDecreasing;
}

const part1 = () => {
  console.log("part 1");
  const inputStart = 356261;
  const inputEnd = 846303;
  let numberOfFitting = 0;
  for (let current = inputStart; current <= inputEnd; current++) {
    const fits = checkIfFits(current);
    if (fits) {
      numberOfFitting += 1;
    }
  }
  return numberOfFitting;
};

const part2 = input => {
  console.log("part 2");
};

//

module.exports = { part1, part2 };
