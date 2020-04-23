export class BufferOverflowError extends Error {}
export class BufferEmptyError extends Error {}

export default class CircularBuffer<T> {
  buffer: T[]
  oldestIndex: number
  count: number = 0

  constructor(private readonly capacity: number) {
    this.buffer = new Array(capacity)
    this.oldestIndex = Math.floor(Math.random() * this.capacity)
  }
  
  read(): T {
    if (!this.count) {
      throw new BufferEmptyError()
    }
    const res = this.buffer[this.oldestIndex]
    this.count--
    this.oldestIndex = (this.oldestIndex + 1) % this.capacity
    return res
  }

  write(element: T): void {
    if (this.isFull()) {
      throw new BufferOverflowError()
    }
    this.buffer[(this.oldestIndex + this.count) % this.capacity] = element
    this.count++
  }

  forceWrite(element: T): void {
    if (!this.isFull()) {
      this.write(element)
    } else {
      this.buffer[this.oldestIndex] = element
      this.oldestIndex = (this.oldestIndex + 1) % this.capacity
    }
  }

  clear() {
    this.count = 0;
  }

  isFull() {
    return this.count === this.capacity
  }
}