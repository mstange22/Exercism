const names = [];
const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const numbers = [...'0123456789'];

const buildNames = () => {
  letters.forEach(a => {
    letters.forEach(b => {
      numbers.forEach(x => {
        numbers.forEach(y => {
          numbers.forEach(z => {
            names.push(`${a}${b}${x}${y}${z}`);
          });
        });
      });
    });
  });
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