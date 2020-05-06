let letterMap = {}

const translate = (word) => Number([...word].reduce((accum, char) => accum + letterMap[char], ''));

const isLeadingDigit = (letter, addends, total) => {
  for (const addend of addends) {
    if (letter === addend[0]) return true
  }
  return letter === total[0]
}

const checkAllPermutations = (addends, total, availableNumbers, availableLetters) => {
  if (availableNumbers.length === 0 || availableLetters.length === 0) {
    const sum = addends.reduce((accum, addend) => accum + translate(addend), 0);

    return sum === translate(total)
  }
  const currLetter = availableLetters[0]
  const newAvailableLetters = [...availableLetters]
  newAvailableLetters.splice(0, 1)
  for (const currNumber of availableNumbers) {
    if (currNumber === 0 && isLeadingDigit(currLetter, addends, total)) {
      return false
    }
    letterMap[currLetter] = currNumber;
    const newAvailableNumbers = [...availableNumbers];
    newAvailableNumbers.splice(newAvailableNumbers.indexOf(currNumber), 1);
    const match = checkAllPermutations(addends, total, newAvailableNumbers, newAvailableLetters)
    if (match) {
      return true
    }
  }

  return false
}

export const solve = (puzzle) => {
  letterMap = [...puzzle].reduce((accum, char) => {
    if (/[A-Z]/.test(char) && !accum[char]) {
      accum[char] = -1
    }
    return accum
  }, {});

  const [total, ...addends] = puzzle.split(' ')
    .reverse()
    .filter(token => token !== '+' && token !== '==');

  // start at first character of first addend, assign 0-9 and check every other character
  // note first characters cannot be 0
  // after each map update, translate words and check equation
  for (let i = 1; i <= 9; i++) {
    let availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    availableNumbers.splice(availableNumbers.indexOf(i), 1);
    // resetKeys
    Object.keys(letterMap).forEach((key) => {
      letterMap[key] = -1;
    });
    letterMap[addends[0][0]] = i
    const availableLetters = Object.keys(letterMap).filter(key => key !== addends[0][0]);
    const match = checkAllPermutations(addends, total, availableNumbers, availableLetters);
    if (match) {
      return letterMap;
    }
  }

  return null;
};
