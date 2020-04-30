class Diamond {
  makeDiamond(letter: string) {
    const letterCharCode = letter.charCodeAt(0)
    const diff = letterCharCode - 'A'.charCodeAt(0)
    const size = 1 + 2 * diff

    return new Array(size).fill('').reduce((accum, _, i) => {
      let offset = Math.abs(diff - i)
      for (let j = 0; j < size; j++) {
        accum += j === offset || j === size - 1 - offset ? String.fromCharCode(letterCharCode - offset) : ' '
      }
      return accum + '\n'
    }, '')
  }
}
export default Diamond