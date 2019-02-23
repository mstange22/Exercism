class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (this.length === 0) throw new Error('Empty list');
    const res = this.tail.data;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    return res;
  }

  unshift(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  shift() {
    if (this.length === 0) throw new Error('Empty list');
    const res = this.head.data;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length -= 1;
    return res;
  }

  count() {
    return this.length;
  }

  delete(value) {
    if (this.length === 0) throw new Error('Empty list');
    let curr = this.head;
    while (curr && curr.data !== value) {
      curr = curr.next;
    }
    if (curr) {
      if (this.length === 1) {
        this.head = null;
        this.tail = this.head;
      } else if (curr === this.head) {
        return this.shift();
      } else if (curr === this.tail) {
        return this.pop();
      } else {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }
      this.length -= 1;
    }
    return null;
  }
}
