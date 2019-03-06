export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor(list = []) {
    this.length = 0;
    this.head = null;
    list.forEach(value => this.add(new Element(value)));
  }

  add(element) {
    element.next = this.head;
    this.head = element;
    this.length++;
  }

  toArray() {
    const res = [];
    let curr = this.head;
    while (curr !== null) {
      res.push(curr.value);
      curr = curr.next;
    }
    return res;
  }

  reverse() {
    return new List(this.toArray());
  }
}