public struct Squares {
  var squareOfSum: Int
  var sumOfSquares: Int
  var differenceOfSquares: Int

  init(_ n: Int) {
    let sum = n * (n + 1) / 2
    squareOfSum = sum * sum
    sumOfSquares = n * (n + 1) * ((2 * n) + 1) / 6
    differenceOfSquares = squareOfSum - sumOfSquares
  }
}