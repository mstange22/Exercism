const usedNames = new Set();

export class Robot {
  constructor() {
    this.reset();
  }

  get name() {
    return this._name;
  }

  reset() {
    let name;
    do {
      name = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      name += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      name += Math.floor(Math.random() * 10);
      name += Math.floor(Math.random() * 10);
      name += Math.floor(Math.random() * 10);
    } while (usedNames.has(name));
    usedNames.add(name);
    this._name = name;
  }
}

Robot.releaseNames = () => {
  usedNames.clear();
};
