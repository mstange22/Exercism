let letterMap = {};
let leadingDigits = {};

const translate = (word) => Number([...word].reduce((accum, char) => accum + letterMap[char], ''));

export const solve = (puzzle) => {
  const tokens = puzzle.split(' ').filter(token => token !== '+' && token !== '==');
  const [total, ...addends] = tokens.reverse();
  letterMap = [...puzzle].reduce((accum, char) => /[A-Z]/.test(char) ? { ...accum, [char]: -1 } : accum, {});
  leadingDigits = tokens.reduce((accum, token) => ({ ...accum, [token[0]]: true }), {});

  const isSolution = () => addends.reduce((accum, addend) => accum + translate(addend), 0) === translate(total);

  // closure to recursively check all permutations
  const checkPermutations = (availableNumbers, availableLetters) => {
    if (availableNumbers.length === 0 || availableLetters.length === 0) {
      return isSolution();
    }
    const currLetter = availableLetters[0];
    const newAvailableLetters = availableLetters.slice(1);
  
    for (const currNumber of availableNumbers) {
      if (currNumber === 0 && leadingDigits[currLetter]) {
        return false;
      }
      letterMap[currLetter] = currNumber;
      const newAvailableNumbers = [...availableNumbers];
      newAvailableNumbers.splice(newAvailableNumbers.indexOf(currNumber), 1);
      const solution = checkPermutations(newAvailableNumbers, newAvailableLetters);
      if (solution) {
        return true;
      }
    }
    return false;
  };

  // start with first char of first addend
  for (let i = 1; i <= 9; i++) {
    letterMap[addends[0][0]] = i;
    const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].filter(n => n != i);
    const availableLetters = Object.keys(letterMap).filter(key => key !== addends[0][0]);

    const solution = checkPermutations(availableNumbers, availableLetters);
    if (solution) {
      return letterMap;
    }
  }
  return null;
};
