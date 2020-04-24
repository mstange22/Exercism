const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]]

export default class WordSearch {
  constructor(readonly grid: string[]) {}

  // return end coords or undefined
  searchDirection(word: string, rowNum: number, rowIndex: number, direction: number[]): number[] | undefined {
    for (const char of word) {
      rowNum += direction[0], rowIndex += direction[1]
      if (rowNum < 0 || rowNum >= this.grid.length || char !== this.grid[rowNum][rowIndex]) {
        return undefined
      }
    }
    return [rowNum + 1, rowIndex + 1]
  }

  // search every cell in grid, exit early if word is found
  search(word: string): { start: number[], end: number[] } | undefined {
    for (const [i, row] of this.grid.entries()) {
      for (const [j, char] of [...row].entries()) {
        if (char === word[0]) {
          // potential start.  Search in all directions
          for (const direction of DIRECTIONS) {
            const end = this.searchDirection(word.slice(1), i, j, direction)
            if (end) {
              return { start: [i + 1, j + 1], end }
            }
          }
        }
      }
    }
    return undefined
  }

  // reduce words down to an object
  public find = (words: string[]) => 
    words.reduce((accum: { [word:string]: { start: number[], end: number[] } | undefined }, word) => {
      accum[word] = this.search(word)
      return accum
    }, {})
}
