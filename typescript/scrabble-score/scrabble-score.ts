type Given = { [key: number]: string }
type Derived = { [letter: string]: number }

const given: Given = {
  1: 'AEIOULNRST',
  2: 'DG',
  3: 'BCMP',
  4: 'FHVWY',
  5: 'K',
  8: 'JX',
  10: 'QZ',
} 

const derived: Derived = {}

// convert given map to one-on-one mapping
Object.keys(given).forEach((key) => {
  [...given[Number(key)]].forEach((c) => {
    derived[c] = Number(key)
  })
})

const score = (word: string  = '') => {
  return [...word]
    .reduce((score, c) => score + derived[c.toUpperCase()], 0)
}

export default score