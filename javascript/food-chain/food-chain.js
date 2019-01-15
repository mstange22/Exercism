const FLY = 1;
const BIRD = 3;
const HORSE = 8;

export default class Song {
  constructor() {
    this.parts = [null, {
      animal: 'fly',
      action: null,
      reason: `I don't know why she swallowed the fly. Perhaps she'll die.`,
    },
    {
      animal: 'spider',
      action: 'It wriggled and jiggled and tickled inside her.',
    }, {
      animal: 'bird',
      action: 'How absurd to swallow a bird!',
      reason: 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.',
    }, {
      animal: 'cat',
      action: 'Imagine that, to swallow a cat!',
    }, {
      animal: 'dog',
      action: 'What a hog, to swallow a dog!',
    }, {
      animal: 'goat',
      action: 'Just opened her throat and swallowed a goat!',
    }, {
      animal: 'cow',
      action: `I don't know how she swallowed a cow!`,
    }, {
      animal: 'horse',
      action: `She's dead, of course!`,
    }];
  }

  verse(num) {
    let verse = `I know an old lady who swallowed a ${this.parts[num].animal}.\n`;

    // add action if not a fly
    if (num !== FLY) {
      verse += `${this.parts[num].action}\n`;
    }

    // she's dead
    if (num === HORSE) return verse;

    // add reason - custom if fly or bird
    for (let i = num; i >= 1; i--) {
      if (i === FLY || i === BIRD) {
        verse += `${this.parts[i].reason}\n`;
      } else {
        verse += `She swallowed the ${this.parts[i].animal} to catch the ${this.parts[i - 1].animal}.\n`;
      }
    }
    return verse;
  }

  verses(start, end) {
    let song = '';
    for (let i = start; i <= end; i++) {
      song += (this.verse(i) + '\n');
    }
    return song;
  }
}