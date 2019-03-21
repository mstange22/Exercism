export default class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  findEndPosition(word, i, j, direction) {
    let end;

    if (i < 0 || i >= this.grid.length || j < 0 || j >= this.grid[i].length) {
      return null;
    }

    if (this.grid[i][j] === word[0]) {
      if (word.length === 1) return [i, j];
      word = word.slice(1);
      switch (direction) {
        case 'ul':
          end = this.findEndPosition(word, i - 1, j - 1, direction);
          if (end) return end;
          break;
        case 'u':
          end = this.findEndPosition(word, i - 1, j, direction);
          if (end) return end;
          break;
        case 'ur':
          end = this.findEndPosition(word, i - 1, j + 1, direction);
          if (end) return end;
          break;
        case 'l':
          end = this.findEndPosition(word, i, j - 1, direction);
          if (end) return end;
          break;
        case 'r':
          end = this.findEndPosition(word, i, j + 1, direction);
          if (end) return end;
          break;
        case 'dl':
          end = this.findEndPosition(word, i + 1, j - 1, direction);
          if (end) return end;
          break;
        case 'd':
          end = this.findEndPosition(word, i + 1, j, direction);
          if (end) return end;
          break;
        case 'dr':
          end = this.findEndPosition(word, i + 1, j + 1, direction);
          if (end) return end;
          break;
        default:
          break;
      }
    }
    return end;
  }

  getPotentialDirections(char, i, j) {
    const potentialDirections = [];
    if (i > 0) {
      if (this.grid[i - 1][j - 1] === char) potentialDirections.push('ul');
      if (this.grid[i - 1][j] === char) potentialDirections.push('u');
      if (this.grid[i - 1][j + 1] === char) potentialDirections.push('ur');
    }
    if (this.grid[i][j - 1] === char) potentialDirections.push('l');
    if (this.grid[i][j + 1] === char) potentialDirections.push('r');
    if (i + 1 < this.grid.length) {
      if (this.grid[i + 1][j - 1] === char) potentialDirections.push('dl');
      if (this.grid[i + 1][j] === char) potentialDirections.push('d');
      if (this.grid[i + 1][j + 1] === char) potentialDirections.push('dr');
    }
    return potentialDirections;
  }

  findWord(word) {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        // found a potential start
        if (this.grid[i][j] === word[0]) {
          const directions = this.getPotentialDirections(word[1], i, j);
          for (const direction of directions) {
            const end = this.findEndPosition(word, i, j, direction);
            if (end) return { start: [i + 1, j + 1], end: [end[0] + 1, end[1] + 1] };
          }
        }
      }
    }
    return undefined;
  }

  find(words) {
    const res = {};
    words.forEach((word) => {
      res[word] = this.findWord(word);
    });
    return res;
  }
}
