data class MatrixCoordinate(val row: Int, val col: Int)

class Matrix(val matrix: List<List<Int>>) {

  var saddlePoints = setOf<MatrixCoordinate>()

  fun getRowSaddlePoints(i: Int, row: List<Int>): Set<MatrixCoordinate> {
    val rowMax = row.max()
    return row.foldIndexed(setOf<MatrixCoordinate>()) { j, points, _ ->
      val cell = matrix[i][j]
      if (cell == rowMax && cell == matrix.map { it -> it[j] }.min())
        points.union(setOf(MatrixCoordinate(i + 1, j + 1)))
      else points
    }
  }

  init {
    saddlePoints = matrix.foldIndexed(setOf<MatrixCoordinate>()) { i, accum, row -> accum.union(getRowSaddlePoints(i, row)) }
  }
}
