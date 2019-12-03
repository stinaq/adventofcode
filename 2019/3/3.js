function formatInput(input) {
  function parseInstructions(instructions) {
    return instructions.split(",").map(instruction => ({
      direction: instruction[0],
      distance: instruction.slice(1)
    }));
  }
  const temp = input.split(/\r?\n/);
  return {
    first: parseInstructions(temp[0]),
    second: parseInstructions(temp[1])
  };
}

function findNewCoordinate(instructions) {
  return instructions;
}

const part1 = input => {
  console.log("part 1");
  const data = formatInput(input);
  console.log(data);

  const vistedCoordinates = [];

  let currentPoint = { x: 0, y: 0 };
  data.first.forEach(instruction => {
    if (instruction.direction === "U") {
      currentPoint.y += Number(instruction.distance);
    } else if (instruction.direction === "D") {
      currentPoint.y -= Number(instruction.distance);
    } else if (instruction.direction === "L") {
      currentPoint.x -= Number(instruction.distance);
    } else if (instruction.direction === "R") {
      currentPoint.x += Number(instruction.distance);
    }
    vistedCoordinates.push([currentPoint.x, currentPoint.y].join(","));
  });

  console.log(vistedCoordinates);
};

const part2 = input => {
  console.log("part 2");
};

module.exports = { part1, part2 };
