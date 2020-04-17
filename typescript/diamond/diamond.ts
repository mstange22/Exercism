class Diamond {
  makeDiamond(letter: string) {
    const letterCharCode = letter.charCodeAt(0)
    const diff = letterCharCode - 'A'.charCodeAt(0)
    let top: string[] = []

    // build top half
    for (let i = diff; i >= 0; i--) {
      const currLetter = String.fromCharCode(letterCharCode - i)
      const endSpaces = ' '.repeat(i)
      let line = endSpaces + currLetter
      if (currLetter !== 'A') {
        // add middle spaces and second letter
        line += `${' '.repeat((2 * (diff - i)) - 1)}${currLetter}`
      }
      top.push(`${line}${endSpaces}\n`)
    }
    // take all but last line of top (don't repeat given letter).
    // Flip it (if anything) and add to bottom.
    return [...top, ...top.slice(0, -1).reverse()].join('')
  }
}

export default Diamond
