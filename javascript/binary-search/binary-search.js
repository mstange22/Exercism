export class BinarySearch {
  constructor(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return;
    }
    this.array = arr;
  }

  indexOf(n, min = 0, max = this.array.length - 1) {
    if (min > max) return -1;
    const mid = Math.floor((min + max) / 2);
    if (this.array[mid] === n) return mid;
    if (n > this.array[mid]) return this.indexOf(n, mid + 1, max);
    return this.indexOf(n, min, min - 1);
  }
}
