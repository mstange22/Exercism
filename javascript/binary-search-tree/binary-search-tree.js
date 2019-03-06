export class BinarySearchTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data <= this.data) {
      if (!this.left) {
        this.left = new BinarySearchTree(data);
      } else {
        this.left.insert(data);
      }
    } else if (!this.right) {
      this.right = new BinarySearchTree(data);
    } else {
      this.right.insert(data);
    }
  }

  each(cb, root = this) {
    if (root) {
      this.each(cb, root.left);
      cb(root.data);
      this.each(cb, root.right);
    }
  }
}
