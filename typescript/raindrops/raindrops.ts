const translator: [number, string][] = [
  [3, 'Pling'],
  [5, 'Plang'],
  [7, 'Plong'],
]

class Raindrops {
  convert(n: number) {
    let res = translator.reduce((accum: string, entry: [number, string]) => {
      if (n % entry[0] === 0) {
        accum += entry[1]
      }
      return accum
    }, '')
    return res === '' ? n.toString() : res
  }
}

export default Raindrops