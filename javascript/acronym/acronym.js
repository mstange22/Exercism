export const parse = (s) => {
  return s
    .split(/[- ]/)
    .reduce((acc, t) => {
      acc += t[0].toUpperCase();
      // check for mixed case
      if (/^[A-Z]+[a-z]+[A-Z]+/.test(t)) {
        // add uppercase letters
        for (let i = 1; i < t.length; i++) {
          if (t[i] === t[i].toUpperCase()) acc += t[i];
        }
      }
      return acc;
    }, '');
};
