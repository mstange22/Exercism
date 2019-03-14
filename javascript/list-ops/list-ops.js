export class List {
  constructor(arr = []) {
    this.values = arr;
  }

  append(list) {
    if (list) {
      list.values.forEach((element) => {
        this.values.push(element);
      });
    }
    return new List(this.values);
  }

  concat(list) {
    list.values.forEach((value) => {
      if (value instanceof List) {
        value.values.forEach(v => this.values.push(v));
      } else {
        this.values.push(value);
      }
    });
    return new List(this.values);
  }

  filter(func) {
    const res = [];
    this.values.forEach((value) => {
      if (func(value)) {
        res.push(value);
      }
    });
    return new List(res);
  }

  length() {
    return this.values.length;
  }

  map(func) {
    const res = [];
    this.values.forEach((value) => {
      res.push(func(value));
    });
    return new List(res);
  }

  foldl(func, accum) {
    this.values.forEach((value) => {
      accum = func(accum, value);
    });
    return accum;
  }

  foldr(func, accum) {
    this.reverse().values.forEach((value) => {
      accum = func(accum, value);
    });
    return accum;
  }

  reverse() {
    const res = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      res.push(this.values[i]);
    }
    return new List(res);
  }
}
