const DIRECTIONS = ['north', 'east', 'south','west'];
const INSTRUCTIONS = {
  L: 'turnLeft',
  R: 'turnRight',
  A: 'advance',
}

export class InvalidInputError extends Error {
  constructor(message) {
    super(message);
  }
}

export class Robot {
  static instructions(instructions) {
    const listOfInstructions = []
    for (const instruction of instructions) {
      listOfInstructions.push(INSTRUCTIONS[instruction])
    }
    return listOfInstructions;
  }

  orient(bearing) {
    if (!DIRECTIONS.includes(bearing)) {
      throw new InvalidInputError('Invalid bearing');
    }
    this.bearing = bearing;
  }

  turnRight() {
    this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing) + 1) % 4];
  }

  turnLeft() {
    this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing) - 1 + 4) % 4];
  }

  at(x, y) {
    this.x = x;
    this.y = y;
    this.coordinates = [x, y];
  }

  advance() {
    if (this.bearing === 'north') this.coordinates = [this.coordinates[0], this.coordinates[1] + 1];
    else if (this.bearing === 'east') this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]];
    else if (this.bearing === 'south') this.coordinates = [this.coordinates[0], this.coordinates[1] - 1];
    else this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]];
  }

  place(info) {
    this.coordinates = [info.x, info.y];
    this.bearing = info.direction;
  }

  evaluate(instructions) {
    const listOfInstructions = Robot.instructions(instructions);
    for (const instruction of listOfInstructions) {
      this[instruction]();
    }
  }
}
