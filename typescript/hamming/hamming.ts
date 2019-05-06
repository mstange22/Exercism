class Hamming {
  compute(s1: string, s2: string) {
    if (s1.length !== s2.length) {
      throw new Error('DNA strands must be of equal length.')
    }
    return s1
      .split('')
      .reduce((acc, c, i) => c !== s2[i] ? ++acc : acc, 0)
  }
}

export default Hamming