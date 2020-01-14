class TreeNode {
  String data;
  TreeNode left;
  TreeNode right;

  TreeNode(String data) {
    this.data = data;
  }
}

class BinarySearchTree {
  TreeNode root;
  List<String> sortedTree;

  BinarySearchTree(String input) {
    insert(input);
  }

  void insert(String data, [TreeNode root = null]) {
    // is first call to insert (at root)?
    if (root == null) {
      root = this.root;
    }

    // first element in tree?
    if (root == null) {
      this.root = TreeNode(data);
      return;
    }

    // find correct location, recursively traversing tree
    if (data.compareTo(root.data) <= 0) {
      if (root.left == null) {
        root.left = TreeNode(data);
      } else {
        insert(data, root.left);
      }
    } else {
      if (root.right == null) {
        root.right = TreeNode(data);
      } else {
        insert(data, root.right);
      }
    }
  }

  List<String> get sortedData {
    sortedTree = [];
    inOrder(this.root);
    return sortedTree;
  }

  void inOrder(TreeNode root) {
    if (root == null) {
      return;
    }
    if (root.left != null) {
      inOrder(root.left);
    }
    sortedTree.add(root.data);
    if (root.right != null) {
      inOrder(root.right);
    }
  }
}
