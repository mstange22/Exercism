export class InputCell {
  constructor(value) {
    this.children = [];
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }

  set value(value) {
    this._value = value;
    this.children.forEach(child => child.update([this]));
  }

  get value() {
    return this._value;
  }
}

export class ComputeCell {
  constructor(cells, func) {
    this.children = [];
    this.cells = cells;
    this.func = func;
    this.callbacks = [];
    this._value = this.value;

    cells.forEach(cell => cell.children.push(this));
  }

  get value() {
    this._value = this.func(this.cells);
    return this._value;
  }

  update() {
    if (this._value === this.value) return;
    this.callbacks.forEach(cb => cb.addValue(cb.func(this)));
    this.children.forEach(child => child.update());
  }

  addCallback(callback) {
    this.callbacks.push(callback);
  }

  removeCallback(callback) {
    this.callbacks = this.callbacks.filter(c => c.id !== callback.id);
  }
}

export class CallbackCell {
  constructor(func) {
    this.func = func;
    this._values = [];
    this.id = new Date();
  }

  get values() {
    return this._values;
  }

  addValue(value) {
    this._values.push(value);
  }
}
