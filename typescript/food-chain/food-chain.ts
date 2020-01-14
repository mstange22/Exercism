const parts = [['',''],
  ['fly', ''],
  ['spider', 'It wriggled and jiggled and tickled inside her.'],
  ['bird', 'How absurd to swallow a bird!'],
  ['cat', 'Imagine that, to swallow a cat!'],
  ['dog', 'What a hog, to swallow a dog!'],
  ['goat', 'Just opened her throat and swallowed a goat!'],
  ['cow', 'I don\'t know how she swallowed a cow!'],
  ['horse', 'She\'s dead, of course!'],
]

// special number constants to help readability
const FLY = 1
const SPIDER = 2
const HORSE = 8

export default class FoodChain {
  static verse(n: number): string {
    let res = `I know an old lady who swallowed a ${parts[n][0]}.\n`
    if (n !== FLY) {
      res += parts[n][1] + '\n'
    }
    if (n === HORSE) {
      return res
    }
    for (let i = n; i > 1; i--) {
      let phrase = `She swallowed the ${parts[i][0]} to catch the ${parts[i - 1][0]}`
      if (i - 1 === SPIDER) {
        phrase += ' that wriggled and jiggled and tickled inside her'
      }
      res += phrase + '.\n'
    }
    res += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    return res
  }

  static verses(start: number, end: number): string {
    const res: string[] = []
    for (let i = start; i <= end; i++) {
      res.push(FoodChain.verse(i))
    }
    return res.join('\n')
  }
}