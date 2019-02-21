import java.util.List;
import java.util.ArrayList;
import java.util.stream.IntStream;

class BowlingGame  {
  List<Integer> rolls = new ArrayList<Integer>();

  void roll(int pins) {
    this.rolls.add(pins);
  }

  int score() {
    int currFrame = 1;
    int rollNum = 1;
    int[] frameScores = new int[11];
    frameScores[0] = 0;

    for (int i = 0; i < this.rolls.size(); i++) {
      int pins = this.rolls.get(i);
      if (pins < 0) throw new IllegalStateException("Negative roll is invalid");
      if (pins > 10) throw new IllegalStateException("Pin count exceeds pins on the lane");
      if (currFrame > 10) throw new IllegalStateException("Cannot roll after game is over");

      if (rollNum == 1) {
        // strike
        if (pins == 10) {
          if (i + 1 == this.rolls.size()) {
            throw new IllegalStateException("Score cannot be taken until the end of the game");
          }
          int nextRoll = this.rolls.get(i + 1);
          if (i + 2 == this.rolls.size()) {
            throw new IllegalStateException("Score cannot be taken until the end of the game");
          }
          int nextNextRoll = this.rolls.get(i + 2);
          if (nextRoll > 10 || nextNextRoll > 10) {
            throw new IllegalStateException("Pin count exceeds pins on the lane");
          }
          if (currFrame == 10 && nextRoll != 10 && nextRoll + nextNextRoll > 10) {
            throw new IllegalStateException("Pin count exceeds pins on the lane");
          }
          frameScores[currFrame] = pins + nextRoll + nextNextRoll;
          if (currFrame == 10) {
            // skip last two rolls if 10th frame
            i += 2;
          }
          currFrame++;
        } else {
          frameScores[currFrame] = pins;
          rollNum = 2;
        }
      } else if (rollNum == 2) {
        if (frameScores[currFrame] + pins > 10) {
          throw new IllegalStateException("Pin count exceeds pins on the lane");
        }
        // spare
        if (pins + frameScores[currFrame] == 10) {
          if (i + 1 == this.rolls.size()) {
            throw new IllegalStateException("Score cannot be taken until the end of the game");
          }
          frameScores[currFrame] += pins + this.rolls.get(i + 1);
          if (currFrame == 10) {
            // skip last roll if 10th frame
            i++;
          }
        } else {
          frameScores[currFrame] += pins;
        }
        currFrame++;
        rollNum = 1;
      }
    }
    if (currFrame < 10) throw new IllegalStateException("Score cannot be taken until the end of the game");
    return IntStream.of(frameScores).sum();
  }
}