class Squares(val n: Int) {
  fun squareOfSum(): Int {
    var sum = n * (n + 1) / 2
    return sum * sum
  }
  fun sumOfSquares() = n * (n + 1) * (2 * n + 1) / 6
  fun difference() = squareOfSum() - sumOfSquares()
}