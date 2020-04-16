export default class BinarySearch {
  arr: number[] = []
  isUnordered = false
  
  constructor(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[1] > arr[i + 1]) {
        this.isUnordered = true
        return
      }
    }
    this.arr = arr
  }

  get array(): number[] | undefined {
    return this.isUnordered ? undefined : this.arr
  }

  indexOf(n: number) {
    if (this.isUnordered) {
      return -1
    }
    let min = 0, max = this.arr.length - 1
    while (min < max) {
      const mid = Math.floor((min + max) / 2)
      if (this.arr[mid] === n) {
        return mid;
      }
      if (this.arr[mid] > n) {
        min = mid + 1
      } else {
        max = mid - 1
      }
    } 
    return this.arr[min] === n ? min : -1
  }
}
