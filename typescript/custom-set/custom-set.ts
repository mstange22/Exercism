export default class CustomSet {
  set: number[] = []

  constructor(args?: number[]) {
    args && args.forEach(this.add)
  }

  add = (el: number) => {
    if (!this.set.includes(el)) {
      this.set.push(el)
    }
    return this
  }

  empty = () => this.set.length === 0
  contains = (el: number) => this.set.includes(el)
  union = (other: CustomSet) => new CustomSet([...this.set, ...other.set])
  intersection = (other: CustomSet) => new CustomSet(this.set.filter(other.contains))
  difference = (other: CustomSet) => new CustomSet(this.set.filter(el => !other.contains(el)))
  subset = (other: CustomSet) => this.set.every(other.contains)
  disjoint = (other: CustomSet) => this.set.every(el => !other.set.includes(el))
  eql = (other: CustomSet) => this.set.length === other.set.length && this.subset(other)
}