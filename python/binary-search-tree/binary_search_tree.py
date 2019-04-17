class TreeNode(object):
    def __init__(self, data, left, right):
        self.data = data
        self.left = left
        self.right = right

    def __str__(self):
        fmt = 'TreeNode(data={}, left={}, right={})'
        return fmt.format(self.data, self.left, self.right)


class BinarySearchTree(object):
    def __init__(self, tree_data):
        self.root = TreeNode(tree_data[0], None, None)
        for data in tree_data[1:]:
            self.insert(data, self.root)

    def insert(self, data, root=None):
        if not root:
            root = TreeNode(data, None, None)
        elif data <= root.data:
            if not root.left:
                root.left = TreeNode(data, None, None)
            else:
                self.insert(data, root.left)
        elif not root.right:
            root.right = TreeNode(data, None, None)
        else:
            self.insert(data, root.right)
        
    def data(self):
        return self.root

    def sorted_data(self, root=None, data=[]):
        if root == None:
            root = self.root
            data = []
        if root.left:
            self.sorted_data(root.left, data)
        data.append(root.data)
        if root.right:
            self.sorted_data(root.right, data)
        return data
        
