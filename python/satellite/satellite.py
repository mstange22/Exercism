TREE_NODES = {}

def tree_from_traversals(preorder, inorder, first = True):
  if first:
    TREE_NODES.clear()
    if len(preorder) != len(inorder):
      raise ValueError('Traversals must be same length')
    if sorted(preorder) != sorted(inorder):
      raise ValueError('Traversals must contain same elements')

  tree = {}

  if len(preorder) == 0:
    return tree
  
  root = preorder[0]

  if root in TREE_NODES.keys():
      raise ValueError('Duplicate element')
  else:
    TREE_NODES[root] = True

  tree['v'] = root
  inorder_root = inorder.index(root)

  inorder_left = inorder[:inorder_root]
  inorder_right = inorder[inorder_root + 1:]

  preorder_left = [i for i in preorder if i in inorder_left]
  preorder_right = [i for i in preorder if i in inorder_right]

  tree['l'] = tree_from_traversals(preorder_left, inorder_left, False)
  tree['r'] = tree_from_traversals(preorder_right, inorder_right, False)

  return tree