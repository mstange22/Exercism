export default class Alphametics {
  letterMap: { [key: string]: number } = {}
  leadingDigits: { [key: string]: boolean } = {}
  total: string
  addends: string[]
  
  constructor(private readonly puzzle: string) {
    const tokens = this.puzzle.split(' ').filter(token => token !== '+' && token !== '==')
    this.leadingDigits = tokens.reduce((accum, token) => ({ ...accum, [token[0]]: true }), {});
    ;[this.total, ...this.addends] = tokens.reverse()
    this.letterMap = [...this.puzzle].reduce((accum, char) => /[A-Z]/.test(char) ? { ...accum, [char]: -1 } : accum, {})
  }

  calculateTotal = () => this.addends.reduce((accum, addend) => accum + this.translate(addend), 0)

  isSolution = () => this.calculateTotal() === this.translate(this.total)
  
  translate = (word: string): number => Number([...word].reduce((accum, char) => accum + this.letterMap[char], ''))

  // closure to recursively check all permutations
  checkPermutations = (availableNumbers: number[], availableLetters: string[]) => {
    if (availableNumbers.length === 0 || availableLetters.length === 0) {
      return this.isSolution()
    }
    const currLetter = availableLetters[0]
    const newAvailableLetters = availableLetters.slice(1)
  
    for (const currNumber of availableNumbers) {
      if (currNumber === 0 && this.leadingDigits[currLetter]) {
        return false
      }
      this.letterMap[currLetter] = currNumber
      const newAvailableNumbers = [...availableNumbers]
      newAvailableNumbers.splice(newAvailableNumbers.indexOf(currNumber), 1)
      const solution = this.checkPermutations(newAvailableNumbers, newAvailableLetters)
      if (solution) {
        return true
      }
    }
    return false
  };

  solve = (): {[key: string]: number } | undefined => {
    for (let i = 1; i <= 9; i++) {
      this.letterMap[this.addends[0][0]] = i
      const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].filter(n => n != i)
      const availableLetters = Object.keys(this.letterMap).filter(key => key !== this.addends[0][0])
      const solution = this.checkPermutations(availableNumbers, availableLetters)
      if (solution) {
        return this.letterMap
      }
    }
    return undefined
  }
}
