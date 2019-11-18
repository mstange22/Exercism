class Squares(val n: Int) {
  fun squareOfSum(): Int = (n * (n + 1) / 2).square();
  fun sumOfSquares() = n * (n + 1) * (2 * n + 1) / 6
  fun difference() = squareOfSum() - sumOfSquares()
}

fun Int.square() = this * this