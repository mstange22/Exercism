const parts = [['', ''],
  ['house that Jack built.'],
  ['malt', 'lay in'],
  ['rat', 'ate'],
  ['cat', 'killed'],
  ['dog', 'worried'],
  ['cow with the crumpled horn', 'tossed'],
  ['maiden all forlorn', 'milked'],
  ['man all tattered and torn', 'kissed'],
  ['priest all shaven and shorn', 'married'],
  ['rooster that crowed in the morn', 'woke'],
  ['farmer sowing his corn', 'kept'],
  ['horse and the hound and the horn', 'belonged to']
]

export default class House {
  static verse(n: number): string[] {
    let res = [`This is the ${parts[n][0]}`]
    for (let i = n; i > 1; i--) {
      res.push(`that ${parts[i][1]} the ${parts[i - 1][0]}`)
    }
    return res
  }

  static verses(start: number, end: number): string[] {
    let res: string[] = []
    for (let i = start; i <= end; i++) {
      res = [...res, ...House.verse(i)]
      if (i !== end) {
        res.push('')
      }
    }
    return res
  }
}