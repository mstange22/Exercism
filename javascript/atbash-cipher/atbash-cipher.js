export const encode = (s) => {
  let counter = 1;
  let res = '';
  [...s].forEach((char) => {
    if (char.match(/[\w]/)) {
      if (char.match(/[\d]/)) {
        res += char;
      } else {
        res += String.fromCharCode('z'.charCodeAt(0) - (char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)));
      }
      if (counter % 5 === 0) res += ' ';
      counter++;
    }
  });
  return res.trim();
}
