const A = 'A'.charCodeAt(0)

class Diamond {
  makeDiamond(letter: string) {
    const diff = letter.charCodeAt(0) - A
    const res = 'A\n'
    for (let i = 0; i < diff; i++) {
      
    }
    return res
  }
}

export default Diamond
