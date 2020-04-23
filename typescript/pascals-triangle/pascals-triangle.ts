export default class Triangle {
  constructor(private readonly _rows: number) {}

  get rows() {
    const res: number[][] = []
    for (let i = 0; i < this._rows; i++) {
      const row: number[] = []
      for (let j = 0; j <= i; j++) {
        row.push(j === 0 || j === i ? 1 : res[i - 1][j - 1] + res[i - 1][j] )
      }
      res.push(row)
    }
    return res
  }
  
  get lastRow() {
    return this.rows[this.rows.length - 1]
  }
}
