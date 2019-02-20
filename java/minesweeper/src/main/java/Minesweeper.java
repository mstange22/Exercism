import java.util.ArrayList;
import java.util.List;

class MinesweeperBoard {
  private final List<String> board;
  MinesweeperBoard(List<String> board) {
    this.board = board;
  }
  
  List<String> withNumbers() {
    List<String> res = new ArrayList<String>();

    for (int i = 0; i < board.size(); i++) {
      StringBuilder s = new StringBuilder();
      for (int j = 0; j < board.get(i).length(); j++) {
        char c = board.get(i).charAt(j);
        if (c == '*') {
          s.append("*");
        } else {
          s.append(getAdjacentMineCount(i, j));
        }
      }
      res.add(s.toString());
    }
    return res;
  }
  
  char getAdjacentMineCount(int i, int j) {
    int count = 0;
    if (i >= 1) {
      String rowAbove = board.get(i - 1);
      if (j >= 1 && rowAbove.charAt(j - 1) == '*') count++;
      if (rowAbove.charAt(j) == '*') count++;
      if (j + 1 < rowAbove.length() && rowAbove.charAt(j + 1) == '*') count++;
    }

    String thisRow = board.get(i);
    if (j >= 1 && thisRow.charAt(j - 1) == '*') count++;
    if (j + 1 < thisRow.length() && thisRow.charAt(j + 1) == '*') count++;
    System.out.println("this row");

    if (i + 1 < board.size()) {
      String rowBelow = board.get(i + 1);
      if (j >= 1 && rowBelow.charAt(j - 1) == '*') count++;
      if (rowBelow.charAt(j) == '*') count++;
      if (j + 1 < rowBelow.length() && rowBelow.charAt(j + 1) == '*') count++;
    }
    return count == 0 ? ' ' : (char)(count + '0');
  }

}