class BinarySearchTree {
  data: number
  left: BinarySearchTree | null
  right: BinarySearchTree | null

  constructor(data: number) {
    this.data = data
    this.left = null
    this.right = null
  }

  each(func: (data: number) => void): void {
    const elements: number[] = []
    this.inOrder(elements)
    elements.forEach(data => func(data))
  }

  insert(data: number) {
    if (data <= this.data) {
      if (this.left) {
        this.left.insert(data);
      } else  {
        this.left = new BinarySearchTree(data)
      }
    } else {
      if (this.right) {
        this.right.insert(data)
      } else {
        this.right = new BinarySearchTree(data)
      }
    }
  }

  inOrder(elements: number[]): void {
    if (this.left) {
      this.left.inOrder(elements)
    }
    elements.push(this.data)
    if (this.right) {
      this.right.inOrder(elements)
    }
  }

}

export default BinarySearchTree