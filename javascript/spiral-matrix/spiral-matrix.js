export const SpiralMatrix = {
  ofSize: (n) => {
    // allocate space
    const res = new Array(n).fill().map(() => new Array(n));

    // define initial boundaries
    let minRow = -1;
    let minCol = -1;
    let maxCol = n;
    let maxRow = n;

    // initialize position pointers
    let row = 0;
    let col = 0;

    let currNum = 1;
    
    // make one spiral cycle. After each direction, check
    // if complete.  Rinse, repeat.
    while (currNum <= n * n) {
      // right
      while (col < maxCol) {
        res[row][col++] = currNum++;
      }
      if (currNum > n * n) {
        break;
      }
      minRow++;
      col--;
      row++;
  
      // down
      while (row < maxRow) {
        res[row++][col] = currNum++;
      }

      if (currNum > n * n) {
        break;
      }
      maxCol--;
      row--;
      col--;
  
      // left
      while (col > minCol) {
        res[row][col--] = currNum++;
      }
      if (currNum > n * n) {
        break;
      }
      maxRow--;
      col++;
      row--;
  
      // up
      while (row > minRow) {
        res[row--][col] = currNum++;
      }
      minCol++;
      row++;
      col++;
    }

    return res;
  },
};
