export class Squares {
  constructor(n) {
    this.squareOfSum = (((n * n) + n) / 2) ** 2;
    this.sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}