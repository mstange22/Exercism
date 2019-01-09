export default class Zipper {
// function bt(value, left, right) {
//   return {
//     value,
//     left,
//     right,
//   };
// }

// function leaf(value) {
//   return bt(value, null, null);
// }

// const t1 = bt(1, bt(2, null, leaf(3)), leaf(4));
// const t2 = bt(1, bt(5, null, leaf(3)), leaf(4));
// const t3 = bt(1, bt(2, leaf(5), leaf(3)), leaf(4));
// const t4 = bt(1, leaf(2), leaf(4));
// const t5 = bt(1, bt(2, null, leaf(3)), bt(6, leaf(7), leaf(8)));
// const t6 = bt(1, bt(2, null, leaf(5)), leaf(4));

// class Zipper {
  constructor(tree) {
    this.zipper = [0, tree];
    this.focus = 1;
    for (let i = 1; i < this.zipper.length; i++) {
      if (this.zipper[i]) {
        this.zipper.push(this.zipper[i].left);
        this.zipper[i].left = this.zipper[this.zipper.length - 1];
        this.zipper.push(this.zipper[i].right);
        this.zipper[i].right = this.zipper[this.zipper.length - 1];
      }
    }
  }

  static fromTree(tree) {
    const treeCopy = JSON.parse(JSON.stringify(tree));
    return new Zipper(treeCopy);
  }

  toTree(index = 1) {
    if (!this.zipper[index]) return null;
    return {
      value: this.zipper[index].value,
      left: this.toTree(2 * index),
      right: this.toTree((2 * index) + 1),
    }
  }

  left() {
    this.focus = this.focus * 2;
    return this.zipper[this.focus] ? this : null;
  }

  right() {
    this.focus = (this.focus * 2) + 1;
    return this.zipper[this.focus] ? this : null;
  }

  value() {
    return this.zipper[this.focus].value;
  }

  up() {
    if (this.focus === 1) return null;
    this.focus = Math.trunc(this.focus / 2);
    return this;
  }

  setValue(value) {
    this.zipper[this.focus].value = value;
    return this;
  }

  setLeft(tree) {
    this.zipper[this.focus * 2] = tree;
    this.zipper[this.focus].left = this.zipper[this.focus * 2];
    if (tree) {
      this.zipper.push(tree.left);
      this.zipper.push(tree.right);
    } else {
      this.zipper[this.focus * 2 * 2] = null;
      this.zipper[(this.focus * 2 * 2) + 1] = null;
    }
    return this;
  }

  setRight(tree) {
    this.zipper[(this.focus * 2) + 1] = tree;
    this.zipper[this.focus].right = this.zipper[(this.focus * 2) + 1];
    if (tree) {
      this.zipper.push(tree.left);
      this.zipper.push(tree.right);
    } else {
      this.zipper[((this.focus * 2) + 1) * 2] = null;
      this.zipper[(((this.focus * 2) + 1) * 2) + 1] = null;
    }
    return this;
  }
};

// const zipper = Zipper.fromTree(t1);
// console.log('res:', JSON.stringify(zipper.left().right().setValue(5).toTree(), null, 2));
// console.log('expected:', JSON.stringify(t6, null, 2));