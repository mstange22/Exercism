export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a * this.a + this.b * this.b === this.c * this.c;
  }

  static where({ minFactor = 1, maxFactor, sum = null }) {
    const triplets = [];
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = minFactor; j < i - 1; j++) {
        for (let k = j; k < i; k++) {
          const t = new Triplet(j, k, i);
          if (t.isPythagorean()) triplets.push(t);
        }
      }
    }
    // sorting this because I think the test has the sort backwards?
    if (sum) return triplets
      .filter(t => t.sum() === sum)
      .sort((a, b) => a.product() - b.product());
    return triplets;
  }
}