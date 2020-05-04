export default class List<T> {
  value: T | null = null
  next: List<T> | null = null

  constructor(arr: T[] = []) {
    const [a, ...rest] = arr
    if (a) {
      this.value = a
      this.next = new List(rest)
    }
  }

  get values() {
    let res: T[] = []
    if (!this.value) return res;
    let curr: List<T> | null = this
    while (curr && curr.value) {
      res = [...res, curr.value]
      curr = curr.next
    }
    return res
  }

  append(other: List<T>) {
    return new List([...this.values, ...other.values])
  }

  concat(other: List<List<T>>) {
    return this.append(other.foldl((accum, el) => accum.append(el), new List<T>()))
  }

  foldl(func: (accum: T, el: T) => T, initial: T): T {
    let accum = initial
    if (!this.value) return accum
    accum = func(accum, this.value)
    return this.next ? this.next.foldl(func, accum) : accum;
  }

  map(func: (el: T) => T) {
    let res: T[] = []
    let curr: List<T> | null = this
    while (curr && curr.value) {
      res = [...res, func(curr.value)]
      curr = curr.next
    }
    return new List<T>(res)
  }

  filter(func: (el: T) => boolean) {
    let res: T[] = []
    let curr: List<T> | null = this
    while (curr && curr.value) {
      if (func(curr.value)) {
        res = [...res, curr.value]
      }
      curr = curr.next
    }
    return new List<T>(res)
  }

  foldr(func: (accum: T, el: T) => T, initial: T): T {
    return this.reverse().foldl(func, initial)
  }

  reverse(): List<T> {
    return this.next && this.value ? this.next.reverse().append(new List<T>([this.value])) : this
  }

  // would have been nice to use foldr, but getting type conflicts trying to add 1 to accum
  length(): number {
    let length = 0
    let curr: List<T> | null = this
    while (curr && curr.value) {
      length++
      curr = curr.next
    }
    return length
  }
}
