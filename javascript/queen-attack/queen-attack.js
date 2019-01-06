class Queens {
  constructor(positions) {
    if (!positions) {
      this.white = [0, 3];
      this.black =[7, 3];
    } else if (this.isSamePosition(positions)) {
      throw new Error('Queens cannot share the same space');
    } else {
      this.white = positions.white;
      this.black = positions.black;
    }
  }

  isSamePosition(positions) {
    if (positions.black[0] === positions.white[0] && positions.black[1] === positions.white[1]) return true;
    return false;
  }

  toString() {
    let board = '';
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i === this.white[0] && j === this.white[1]) board += 'W ';
        else if (i === this.black[0] && j === this.black[1]) board += 'B ';
        else board += '_ ';
      }
      // replace last space with newline
      board = board.slice(0, -1) + '\n';
    }
    return board;
  }

  canAttack() {
    if (this.white[0] === this.black[0] || this.white[1] === this.black[1]) return true;
    if (Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1])) return true;
    return false;
  }
}

export default Queens;