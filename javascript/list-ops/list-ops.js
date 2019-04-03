export class List {
  constructor(arr = []) {
    return this.fromArray(arr);
  }

  fromArray(arr) {
    const [a, ...rest] = arr;
    if (a) {
      this.value = a;
      this.next = new List(rest);
    }
    return this;
  }

  get values() {
    if (!this.value) return [];
    return [this.value, ...this.next.foldl((accum, el) => [...accum, el], [])];
  }

  length() {
    return this.foldl(accum => accum + 1, 0);
  }

  append(list) {
    return this.fromArray([
      ...this.foldl((accum, el) => [...accum, el], []),
      ...list.foldl((accum, el) => [...accum, el], []),
    ]);
  }

  concat(list) {
    const newArr = list.foldl((accum, el) => [...accum, ...el.foldl((a, e) => [...a, e], [])], []);
    const newList = list.fromArray(newArr);
    return this.append(newList);
  }

  filter(func) {
    return this.fromArray(this.foldl((accum, el) => (func(el) ? [...accum, el] : accum), []));
  }

  map(func) {
    return this.fromArray(this.foldl((accum, el) => [...accum, func(el)], []));
  }

  foldl(func, accum) {
    if (!this.value) return accum;
    accum = func(accum, this.value);
    return this.next.foldl(func, accum);
  }

  foldr(func, accum) {
    return this.reverse().foldl(func, accum);
  }

  reverse() {
    return this.fromArray(this.foldl((accum, el) => [el, ...accum], []));
  }
}
