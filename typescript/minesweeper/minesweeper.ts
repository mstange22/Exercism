const isMine = (grid: string[], i: number, j: number) => {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && grid[i][j] === '*'
}

const countAdjacentMines = (grid: string[], row: number, col: number) => {
  let mineCount = 0
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (isMine(grid, i, j)) mineCount++;
    }
  }
  return mineCount
}

class Minesweeper {
  annotate(grid: string[]) {
    const res: string[] = [];
    for (let row = 0; row < grid.length; row++) {
      let line: string = ''
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] !== '*') {
          const count = countAdjacentMines(grid, row, col)
          line += count === 0 ? ' ' : count.toString()
        } else {
          line += '*'
        }
      }
      res.push(line)
    }
    return res
  }
}

export default Minesweeper
