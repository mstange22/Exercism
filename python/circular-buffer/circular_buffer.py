class BufferFullException(Exception):
    pass


class BufferEmptyException(Exception):
    pass


class CircularBuffer(object):
    def __init__(self, capacity):
        self.buffer = [''] * capacity
        self.capacity = capacity
        self.oldest_index = 0
        self.element_count = 0

    def read(self):
        if self.element_count == 0:
            raise BufferEmptyException('buffer is empty')
        res = self.buffer[self.oldest_index]
        self.oldest_index  = (self.oldest_index + 1) % self.capacity
        self.element_count -= 1
        return res


    def write(self, data):
        if self.element_count == self.capacity:
            raise BufferFullException('buffer is full')
        self.buffer[(self.oldest_index + self.element_count) % self.capacity] = data
        self.element_count += 1

    def overwrite(self, data):
        if self.element_count < self.capacity:
            self.write(data)
        else:
            self.buffer[self.oldest_index] = data
            self.oldest_index  = (self.oldest_index + 1) % self.capacity

    def clear(self):
        self.buffer = [''] * self.capacity
        self.oldest_index = 0
        self.element_count = 0
