class Words {
  count(words) {
    return words
      .toLowerCase()
      .trim()
      .split(/\s/)
      .reduce((map, word) => {
        if (word === '') return map;
        if (map[word] && typeof map[word] === 'number') map[word]++;
        else map[word] = 1;
        return map;
      }, {});
  }
}

export default Words;