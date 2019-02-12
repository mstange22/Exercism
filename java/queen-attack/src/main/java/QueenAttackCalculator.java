import java.lang.Math;

class Queen {
  protected final int row;
  protected final int col;

  Queen(int row, int col) {
    this.row = row;
    this.col = col;
    validatePosition();
  }

  private void validatePosition() {
    if (this.row < 0) {
      throw new IllegalArgumentException("Queen position must have positive row.");
    }
    if (this.row > 7) {
      throw new IllegalArgumentException("Queen position must have row <= 7.");
    }
    if (this.col < 0) {
      throw new IllegalArgumentException("Queen position must have positive column.");
    }
    if (this.col > 7) {
      throw new IllegalArgumentException("Queen position must have column <= 7.");
    }
  }
}

class QueenAttackCalculator {
  private final Queen white;
  private final Queen black;

  QueenAttackCalculator(Queen white, Queen black) {
    if (white == null || black == null) {
      throw new IllegalArgumentException("You must supply valid positions for both Queens.");
    }
    if (white.row == black.row && white.col == black.col) {
      throw new IllegalArgumentException("Queens cannot occupy the same position.");
    }
    this.white = white;
    this.black = black;
  }

  boolean canQueensAttackOneAnother() {
    // check rows and columns
    if (this.white.row == this.black.row || this.white.col == this.black.col) {
      return true;
    }
    // check diagonals
    int rowDiff = this.white.row - this.black.row;
    int colDiff = this.white.col - this.black.col;
    if (Math.abs(rowDiff) == Math.abs(colDiff)) {
      return true;
    }
    return false;
  }
}
