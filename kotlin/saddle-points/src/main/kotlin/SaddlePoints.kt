data class MatrixCoordinate(val row: Int, val col: Int)

class Matrix(val matrix: List<List<Int>>) {

  var saddlePoints = mutableSetOf<MatrixCoordinate>()

  init {
    for (i in 0..matrix.size - 1) {
      val row = matrix[i]
      for (j in 0..row.size - 1) {
        val cell = matrix[i][j];
        if (cell == row.max()) {
          // check if cell is a column min
          if (isColumnMin(j, cell)) {
            saddlePoints.add(MatrixCoordinate(i + 1, j + 1))
          }
        }
      }
    }
  }

  private fun isColumnMin(col: Int, value: Int): Boolean {
    for (i in 0..matrix.size - 1) {
      if (matrix[i][col] < value) {
        return false
      }
    }
    return true
  }
}