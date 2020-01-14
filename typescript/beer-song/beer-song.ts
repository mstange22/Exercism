export default class BeerSong {
  static verse(n: number): string {
    const numBottles = n === 0 ? 'No more' : `${n}`
    let res = `${numBottles} bottle${n === 1 ? '' : 's'} of beer on the wall, ${numBottles.toLowerCase()} bottle${n === 1 ? '' : 's'} of beer.\n`
    res += n === 0 ? (
      'Go to the store and buy some more, 99 bottles of beer on the wall.\n'
    ) : `Take ${n === 1 ? 'it' : 'one'} down and pass it around, ${n == 1 ? 'no more' : `${n - 1}`} bottle${n === 2 ? '' : 's'} of beer on the wall.\n`
    return res;
  }

  static sing(start: number = 99, end: number = 0): string {
    let res: string[] = []
    for (let i = start; i >= end; i--) {
      res.push(BeerSong.verse(i))
    }
    return res.join('\n')
  }
}