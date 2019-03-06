export class BinarySearch {
  constructor(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return;
      }
    }
    this.array = arr;
  }

  indexOf(n) {
    let min = 0;
    let max = this.array.length - 1;
    while (min !== max) {
      const mid = Math.floor((min + max) / 2);
      if (this.array[mid] === n) return mid;
      if (n > this.array[mid]) {
        min = mid + 1;
      } else {
        max = min - 1;
      }
    }
    if (this.array[min] === n) return min;
    return -1;
  }
}
