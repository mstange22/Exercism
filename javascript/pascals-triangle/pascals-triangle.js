export class Triangle {
  constructor(n) {
    this.rows = [];
    // build n rows
    for (let i = 1; i <= n; i++) {
      // base case: push on row of [1]
      if (i === 1) {
        this.rows.push([1]);
      } else {
        // otherwise build new row from previous row
        const previousRow = this.rows[this.rows.length - 1];
        const row = [];
        for (let j = 0; j < i; j++) {
          // use values from left and right of current position (if exist)
          row.push((previousRow[j - 1] || 0) + (previousRow[j] || 0));
        }
        this.rows.push(row);
        // capture last row
        if (i === n) {
          this.lastRow = row;
        }
      }
    }
  }
}