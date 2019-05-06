type Counter = { [key: string]: number }

class NucleotideCount {
  static nucleotideCounts(s: string) {
    return [...s].reduce((res: Counter, c) => {
      if (res[c] === undefined) throw new Error('Invalid nucleotide in strand')
      else res[c]++
      return res
    }, { 'A': 0, 'C': 0, 'G': 0, 'T': 0 })
  }
}

export default NucleotideCount
