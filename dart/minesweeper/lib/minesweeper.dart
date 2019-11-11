class Minesweeper {
  List<String> board = [];
  List<String> annoted = [];

  Minesweeper([List<String> inputBoard = const []]) {
    board = inputBoard;
    annoted = Iterable<int>.generate(board.length).toList()
    .map((i) => Iterable<int>.generate(board[i].length).toList()
      .map((j) => translateCell(i, j)).join()
    ).toList();
  }

  String translateCell(int i, int j) {
    if (board[i][j] == '*') {
      return '*';
    }
    // check around cell for mines
    int count = 0;
    for (int k = i - 1; k <= i + 1; k++) {
      for (int l = j - 1; l <= j + 1; l++) {
        if (k < 0 || k >= board.length || l < 0 || l >= board[k].length || board[k][l] != '*') {
          continue;
        }
        count += 1;
      }
    }
    return count == 0 ? ' ' : count.toString();
  }
}
