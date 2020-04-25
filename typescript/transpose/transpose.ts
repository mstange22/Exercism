export default class Transpose {
  static transpose(arr: string[]): string[] {
    const res: string[] = []
    arr.forEach((line, i) => {
      for (const [j, char] of [...line].entries()) {
        if (i === 0) {
          res.push(char)
        } else if (j >= res.length) {
          res.push(char.padStart(res[0].length, ' '))
        } else {
          res[j] += char
        }
      }
    });
    return res
  }
}