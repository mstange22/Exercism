class BinarySearchTree {
  data: number
  left: BinarySearchTree
  right: BinarySearchTree
  constructor(data: number) {
    this.data = data
    this.left = undefined
  }

  each(func: (data: number) => void): void  {
    func(this.data)
  }

  insert(data: number) {
    if (data < this.data) {
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