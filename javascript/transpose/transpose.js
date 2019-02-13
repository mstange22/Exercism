export const transpose = (arr) => {
  if (arr.length === 0) return [];
  const maxLength = Math.max(...arr.map(row => row.length));
  return new Array(maxLength).fill('').map((row, i) => {
    for (let j = 0; j < arr.length; j++) {
      row += arr[j][i] || ' ';
    }
    return i === maxLength - 1 ? row.trimRight() : row;
  });
};
