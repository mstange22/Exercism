enum CircularBufferError: Error {
    case bufferEmpty, bufferFull
}

struct CircularBuffer<T> {
    var count = 0
    let capacity: Int
    var oldestIndex: Int
    var buffer: [T?]

    init(capacity: Int) {
        self.capacity = capacity
        self.oldestIndex = 0
        self.buffer = Array(repeating: nil, count: capacity)
    }
    
    mutating func read() throws -> T {
        if self.count == 0 {
            throw CircularBufferError.bufferEmpty
        }
        let res = self.buffer[self.oldestIndex]!
        self.oldestIndex = (self.oldestIndex + 1) % self.capacity
        self.count -= 1
        return res
    }
    
    mutating func write(_ item: T) throws {
        if (self.count == self.capacity) {
            throw CircularBufferError.bufferFull
        }
        self.buffer[(self.oldestIndex + self.count) % self.capacity] = item
        self.count += 1
    }
    
    mutating func overwrite(_ item: T) {
        if (self.count < self.capacity) {
            try? self.write(item)
        } else {
            self.buffer[self.oldestIndex] = item
            self.oldestIndex = (self.oldestIndex + 1) % self.capacity
        }
    }
    
    mutating func clear() {
        self.count = 0
        self.buffer = Array(repeating: nil, count: self.capacity)
        self.oldestIndex = 0
    }
}
