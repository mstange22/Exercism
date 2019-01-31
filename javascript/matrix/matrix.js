export class Matrix {
  constructor(matrix) {
    this.rows = matrix.split('\n')
      .map(row => row.split(' ')
      .map(r => Number(r)));
    this.columns = this.rows.reduce((columns, row, i) => {
      row.forEach((element, j) => {
        if (i == 0) {
          columns.push([row[j]]);
        } else {
          columns[j].push(element);
        }
      });
      return columns;
    }, []);
  }
}