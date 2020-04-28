const numbers = { 'ones': 1, 'twos': 2, 'threes': 3, 'fours': 4, 'fives': 5, 'sixes': 6 };

const singles = (dice, number) => dice.filter(d => d === number).length * number;

export const score = (dice, cat) => {
  const pipCount = dice.reduce((accum, roll) => accum + roll)
  const counter = dice.reduce((accum, roll) => {
    if (!accum[roll]) {
      accum[roll] = 1
    } else {
      accum[roll]++
    }
    return accum
  }, {});
  const values = Object.values(counter)
  const entries = Object.entries(counter)

  switch(cat) {
    case 'ones':
    case 'twos':
    case 'threes':
    case 'fours':
    case 'fives':
    case 'sixes':
      return singles(dice, numbers[cat])
    case 'full house':
      return values.includes(3) && values.includes(2) ? pipCount : 0;
    case 'four of a kind':
      return values.includes(4) || values.includes (5) ? 
        entries.reduce((_, entry) => entry[1] >= 4 && entry)[0] * 4 : 0
    case 'little straight':
      return new Set(dice).size === 5 && !dice.includes(6) ? 30 : 0
    case 'big straight':
      return new Set(dice).size === 5 && !dice.includes(1) ? 30 : 0
    case 'yacht':
      return new Set(dice).size === 1 ? 50 : 0;
    case 'choice':
      return pipCount
    default:
      return 0
  }
};
