export class CustomSet {
  constructor(list = []) {
    this.set = [];
    list.forEach((element) => {
      if (!this.set.includes(element)) this.set.push(element);
    });
  }

  empty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  subset(set2) {
    for (let i = 0; i < this.set.length; i++) {
      if (!set2.contains(this.set[i])) return false;
    }
    return true;
  }

  disjoint(set2) {
    for (let i = 0; i < this.set.length; i++) {
      if (set2.contains(this.set[i])) return false;
    }
    return true;
  }

  eql(set2) {
    if (this.set.length !== set2.set.length) return false;
    return this.subset(set2);
  }

  add(element) {
    if (!this.set.includes(element)) this.set.push(element);
    return this;
  }

  intersection(set2) {
    const intersection = [];
    this.set.forEach((element) => {
      if (set2.contains(element)) intersection.push(element);
    });

    return new CustomSet(intersection);
  }

  difference(set2) {
    const difference = [];
    this.set.forEach((element) => {
      if (!set2.contains(element)) difference.push(element);
    });
    return new CustomSet(difference);
  }

  union(set2) {
    const union = [...this.set];
    set2.set.forEach(element => union.push(element));
    return new CustomSet(union);
  }
}
