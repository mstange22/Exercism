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
    return [
      this.value,
      ...this.next.foldl((accum, el) => [...accum, el], []),
    ];
  }

  length() {
    return this.foldl(accum => accum + 1, 0);
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(list) {
    const newList = list.foldl((accum, el) => new List([
      ...accum.values,
      ...el.foldl((a, e) => [...a, e], []),
    ]), new List());
    return this.append(newList);
  }

  filter(func) {
    return this.foldl((accum, el) => (
      func(el) ? new List([...accum.values, el]) : accum
    ), new List());
  }

  map(func) {
    return this.foldl((accum, el) => new List([
      ...accum.values,
      func(el),
    ]), new List());
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
    return this.foldl((accum, el) => new List([
      el,
      ...accum.values,
    ]), new List());
  }
}
