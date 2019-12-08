const END = 99;
const ADD = 1;
const MULTIPLY = 2;

const runProgram = (instructions, input) => {
  function readNextInstruction(computer) {
    const current = computer.program[computer.pointer];
    computer.pointer++;
    return current;
  }
  const memory = {
    pointer: 0,
    program: undefined,
    shouldContinue: true,
    input: undefined
  };

  memory.program = [...instructions];
  memory.input = input;

  let opcode = readNextInstruction(memory);
  while (memory.shouldContinue) {
    switch (opcode) {
      case ADD:
        let sum =
          memory.program[readNextInstruction(memory)] +
          memory.program[readNextInstruction(memory)];
        memory.program[readNextInstruction(memory)] = sum;
        break;
      case MULTIPLY:
        let product =
          memory.program[readNextInstruction(memory)] *
          memory.program[readNextInstruction(memory)];
        memory.program[readNextInstruction(memory)] = product;
        break;

      default:
        throw new Error("Unknown opcode");
    }
    opcode = readNextInstruction(memory);
    memory.shouldContinue = opcode !== END;
  }

  return memory.program;
};

module.exports = { runProgram };
