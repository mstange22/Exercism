export const BufferFullError = new Error('Buffer full!');
export const BufferEmptyError = new Error('Buffer empty!');

class CircularBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
    this.size = 0;
    this.nextPos = 0;
    this.oldest = 0;
  }

  read() {
    if (this.size === 0) throw BufferEmptyError;
    const res = this.buffer[this.oldest];
    this.oldest = (this.oldest + 1) % this.capacity;
    this.size--;
    return res;
  }

  write(value) {
    if (!value) return;
    if (this.isFull()) throw BufferFullError;
    this.buffer[this.nextPos] = value;
    this.nextPos = (this.nextPos + 1) % this.capacity;
    this.size++;
  }

  forceWrite(value) {
    if (!this.isFull()) {
      this.write(value);
    } else {
      this.buffer[this.nextPos] = value;
      this.nextPos = (this.nextPos + 1) % this.capacity;
      this.oldest = (this.oldest + 1) % this.capacity;
    }
  }

  clear() {
    this.size = 0;
    this.nextPos = 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

const circularBuffer = capacity => new CircularBuffer(capacity);

export default circularBuffer;
