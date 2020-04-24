export default class SpiralMatrix {
  static ofSize(n: number): number[][] {
    const res: number[][] = []
    let value = 1

    // first construct empty matrix
    for (let i = 0; i < n; i++) {
      res.push(new Array(n))
    }
    
    for (let i = 0; i < n / 2; i++) {
      for (let j = i; j < n - i; j++) res[i][j] = value++
      for (let j = i + 1; j < n - i; j++) {
        res[j][n - i - 1] = value++
      }
      for (let j = n - i - 2; j >= i; j--) {
        res[n - i - 1][j] = value++
      }
      for (let j = n - i - 2; j > i; j--) {
        res[j][i] = value++
      }
    }
    return res
  }
}