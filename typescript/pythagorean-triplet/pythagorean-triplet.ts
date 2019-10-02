class Triplet {
  a: number
  b: number
  c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum(): number {
    return this.a + this.b + this.c
  }

  product(): number {
    return this.a * this.b * this.c
  }

  isPythagorean(): boolean {
    return this.a * this.a + this.b * this.b == this.c * this.c
  }

  static where(max: number, min: number = 1, sum?: number): Triplet[] {
    const res: Triplet[] = [];
    for (let a = min; a < max - 2; a++) {
      for (let b = a + 1; b * b + a * a <= max * max; b++) {
        const c = Math.sqrt(a * a + b * b)
        if (c === Math.trunc(c) && (!sum || a + b + c === sum)) {
          res.push(new Triplet(a, b, c))
        }
      }
    }
    return res
  }
}

export default Triplet