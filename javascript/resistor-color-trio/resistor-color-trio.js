const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export class ResistorColorTrio {
  constructor(colors) {
    if (colors.some(c => !COLORS.includes(c))) {
      throw new Error('invalid color');
    }
    const digits = COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]) * 1;
    const zeroes = COLORS.indexOf(colors[2]);
    const value = zeroes === 0 ? digits : digits * (10 ** zeroes);
    this.value = value >= 1000 ? value / 1000 : value;
    this.unit = value >= 1000 ? 'kiloohms' : 'ohms';
  }

  get label() {
    return `Resistor value: ${this.value} ${this.unit}`;
  }
}
