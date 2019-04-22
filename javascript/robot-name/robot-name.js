const names = [];

const buildNames = () => {
  for (let a = 0; a < 26; a++) {
    for (let b = 0; b < 26; b++) {
      for (let c = 0; c < 10; c++) {
        for (let d = 0; d < 10; d++) {
          for (let e = 0; e < 10; e++) {
            const A = String.fromCharCode(a + 65);
            const B = String.fromCharCode(b + 65);
            names.push(`${A}${B}${c}${d}${e}`);
          }
        }
      }
    }
  }
  // shuffle
  for (let i = 0; i < names.length - 2; i++) {
    let j = Math.floor(Math.random() * names.length);
    const temp = names[i];
    names[i] = names[j];
    names[j] = temp;
  }
}

buildNames();
let currNameIndex = 0;

export class Robot {
  constructor() {
    this.reset();
  }

  get name() {
    return this._name;
  }

  reset() {
    this._name = names[currNameIndex++];
  }
}

Robot.releaseNames = () => {
  currNameIndex = 0;
};