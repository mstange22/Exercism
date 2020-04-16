export default class BinarySearch {
  _array: number[] = []
  isUnordered = false
  
  constructor(array: number[]) {
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[1] > array[i + 1]) {
        this.isUnordered = true
        return
      }
    }
    this._array = array
  }

  get array(): number[] | undefined {
    return this.isUnordered ? undefined : this._array
  }

  indexOf(n: number) {
    if (this.isUnordered) {
      return -1
    }
    let min = 0, max = this._array.length - 1
    while (min < max) {
      const mid = Math.floor((min + max) / 2)
      if (this._array[mid] === n) {
        return mid;
      }
      if (this._array[mid] > n) {
        min = mid + 1
      } else {
        max = mid - 1
      }
    } 
    return this._array[min] === n ? min : -1
  }
}
