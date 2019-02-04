export class Matrix {
  constructor(matrix) {
    this.rows = matrix.split('\n')
      .map(row => row.trim())
      .map(row => row.split(' ')
      .map(r => Number(r)));

    this.columns = this.rows.reduce((columns, row, i) => {
      row.forEach((r, j) => {
        if (i == 0) {
          columns.push([row[j]]);
        } else {
          columns[j].push(r);
        }
      });
      return columns;
    }, []);

    this.saddlePoints = this.rows.reduce((accum, row, i) => {
      row.forEach((r, j) => {
        if (r === Math.max(...row) && r === Math.min(...this.columns[j])) {
          accum.push([i, j]);
        }
      });
      return accum;
    }, []);
  }
}