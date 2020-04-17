class Node<T> {
  value: T
  prev: Node<T> | null = null;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value
  }
}


class LinkedList<T> {
  head: Node<T> | null= null
  tail: Node<T> | null = null
  _count = 0
  
  push(value: T) {
    if (!this.tail || !this.head) {
      this.tail = new Node(value)
      this.tail.next = this.tail
      this.tail.prev = this.tail
      this.head = this.tail
    } else {
      const newNode = new Node(value)
      newNode.prev = this.tail
      newNode.next = this.head
      this.tail.next = newNode
      this.tail = newNode
      this.head.prev = this.tail
    }
    this._count++
  }

  pop(): T | null {
    if (this.tail && this.head) {
      const res = this.tail.value
      if (this.tail.prev && this.tail.prev !== this.tail) {
        this.tail.prev.next = this.head
        this.tail = this.tail.prev
        this.head.prev = this.tail
      } else {
        this.tail = null;
        this.head = null;
      }
      this._count--
      return res
    }
    return null
  }

  shift(): T | null {
    if (this.head && this.tail) {
      const res = this.head.value
      if (this.head.next && this.head.next !== this.head) {
        this.head.next.prev = this.tail
        this.head = this.head.next
        this.tail.next = this.head
      } else {
        this.head = null;
        this.tail = null;
      }
      this._count--
      return res
    }
    return null
  }

  unshift(value: T) {
    if (!this.head || !this.tail) {
      this.head = new Node(value)
      this.head.next = this.tail
      this.head.prev = this.tail
      this.tail = this.head
    } else {
      const newNode = new Node(value)
      newNode.prev = this.tail
      newNode.next = this.head
      this.tail.next = newNode
      this.head.prev = newNode
      this.head = newNode
    }
    this._count++
  }

  delete(value: T): void {
    let curr = this.head
    while (curr && curr.value !== value) {
      curr = curr.next
      if (curr === this.head) {
        return
      }
    }
    if (curr) {
      if (curr.next && curr.prev) {
        curr.next.prev = curr.prev
        curr.prev.next = curr.next
      } else {
        this.head = null
        this.tail = null
      }
      this._count--
    }
  }

  count = () => this._count
}

export default LinkedList
