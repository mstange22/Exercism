const song = [
  null,
  { day: 'first', gift: 'a Partridge in a Pear Tree.\n' },
  { day: 'second', gift: 'two Turtle Doves, and ' },
  { day: 'third', gift: 'three French Hens, ' },
  { day: 'fourth', gift: 'four Calling Birds, ' },
  { day: 'fifth', gift: 'five Gold Rings, ' },
  { day: 'sixth', gift: 'six Geese-a-Laying, ' },
  { day: 'seventh', gift: 'seven Swans-a-Swimming, ' },
  { day: 'eighth', gift: 'eight Maids-a-Milking, ' },
  { day: 'ninth', gift: 'nine Ladies Dancing, ' },
  { day: 'tenth', gift: 'ten Lords-a-Leaping, ' },
  { day: 'eleventh', gift: 'eleven Pipers Piping, ' },
  { day: 'twelfth', gift: 'twelve Drummers Drumming, ' },
];

class TwelveDays {
  verse(start, end = start) {
    let res = '';
    for (let i = start; i <= end; i++) {
      let curr = i;
      res += `On the ${song[curr].day} day of Christmas my true love gave to me: `
      while (curr >= 1) {
        res += `${song[curr--].gift}`;
      }
      res += '\n';
    }
    return res.slice(0, -1);
  }

  sing() {
    return this.verse(1, 12);
  }
}

export default TwelveDays;