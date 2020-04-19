class Node<T> {
  value: T
  prev: Node<T> | null
  next: Node<T> | null

  constructor(value: T, prev: Node<T> | null, next: Node<T> | null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class LinkedList<T> {
  head: Node<T> | null= null
  tail: Node<T> | null = null
  _count = 0
  
  push(value: T): void {
    const newNode = new Node(value, this.tail,  null)
    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.head = this.head || this.tail
  }

  pop(): T | null {
    const res = this.tail
    this.tail = this.tail ? this.tail.prev : this.head
    this.head = this.tail ? this.head : null
    return res ? res.value : null
  }

  unshift(value: T): void {
      const newNode = new Node(value, null, this.head)
      if (this.head) {
        this.head.prev = newNode
      }
      this.head = newNode
      this.tail = this.tail || this.head
  }

  shift(): T | null {
    const res = this.head
    this.head = this.head ? this.head.next : this.tail
    this.tail = this.head ? this.tail : null
    return res ? res.value : null
  }

  find(value: T): Node<T> | null {
    let curr = this.head
    while (curr && curr.value !== value) {
      curr = curr.next
    }
    return curr
  }

  remove(node: Node<T>): void {
    if (node.next) {
      node.next.prev = node.prev
    }
    if (node.prev) {
      node.prev.next = node.next
    }
    this.head = node === this.head ? node.next : this.head
    this.tail = node === this.tail ? node.prev : this.tail
  }

  delete(value: T): void {
    const nodeToDelete = this.find(value)
    if (nodeToDelete) {
      this.remove(nodeToDelete)
    }
  }

  count = (): number => {
    let count = 0
    for (let curr = this.head; curr; curr = curr.next, count++) {}
    return count
  }
}

export default LinkedList
