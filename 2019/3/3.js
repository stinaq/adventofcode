function formatInput(input) {
  function parseInstructions(instructions) {
    return instructions.split(",").map(instruction => ({
      direction: instruction[0],
      distance: Number(instruction.slice(1))
    }));
  }
  const temp = input.split(/\r?\n/);
  return {
    first: parseInstructions(temp[0]),
    second: parseInstructions(temp[1])
  };
}

function serializePointData(pointData) {
  return [pointData.x, pointData.y].join(",");
}

const part1 = input => {
  console.log("part 1");
  const data = formatInput(input);

  let currentPoint = { x: 0, y: 0 };
  const vistedCoordinates = [];
  data.first.forEach(instruction => {
    const { distance, direction } = instruction;
    for (let index = 0; index < distance; index++) {
      if (direction === "U") {
        currentPoint.y++;
      } else if (direction === "D") {
        currentPoint.y--;
      } else if (direction === "L") {
        currentPoint.x--;
      } else if (direction === "R") {
        currentPoint.x++;
      }
      vistedCoordinates.push(serializePointData(currentPoint));
    }
  });

  currentPoint = { x: 0, y: 0 };
  const intersectedCoordinates = [];
  data.second.forEach(instruction => {
    const { distance, direction } = instruction;
    for (let index = 0; index < distance; index++) {
      if (direction === "U") {
        currentPoint.y++;
      } else if (direction === "D") {
        currentPoint.y--;
      } else if (direction === "L") {
        currentPoint.x--;
      } else if (direction === "R") {
        currentPoint.x++;
      }
      const serializedPoint = serializePointData(currentPoint);
      if (vistedCoordinates.includes(serializedPoint)) {
        intersectedCoordinates.push(
          Math.abs(currentPoint.x) + Math.abs(currentPoint.y)
        );
      }
    }
  });
  return Math.min(...intersectedCoordinates);
};

const part2 = input => {
  console.log("part 2");
};

module.exports = { part1, part2 };
