const convertTeens = (num) => {
  if (num === 11) return 'eleven';
  if (num === 12) return 'twelve';
  if (num === 13) return 'thirteen';
  if (num === 14) return 'fourteen';
  if (num === 15) return 'fifteen';
  if (num === 16) return 'sixteen';
  if (num === 17) return 'seventeen';
  if (num === 18) return 'eighteen';
  return 'nineteen';
}

const convertOnes = (num) => {
  const ones = num % 10;
  if (ones === 9) return 'nine';
  if (ones === 8) return 'eight';
  if (ones === 7) return 'seven';
  if (ones === 6) return 'six';
  if (ones === 5) return 'five';
  if (ones === 4) return 'four';
  if (ones === 3) return 'three';
  if (ones === 2) return 'two';
  if (ones === 1) return 'one';
  return '';
}

const convertTens = (num) => {
  const tens = Math.trunc(num / 10);
  if (tens === 9) return 'ninety';
  if (tens === 9) return 'ninety';
  if (tens === 8) return 'eighty';
  if (tens === 7) return 'seventy';
  if (tens === 6) return 'sixty';
  if (tens === 5) return 'fifty';
  if (tens === 4) return 'forty';
  if (tens === 3) return 'thirty';
  if (tens === 2) return 'twenty';
  if (tens === 1) return 'ten';
  return '';
}

const convertHundred = (num) => {
  // teens
  if (num >= 11 && num <= 19) return convertTeens(num);
  // ones
  if (num >= 1 && num <= 9) return convertOnes(num);
  // tens
  return convertTens(num) + (num % 10 === 0 ? '' : '-' + convertOnes(num));
}

const convertThousand = (num) => {
  let returnString = '';
  // hundreds
  if (num >= 100) {
    returnString += (convertOnes(Math.trunc(num / 100)) + ' hundred' + (num % 100 === 0 ? '' : ' '));
    num %= 100;
  }
  // last hundred
  return returnString + convertHundred(num);
}

export class Say {
  inEnglish(num) {
    if (num < 0 || num >= 1e12) throw new Error('Number must be between 0 and 999,999,999,999.');
    if (num === 0) return 'zero';
    let returnString = '';

    // billions
    if (num >= 1e9) {
      returnString += (convertThousand(Math.trunc(num / (1e9))) + ' billion' + (num % (1e9) === 0 ? '' : ' '));
      num %= 1e9;
    }
    // millions
    if (num >= 1e6) {
      returnString += (convertThousand(Math.trunc(num / (1e6))) + ' million' + (num % (1e6) === 0 ? '' : ' '));
      num %= 1e6;
    }
    // thousands
    if (num >= 1000) {
      returnString += (convertThousand(Math.trunc(num / 1000)) + ' thousand' + (num % 1000 === 0 ? '' : ' '));
      num %= 1000;
    }
    // last thousand
    return returnString + convertThousand(num);
  }
}