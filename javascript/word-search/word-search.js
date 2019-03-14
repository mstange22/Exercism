export default class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    const res = {};
    words.forEach((word) => {
      res[word] = undefined;
    });
    return res;
  }
}
