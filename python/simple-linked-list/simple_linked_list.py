class Node(object):
    def __init__(self, value):
        self._value = value
        self._next = None

    def value(self):
        return self._value

    def next(self):
        return self._next

class LinkedList(object):
    def __init__(self, values=[]):
        self._size = 0
        self._head= None
        for value in values:
            self.push(value)

    def __len__(self):
        return self._size

    def head(self):
        if self._size == 0:
            raise EmptyListException('List is empty')
        return self._head

    def push(self, value):
        self._size += 1
        new_node = Node(value)
        new_node._next = self._head
        self._head = new_node

    def pop(self):
        res = self.head().value()
        self._head = self.head().next()
        self._size -= 1
        return res

    def reversed(self):
        return reversed(list(self))

    def __iter__(self):
        self.curr_node = Node(None)
        self.curr_node._next = self._head
        return self
    
    def __next__(self):
        if self.curr_node._next == None:
            raise StopIteration
        self.curr_node = self.curr_node._next
        return self.curr_node._value

class EmptyListException(Exception):
    pass
