class Node(object):
    def __init__(self, value, next=None, prev=None):
        self.value = value
        self.next = next
        self.prev = prev

class LinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None

    def push(self, value):
        if self.head == None:
            self.head = Node(value)
            self.tail = self.head
        else:
            self.tail.next = Node(value, None, self.tail)
            self.tail = self.tail.next

    def unshift(self, value):
        if self.head == None:
            self.head = Node(value)
            self.tail = self.head
        else:
            self.head.prev = Node(value, self.head, None)
            self.head = self.head.prev

    def pop(self):
        value = self.tail.value
        if self.tail.prev:
            self.tail = self.tail.prev
            self.tail.next = None
        else:
            self.head = None
            self.tail = self.head
        return value
    
    def shift(self):
        value = self.head.value
        if self.head.next:
            self.head = self.head.next
            self.head.prev = None
        else:
            self.head = None
            self.tail = self.head
        return value
    
    def __len__(self):
        length = 0
        curr = self.head
        while curr:
            length += 1
            curr = curr.next
        return length

    def __iter__(self):
        self.n = None
        return self
    
    def __next__(self):
        if self.n == None:
            self.n = self.head
        else:
            self.n = self.n.next
        return self.n.value
