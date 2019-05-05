class QueenAttack {
  white: [number, number]
  black: [number, number]

  constructor(queens: { black: [number, number], white: [number, number] }) {
    if (queens.black[0] === queens.white[0] && queens.black[1] === queens.white[1]) {
      throw new Error('Queens cannot share the same space')
    }
    this.white = queens.white
    this.black = queens.black
  }

  canAttack() {
    if (this.white[0] === this.black[0] || this.white[1] == this.black[1]) {
      return true
    }

    return Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1])
  }

  toString() {
    let res = ''
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i === this.white[0] && j === this.white[1]) {
          res += 'W'
        } else if (i === this.black[0] && j === this.black[1]) {
          res += 'B'
        } else {
          res += '_'
        }
        res += j === 7 ? '\n' : ' '
      }
    }
    return res
  }
}

export default QueenAttack