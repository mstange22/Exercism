class MinesweeperBoard(val inputBoard: List<String>) {
  fun withNumbers() = inputBoard.mapIndexed {
    i, row -> if (row == "") "" else row.mapIndexed {
      j, e -> translateCell(e, i, j)
    }.joinToString("")
  }

  fun translateCell(cell: Char, i: Int, j: Int): Char {
    println("in translateCell: $cell, i: $i, j: $j")
    if (cell == '*') {
      return cell
    }

    var count = 0

    // count surrounding mines
    for (k in i - 1..i +1) {
      for (l in j - 1..j + 1) {
        if (k < 0 || k > inputBoard.size - 1 || l < 0 || l > inputBoard[k].length - 1 || (k == i && l == j)) {
          continue
        } else if (inputBoard[k][l] == '*') {
          count += 1
        }
      }
    }
    return if (count == 0) ' ' else (count + '0'.toInt()).toChar()
  }
}