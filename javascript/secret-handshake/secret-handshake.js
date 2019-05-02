const EVENTS = [
  'wink',
  'double blink',
  'close your eyes',
  'jump',
];

export const secretHandshake = (input) => {
  if (!/^[\d]+$/.test(input)) {
    throw new Error('Handshake must be a number')
  }
  return input.toString(2).split('')
    .reverse()
    .reduce((accum, digit, i) => {
      if (i < 4 && digit === '1') {
        accum.push(EVENTS[i]);
      } else if (i === 4 && digit === '1') {
        accum.reverse();
      }
      return accum;
    }, []);
};