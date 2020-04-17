class Diamond {
  makeDiamond(letter: string) {
    const letterCharCode = letter.charCodeAt(0)
    const diff = letterCharCode - 'A'.charCodeAt(0)
    let top: string[] = []
    for (let i = diff; i >= 0; i--) {
      const currLetter = String.fromCharCode(letterCharCode - i)
      const endSpaces = ' '.repeat(i)
      let line = endSpaces + currLetter
      if (currLetter !== 'A') {
        line += `${' '.repeat((2 * (diff - i)) - 1)}${currLetter}`
      }
      top.push(`${line}${endSpaces}\n`)
    }
    return [...top, ...top.slice(0, -1).reverse()].join('')
  }
}

export default Diamond
