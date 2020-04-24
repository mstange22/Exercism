export default class List {
  list: number[]

  constructor(...list: number[]) {
    this.list = list
  }

  isEqual(other: number[]) {
    if (this.list.length !== other.length) return false;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] !== other[i]) {
        return false
      }
    }
    return true
  }

  isSublist(other: List): boolean {
    for (let i = 0; i <= other.list.length - this.list.length; i++) {
      if (this.isEqual(other.list.slice(i, i + this.list.length))) {
        return true
      }
    }
    return false
  }

  compare(list2: List): string {
    if (this.isEqual(list2.list)) {
      return 'equal'
    }
    if (this.isSublist(list2)) {
      return 'sublist'
    }
    if (list2.isSublist(this)) {
      return 'superlist'
    }
    return 'unequal'
  }
}