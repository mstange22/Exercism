export default class Zipper {
    constructor(tree, top = null, parent = null) {
    this.focus = tree;
    this.top = top || tree;
    this.parent = parent;
  }
  
  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.top;
  }

  left() {
    return this.focus.left ? new Zipper(this.focus.left, this.top, this) : null;
  }

  right() {
    return this.focus.right ? new Zipper(this.focus.right, this.top, this) : null;
  }

  value() {
    return this.focus.value;
  }

  up() {
    return this.parent;
  }

  setValue(value) {
    this.focus.value = value;
    return this;
  }

  setLeft(left) {
    this.focus.left = Object.assign({}, left);
    return this;
  }

  setRight(right) {
    this.focus.right = right;
    return this;
  }
}