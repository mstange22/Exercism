const digits = [
  ' _ | ||_|',
  '     |  |',
  ' _  _||_ ',
  ' _  _| _|',
  '   |_|  |',
  ' _ |_  _|',
  ' _ |_ |_|',
  ' _   |  |',
  ' _ |_||_|',
  ' _ |_| _|',
];

const readNumber = (number) => {
  if (digits.includes(number.join(''))) {
    return digits.indexOf(number.join('')).toString();
  }
  return '?';
};

export const convert = (inputString) => {
  const lines = inputString.split('\n');
  const numDigits = lines.length / 4;
  const digitsPerLine = lines[0].length / 3;
  const numbers = new Array(numDigits * digitsPerLine).fill().map(() => []);
  
  // parse each line in array
  for (let i = 0; i < lines.length; i++) {
    // skip blank lines
    if (i % 4 !== 3) {
      let digitPart = '';
      // set current number index based on line number
      let currNumIdx = 0 + (Math.floor(i / 4) * 3);
      for (let j = 0; j < lines[i].length; j++) {
        digitPart += lines[i][j];
        if (j % 3 === 2) {
          numbers[currNumIdx++].push(digitPart);
          digitPart = '';
        }
      }
    }
  }
  // reduce numbers array down to a string
  return numbers.reduce((acc, number, i) => {
    acc += readNumber(number);
    // write commas, if necessary
    if (lines.length > 4 && i % digitsPerLine === digitsPerLine - 1 && i !== numbers.length - 1) {
      acc += ',';
    }
    return acc;
  }, '');
};
