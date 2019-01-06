const SHIFT = 'a'.charCodeAt();

export const isPangram = (incomingString) => {
  return incomingString
    .toLowerCase()
    .replace(/[^a-z]/, '')
    .split('')
    .reduce((map, char) => {
      map[char.charCodeAt() - SHIFT] = true;
      return map;
    }, new Array(26).fill(false))
    .every(el => el);
};
