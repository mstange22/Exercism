const verses = [
  null,
  { thing: 'house that Jack built', action: null },
  { thing: 'malt', action: 'lay in' },
  { thing: 'rat', action: 'ate' },
  { thing: 'cat', action: 'killed' },
  { thing: 'dog', action: 'worried' },
  { thing: 'cow with the crumpled horn', action: 'tossed' },
  { thing: 'maiden all forlorn', action: 'milked' },
  { thing: 'man all tattered and torn', action: 'kissed' },
  { thing: 'priest all shaven and shorn', action: 'married' },
  { thing: 'rooster that crowed in the morn', action: 'woke' },
  { thing: 'farmer sowing his corn', action: 'kept' },
  { thing: 'horse and the hound and the horn', action: 'belonged to' }
];

const House = {
  verse: (num) => {
    const res = [`This is the ${verses[num].thing}${num == 1 ? '.' : ''}`];
    while (num > 1) {
      res.push(
        `that ${verses[num].action} the ${verses[num - 1].thing}${num === 2 ? '.' : ''}`
      );
      num -= 1;
    }
    return res;
  },
  verses: (start, end) => {
    let res = []
    for (let i = start; i <= end; i++) {
      res = [...res, ...House.verse(i), ''];
    }
    return res.slice(0, -1);
  },
};

export default House;