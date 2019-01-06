export const isIsogram = (s) => {
  const map = new Array(125).fill(0);
  for (let i = 0; i < s.length; i++) {
    const code = s[i].toLowerCase().charCodeAt();
    if (code >= 97 && code <= 122) {
      if (map[code] === 1) return false;
      map[code] = 1;
    }
  }
  return true;
};
