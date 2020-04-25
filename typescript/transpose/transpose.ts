export default class Transpose {
  static transpose = (arr: string[]): string[] =>
    arr.reduce((accum: string[], line, i) => {
      [...line].forEach((char, j) => {
        if (accum[j]) {
          accum.push(''.padStart(i, ' '))
        }
        accum[j] += char
      })
      return accum
    }, [])
}