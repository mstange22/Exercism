// NOTE: had to assert non-null is some test cases
class BinarySearchTree {
  left?: BinarySearchTree
  right?: BinarySearchTree

  constructor(public data: number) {}

  each(func: (data: number) => void): void {
    this.left && this.left.each(func)
    func(this.data)
    this.right && this.right.each(func)
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
}

export default BinarySearchTree