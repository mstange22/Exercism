const sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const flats = ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E'];
const usesFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];
const steps = {
  "m": 1,
  "M": 2,
  "A": 3,
}

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    const scale = usesFlats.includes(this.tonic) ? flats : sharps;
    let scalePos = scale.indexOf(this.tonic)
    return scale.map((_, i) => scale[(scalePos + i) % scale.length])
  }

  interval(intervals) {
    const currTonic = this.tonic[0].toUpperCase() + this.tonic.slice(1);
    const scale = usesFlats.includes(this.tonic) ? flats : sharps;
    let scalePos = scale.indexOf(currTonic);

    return [...intervals].map((step) => {
      const nextNote = scale[scalePos]
      scalePos = (scalePos + steps[step]) % scale.length;
      return nextNote
    });
  }
}
