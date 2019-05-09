const isSorted = arr => arr.slice().sort((a, b) => a - b).join('') === arr.join('');

class BinarySearch {
  constructor(arr) {
    if (isSorted(arr)) {
      this.array = arr;
    }
  }

  indexOf(target) {
    let min = 0;
    let max = this.array.length - 1;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      if (this.array[mid] === target) {
        return mid;
      }
      if (target > this.array[mid]) {
        min = mid + 1;
      }
      max = mid - 1;
    }
    return -1;
  }
}

export { BinarySearch };
