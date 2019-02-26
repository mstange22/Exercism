const countRectangles = (grid, i, j) => {
  let yPos = i;
  let xPos = j + 1;
  const topCorners = [];
  const leftCorners = [];
  let count = 0;

  // get potential top corners
  while (xPos < grid[yPos].length && grid[yPos][xPos] !== ' ') {
    if (grid[yPos][xPos] === '+') topCorners.push(xPos);
    xPos++;
  }

  if (topCorners.length === 0) return 0;

  // found at least one potential corner. check for left edge corners
  xPos = j;
  yPos = i + 1;

  while (yPos < grid.length && grid[yPos][xPos] !== ' ' && grid[yPos][xPos] !== '-') {
    if (grid[yPos][xPos] === '+') leftCorners.push(yPos);
    yPos++;
  }

  if (leftCorners.length === 0) return 0;

  // check if corners connect
  topCorners.forEach((topCornerXPos) => {
    yPos = i + 1;
    while (yPos < grid.length && grid[yPos][topCornerXPos] !== ' ' && grid[yPos][topCornerXPos] !== '-') {
      if (grid[yPos][topCornerXPos] === '+') {
        // found potential bottom right corner, check leftCorners for match
        if (leftCorners.includes(yPos)) {
          // run the leftCorner to see if it completes the rectangle
          for (let x = j; x <= topCornerXPos; x++) {
            if (grid[yPos][x] === ' ') {
              break;
            }
            if (x === topCornerXPos) count++;
          }
        }
      }
      yPos++;
    }
  });

  return count;
};

export const Rectangles = {
  count: (input) => {
    if (input.length < 2) return 0;
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === '+') {
          // found a corner
          count += countRectangles(input, i, j);
        }
      }
    }
    return count;
  },
};
