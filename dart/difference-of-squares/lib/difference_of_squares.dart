class DifferenceOfSquares {
  int squareOfSum(int n) {
    // n(n + 1)/2
    int sum = ((n * (n + 1))/2).round();
    return sum * sum;
  }

  int sumOfSquare(int n) {
    // n(n + 1)(2n + 1)/6
    return ((n * (n + 1) * ((2 * n) + 1)) / 6).round();
  }

  int differenceOfSquares(int n) {
    return squareOfSum(n) - sumOfSquare(n);
  }
}
