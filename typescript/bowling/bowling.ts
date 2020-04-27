export default class Bowling {
  frameScores = new Array(10).fill(0)
  frame: number = 1
  frameRoll: 1 | 2 = 1
  hasSpare = false
  strikes = new Array(12).fill(false)
  isDone = false

  constructor(private readonly rolls: number[]) {}

  processRoll(currRollIndex: number) {
    const currRollScore = this.rolls[currRollIndex]
    const currFrameIndex = this.frame - 1
    if (this.frame > 10 && !this.strikes[9] && !this.hasSpare) {
      throw new Error('Should not be able to roll after game is over')
    }

    // handle carry-overs
    if (this.hasSpare || (this.strikes[currFrameIndex - 1] && this.frame < 12)) {
      this.frameScores[currFrameIndex - 1] += currRollScore
      this.hasSpare = false;
    }
    if (this.strikes[currFrameIndex - 2] && this.strikes[currFrameIndex - 1] && this.frameRoll === 1) {
      this.frameScores[currFrameIndex - 2] += currRollScore
    }

    // process current frame
    if (this.frame <= 10) {
      this.frameScores[currFrameIndex] += currRollScore
    }
    if (this.frameRoll === 2) {
      if (this.rolls[currRollIndex - 1] + currRollScore > 10) {
        throw new Error('Pin count exceeds pins on the lane')
      }
      // spare
      if (this.rolls[currRollIndex - 1] + currRollScore === 10) {
        this.hasSpare = true
        if (this.frame > 10) {
          this.isDone = true
        }
      }
      this.frameRoll = 1
      this.frame++
    } else if (currRollScore === 10) { // strike
      this.strikes[currFrameIndex] = true
      this.frameRoll = 1
      this.frame++
    } else { // frameRoll === 1
      this.frameRoll++
      if (this.frame > 11) {
        this.frame++
      }
    }
  }

  score() {
    for (let i = 0; i < this.rolls.length; i++) {
      if (this.rolls[i] < 0 || this.rolls[i] > 10) {
        throw new Error('Pins must have a value from 0 to 10')
      }
      this.processRoll(i)
    }
    if (
      this.frame <= 10 ||
      (this.hasSpare && this.frame < 12) ||
      (this.strikes[9] && (
        (this.frame < 12) ||
        (this.strikes[10] && this.frame < 13)
      ))
    ) {
      throw new Error('Score cannot be taken until the end of the game')
    }
    return this.frameScores.reduce((accum, frame) => accum + frame, 0)
  }
}