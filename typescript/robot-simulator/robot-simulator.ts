enum Direction { north, east, south, west }

const isDirection = (bearing: string | Direction): bearing is Direction => {
  return bearing in Direction
}

const instructionKey: { [key: string]: string } = {
  'L': 'turnLeft',
  'R': 'turnRight',
  'A': 'advance',
}

export default class Robot {
  _bearing: Direction = 0
  _coordinates: number[] = [0, 0]

  constructor(x: number = 0, y: number = 0, bearing: string = 'north') {
    this.at(x, y)
    this.orient(bearing)
  }

  get bearing() {
    return this._bearing
  }

  get coordinates() {
    return this._coordinates
  }

  set bearing(bearing: Direction) {
    this._bearing = bearing
  }

  set coordinates(coordinates: number[]) {
    this._coordinates = coordinates
  }

  at(x: number, y: number) {
    this.coordinates = [x, y]
  }

  orient(bearing: string) {
    if (isDirection(bearing)) {
      this.bearing = bearing
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  turnRight() {
    const newDirection = (Number(Direction[this.bearing]) + 1) % 4
    this.orient(Direction[newDirection])
  }

  turnLeft() {
    const newDirection = (Number(Direction[this.bearing]) - 1 + 4) % 4
    this.orient(Direction[newDirection])
  }

  advance() {
    let [x, y] = this.coordinates
    switch (Number(Direction[this.bearing])) {
      case Number(Direction.north):
        y++
        break
      case Number(Direction.east):
        x++
        break
      case Number(Direction.south):
        y--
        break;
      case Number(Direction.west):
        x--
        break
      default:
        break
    }
    this.at(x, y)
  }

  instructions(instructions: string) {
    return [...instructions].map(i => instructionKey[i])
  }

  evaluate(instructions: string) {
    for (const command of instructions) {
      (this as any)[instructionKey[command]]()
    }
  }

}