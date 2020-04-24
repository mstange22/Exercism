const nextGridPosition: {[direction: string]: (i: number, j: number) => number[]} = {
  LTR: (i: number, j: number) => [i, j + 1],
  RTL: (i: number, j: number) => [i, j - 1],
  TTB: (i: number, j: number) => [i + 1, j],
  BTT: (i: number, j: number) => [i - 1, j],
  TLTBR: (i: number, j: number) => [i + 1, j + 1],
  BRTTL: (i: number, j: number) => [i - 1, j - 1],
  BLTTR: (i: number, j: number) => [i - 1, j + 1],
  TRTBL: (i: number, j: number) => [i + 1, j - 1],
}

export default class WordSearch {
  constructor(readonly grid: string[]) {}

  searchDirection(word: string, rowNum: number, rowIndex: number, direction: string): number[] | undefined {
    for (const char of word) {
      [rowNum, rowIndex] = nextGridPosition[direction](rowNum, rowIndex)
      if (rowNum < 0 || rowNum === this.grid.length || char !== this.grid[rowNum][rowIndex]) {
        return undefined
      }
    }
    return [rowNum + 1, rowIndex + 1]
  }

  search(word: string): { start: number[], end: number[] } | undefined {
    for (const [i, row] of this.grid.entries()) {
      for (const [j, char] of [...row].entries()) {
        if (char === word[0]) {
          for (const direction of Object.keys(nextGridPosition)) {
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

  public find = (words: string[]) => 
    words.reduce((accum: { [word:string]: { start: number[], end: number[] } | undefined }, word) => {
      accum[word] = this.search(word)
      return accum
    }, {})
}
