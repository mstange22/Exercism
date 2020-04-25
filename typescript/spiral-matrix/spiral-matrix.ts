export default class SpiralMatrix {
  static ofSize(n: number): number[][] {
    const res: number[][] = []
    let value = 1

    // first construct empty matrix
    for (let i = 0; i < n; i++) {
      res.push(new Array(n))
    }
    
    // wrap around matrix, filling in cells in order
    for (let i = 0; i < n / 2; i++) {
      // left-to-right
      for (let j = i; j < n - i; j++) {
        res[i][j] = value++
      }
      // down
      for (let j = i + 1; j < n - i; j++) {
        res[j][n - i - 1] = value++
      }
      // right-to-left
      for (let j = n - i - 2; j >= i; j--) {
        res[n - i - 1][j] = value++
      }
      // up
      for (let j = n - i - 2; j > i; j--) {
        res[j][i] = value++
      }
    }
    return res
  }
}