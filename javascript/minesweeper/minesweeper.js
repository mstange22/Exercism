let field;

const isMine = (i, j) => {
  return field[i] && field[i][j] === '*' ? 1 : 0;
}

export const annotate = (input) => {
  field = input.slice();
  const res = [];
  field.forEach((row, i) => {
    res.push([...row]);
    [...row].forEach((char, j) => {
      if (char !== '*') {
        const count = isMine(i - 1, j - 1) + isMine(i - 1, j) + isMine(i - 1, j + 1)
          + isMine(i, j - 1) + isMine(i, j + 1)
          + isMine(i + 1, j - 1) + isMine(i + 1, j) + isMine(i + 1, j + 1);
        if (count > 0) res[i][j] = count.toString();
      }
    });
    res[i] = res[i].join('');
  });
  return res;
};